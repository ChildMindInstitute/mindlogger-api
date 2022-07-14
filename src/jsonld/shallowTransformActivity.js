import * as R from 'ramda';
import {
  ALLOW,
  DESCRIPTION,
  languageListToObject,
  flattenIdList,
  isSkippable,
  SCHEMA_VERSION,
  VERSION,
  ALT_LABEL,
  PREAMBLE,
  FULL_SCREEN,
  BACK_DISABLED,
  AUTO_ADVANCE,
  VARIABLE_NAME,
  SCORING_LOGIC,
  ADD_PROPERTIES,
  ORDER,
  COMPUTE,
  JS_EXPRESSION,
  SUBSCALES,
  LOOKUP_TABLE,
  flattenLookupTable,
  FINAL_SUBSCALE,
  IS_AVERAGE_SCORE,
  MESSAGES,
  MESSAGE,
  OUTPUT_TYPE,
  PREF_LABEL,
  SHUFFLE,
  IMAGE,
  ISPRIZE,
  itemAttachExtras,
} from './jsonLdHelpers';
import { transformItem } from './transformItem';

export function shallowTransformActivity(activityJson) {
  const allowList = flattenIdList(R.pathOr([], [ALLOW, 0, '@list'], activityJson));
  const scoringLogic = activityJson[SCORING_LOGIC]; // TO DO
  const addProperties = activityJson[ADD_PROPERTIES];
  const preamble = languageListToObject(activityJson[PREAMBLE]);
  const order = (activityJson[ORDER] && flattenIdList(activityJson[ORDER][0]['@list'])) || [];
  const notification = {}; // TO DO
  const info = languageListToObject(activityJson.info); // TO DO
  const compute =
    activityJson[COMPUTE] &&
    R.map((item) => {
      return {
        jsExpression: R.path([JS_EXPRESSION, 0, '@value'], item),
        variableName: R.path([VARIABLE_NAME, 0, '@value'], item),
      };
    }, activityJson[COMPUTE]);
  const subScales =
    activityJson[SUBSCALES] &&
    R.map((subScale) => {
      return {
        jsExpression: R.path([JS_EXPRESSION, 0, '@value'], subScale),
        variableName: R.path([VARIABLE_NAME, 0, '@value'], subScale),
        lookupTable: flattenLookupTable(subScale[LOOKUP_TABLE], false),
      };
    }, activityJson[SUBSCALES]);

  const finalSubScale = activityJson[FINAL_SUBSCALE] && {
    isAverageScore: R.path([FINAL_SUBSCALE, 0, IS_AVERAGE_SCORE, 0, '@value'], activityJson),
    variableName: R.path([FINAL_SUBSCALE, 0, VARIABLE_NAME, 0, '@value'], activityJson),
    lookupTable: flattenLookupTable(R.path([FINAL_SUBSCALE, 0, LOOKUP_TABLE], activityJson), true),
  };

  const messages =
    activityJson[MESSAGES] &&
    R.map((item) => {
      return {
        message: R.path([MESSAGE, 0, '@value'], item),
        jsExpression: R.path([JS_EXPRESSION, 0, '@value'], item),
        outputType: R.path([OUTPUT_TYPE, 0, '@value'], item),
      };
    }, activityJson[MESSAGES]);

  return {
    id: activityJson._id,
    name: languageListToObject(activityJson[PREF_LABEL]),
    description: languageListToObject(activityJson[DESCRIPTION]),
    schemaVersion: languageListToObject(activityJson[SCHEMA_VERSION]),
    version: languageListToObject(activityJson[VERSION]),
    altLabel: languageListToObject(activityJson[ALT_LABEL]),
    shuffle: R.path([SHUFFLE, 0, '@value'], activityJson),
    image: languageListToObject(activityJson[IMAGE]),
    skippable: isSkippable(allowList),
    backDisabled: allowList.includes(BACK_DISABLED),
    fullScreen: allowList.includes(FULL_SCREEN),
    autoAdvance: allowList.includes(AUTO_ADVANCE),
    isPrize: R.path([ISPRIZE, 0, '@value'], activityJson) || false,
    compute,
    subScales,
    finalSubScale,
    messages,
    preamble,
    addProperties,
    order,
    scoringLogic,
    notification,
    info,
  };
}

export function shallowTransformActivityAndItems(activityJson, itemsJson) {
  const activity = shallowTransformActivity(activityJson);

  let itemIndex = -1,
    itemData;

  const mapItems = R.map((itemKey) => {
    itemIndex += 1;
    itemData = itemsJson[itemKey];

    if (!itemData) {
      console.warn(`Item ID "${itemKey}" defined in 'reprolib:terms/order' was not found`);
      return null;
    }
    const item = transformItem(itemsJson[itemKey]);
    return itemAttachExtras(item, itemKey, activity.addProperties[itemIndex]);
  });
  const nonEmptyItems = R.filter((item) => item, mapItems(activity.order));
  const items = attachPreamble(activity.preamble, nonEmptyItems);

  return {
    ...activity,
    items,
  };
}

const SHORT_PREAMBLE_LENGTH = 90;

const attachPreamble = (preamble, items) => {
  const text = preamble ? preamble.en : '';
  if (text && text.length > SHORT_PREAMBLE_LENGTH) {
    return R.prepend(
      {
        inputType: 'markdownMessage',
        preamble,
      },
      items
    );
  }
  if (text && items.length > 0) {
    return R.assocPath([0, 'preamble'], preamble, items);
  }
  return items;
};
