import {
  ALLOW,
  ALT_LABEL,
  AUTO_ADVANCE,
  BACK_DISABLED,
  CORRECT_ANSWER,
  DELAY,
  DESCRIPTION,
  flattenIdList,
  flattenValueConstraints,
  FULL_SCREEN,
  INPUT_TYPE,
  INPUTS,
  IS_OPTIONAL_TEXT,
  isSkippable,
  languageListToObject,
  listToValue,
  MEDIA,
  PREAMBLE,
  QUESTION,
  RESPONSE_OPTIONS,
  SCHEMA_VERSION,
  TIMER,
  transformInputs,
  transformMedia,
  VERSION,
} from './jsonLdHelpers';
import * as R from 'ramda';

export function transformItem(itemJson) {
  // For items, 'skippable' is undefined if there's no ALLOW prop
  const allowList = flattenIdList(R.path([ALLOW, 0, '@list'], itemJson));
  const skippable = isSkippable(allowList) ? true : undefined;

  const valueConstraintsObj = R.pathOr({}, [RESPONSE_OPTIONS, 0], itemJson);
  const valueConstraints = flattenValueConstraints(valueConstraintsObj);

  const inputs = R.pathOr([], [INPUTS], itemJson);
  const inputsObj = transformInputs(inputs);

  const media = transformMedia(R.path([MEDIA, 0], itemJson));
  valueConstraints.isOptionalText = listToValue(itemJson[IS_OPTIONAL_TEXT]);

  const res = {
    id: itemJson._id,
    description: languageListToObject(itemJson[DESCRIPTION]),
    correctAnswer: languageListToObject(itemJson[CORRECT_ANSWER]),
    schemaVersion: languageListToObject(itemJson[SCHEMA_VERSION]),
    version: languageListToObject(itemJson[VERSION]),
    altLabel: languageListToObject(itemJson[ALT_LABEL]),
    inputType: listToValue(itemJson[INPUT_TYPE]),
    isOptionalText: listToValue(itemJson[IS_OPTIONAL_TEXT]),
    question: languageListToObject(itemJson[QUESTION]),
    preamble: languageListToObject(itemJson[PREAMBLE]),
    timer: R.path([TIMER, 0, '@value'], itemJson),
    delay: R.path([DELAY, 0, '@value'], itemJson),
    valueConstraints,
    skippable,
    fullScreen: allowList.includes(FULL_SCREEN),
    backDisabled: allowList.includes(BACK_DISABLED),
    autoAdvance: allowList.includes(AUTO_ADVANCE),
    inputs: inputsObj,
    media,
  };

  if (res.inputType === 'markdown-message') {
    res.inputType = 'markdownMessage';
  }
  return res;
}
