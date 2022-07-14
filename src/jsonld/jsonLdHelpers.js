import * as R from 'ramda';

export const ALLOW = 'reprolib:terms/allow';
export const ABOUT = 'reprolib:terms/landingPage';
export const ABOUT_CONTENT = 'reprolib:terms/landingPageContent';
export const ALT_LABEL = 'http://www.w3.org/2004/02/skos/core#altLabel';
export const AUDIO_OBJECT = 'schema:AudioObject';
export const AUTO_ADVANCE = 'reprolib:terms/auto_advance';
export const BACK_DISABLED = 'reprolib:terms/disable_back';
export const CONTENT_URL = 'schema:contentUrl';
export const DELAY = 'reprolib:terms/delay';
export const DESCRIPTION = 'schema:description';
export const DO_NOT_KNOW = 'reprolib:terms/dont_know_answer';
export const ENCODING_FORMAT = 'schema:encodingFormat';
export const FULL_SCREEN = 'reprolib:terms/full_screen';
export const IMAGE = 'schema:image';
export const IMAGE_OBJECT = 'schema:ImageObject';
export const INPUT_TYPE = 'reprolib:terms/inputType';
export const INPUTS = 'reprolib:terms/inputs';
export const IS_ABOUT = 'reprolib:terms/isAbout';
export const ITEM_LIST_ELEMENT = 'schema:itemListElement';
export const MAX_VALUE = 'schema:maxValue';
export const MEDIA = 'reprolib:terms/media';
export const MIN_VALUE = 'schema:minValue';
export const MULTIPLE_CHOICE = 'reprolib:terms/multipleChoice';
export const MIN_VALUE_IMAGE = 'schema:minValueImg';
export const MAX_VALUE_IMAGE = 'schema:maxValueImg';
export const SLIDER_LABEL = 'schema:sliderLabel';
export const SCORING = 'reprolib:terms/scoring';
export const ITEM_LIST = 'reprolib:terms/itemList';
export const ITEM_OPTIONS = 'reprolib:terms/itemOptions';
export const OPTIONS = 'reprolib:terms/options';
export const SLIDER_OPTIONS = 'reprolib:terms/sliderOptions';
export const VALUE_TYPE = 'reprolib:terms/valueType';
export const ENABLE_NEGATIVE_TOKENS = 'reprolib:terms/enableNegativeTokens';
export const NAME = 'schema:name';
export const PREAMBLE = 'reprolib:terms/preamble';
export const PREF_LABEL = 'http://www.w3.org/2004/02/skos/core#prefLabel';
export const QUESTION = 'schema:question';
export const REFUSE_TO_ANSWER = 'reprolib:terms/refused_to_answer';
export const REQUIRED_VALUE = 'reprolib:terms/required';
export const SCHEMA_VERSION = 'schema:schemaVersion';
export const SCORING_LOGIC = 'reprolib:terms/scoringLogic';
export const SHUFFLE = 'reprolib:terms/shuffle';
export const ISPRIZE = 'reprolib:terms/isPrize';
export const TIMER = 'reprolib:terms/timer';
export const TRANSCRIPT = 'schema:transcript';
export const URL = 'schema:url';
export const VALUE = 'schema:value';
export const PRICE = 'schema:price';
export const SCORE = 'schema:score';
export const ALERT = 'schema:alert';
export const CORRECT_ANSWER = 'schema:correctAnswer';
export const RESPONSE_OPTIONS = 'reprolib:terms/responseOptions';
export const VARIABLE_NAME = 'reprolib:terms/variableName';
export const JS_EXPRESSION = 'reprolib:terms/jsExpression';
export const VERSION = 'schema:version';
export const IS_VIS = 'reprolib:terms/isVis';
export const ADD_PROPERTIES = 'reprolib:terms/addProperties';
export const COMPUTE = 'reprolib:terms/compute';
export const SUBSCALES = 'reprolib:terms/subScales';
export const FINAL_SUBSCALE = 'reprolib:terms/finalSubScale';
export const IS_AVERAGE_SCORE = 'reprolib:terms/isAverageScore';
export const MESSAGES = 'reprolib:terms/messages';
export const MESSAGE = 'reprolib:terms/message';
export const LOOKUP_TABLE = 'reprolib:terms/lookupTable';
export const AGE = 'reprolib:terms/age';
export const RAW_SCORE = 'reprolib:terms/rawScore';
export const SEX = 'reprolib:terms/sex';
export const T_SCORE = 'reprolib:terms/tScore';
export const OUTPUT_TEXT = 'reprolib:terms/outputText';
export const OUTPUT_TYPE = 'reprolib:terms/outputType';
export const RESPONSE_ALERT = 'reprolib:terms/responseAlert';
export const RANDOMIZE_OPTIONS = 'reprolib:terms/randomizeOptions';
export const CONTINOUS_SLIDER = 'reprolib:terms/continousSlider';
export const SHOW_TICK_MARKS = 'reprolib:terms/showTickMarks';
export const IS_OPTIONAL_TEXT = 'reprolib:terms/isOptionalText';
export const IS_OPTIONAL_TEXT_REQUIRED = 'reprolib:terms/isOptionalTextRequired';
export const RESPONSE_ALERT_MESSAGE = 'schema:responseAlertMessage';
export const MIN_ALERT_VALUE = 'schema:minAlertValue';
export const MAX_ALERT_VALUE = 'schema:maxAlertValue';
export const ORDER = 'reprolib:terms/order';

export const languageListToObject = (list) => {
  if (typeof list === 'undefined' || typeof list === 'string' || list.length === 0) {
    return undefined;
  }
  return list.reduce(
    (obj, item) => ({
      ...obj,
      [item['@language']]: item['@value'],
    }),
    {}
  );
};

export const flattenIdList = (list = []) => list.map((item) => item['@id']);

export const listToVisObject = (list = []) =>
  list.reduce(
    (obj, item) => ({
      ...obj,
      [item[VARIABLE_NAME][0]['@value']]: item[IS_VIS] ? item[IS_VIS][0]['@value'] : true,
    }),
    {}
  );

export const isSkippable = (allowList) => {
  if (allowList.includes(REFUSE_TO_ANSWER)) {
    return true;
  }
  return !!allowList.includes(DO_NOT_KNOW);
};

export const flattenValueConstraints = (vcObj) =>
  Object.keys(vcObj).reduce((accumulator, key) => {
    if (key === '@type') {
      return { ...accumulator, valueType: R.path([key, 0], vcObj) };
    }
    if (key === MAX_VALUE) {
      return { ...accumulator, maxValue: R.path([key, 0, '@value'], vcObj) };
    }
    if (key === MIN_VALUE) {
      return { ...accumulator, minValue: R.path([key, 0, '@value'], vcObj) };
    }
    if (key === MULTIPLE_CHOICE) {
      return {
        ...accumulator,
        multipleChoice: R.path([key, 0, '@value'], vcObj),
      };
    }

    if (key === IS_OPTIONAL_TEXT_REQUIRED) {
      return {
        ...accumulator,
        isOptionalTextRequired: R.path([key, 0, '@value'], vcObj),
      };
    }
    if (key === SCORING) {
      return {
        ...accumulator,
        scoring: R.path([key, 0, '@value'], vcObj),
      };
    }
    if (key === SHOW_TICK_MARKS) {
      return {
        ...accumulator,
        showTickMarks: R.path([key, 0, '@value'], vcObj),
      };
    }

    /*  if (key === IS_OPTIONAL_TEXT) {
        return {
          ...accumulator,
          isOptionalText: R.path([key, 0, "@value"], vcObj),
        }
      }*/

    if (key === RESPONSE_ALERT) {
      return {
        ...accumulator,
        responseAlert: R.path([key, 0, '@value'], vcObj),
      };
    }

    if (key === RANDOMIZE_OPTIONS) {
      return {
        ...accumulator,
        randomizeOptions: R.path([key, 0, '@value'], vcObj),
      };
    }

    if (key === CONTINOUS_SLIDER) {
      return {
        ...accumulator,
        continousSlider: R.path([key, 0, '@value'], vcObj),
      };
    }
    if (key === RESPONSE_ALERT_MESSAGE) {
      return {
        ...accumulator,
        responseAlertMessage: R.path([key, 0, '@value'], vcObj),
      };
    }
    if (key === MIN_ALERT_VALUE) {
      return {
        ...accumulator,
        minAlertValue: R.path([key, 0, '@value'], vcObj),
      };
    }
    if (key === MAX_ALERT_VALUE) {
      return {
        ...accumulator,
        maxAlertValue: R.path([key, 0, '@value'], vcObj),
      };
    }
    if (key === VALUE_TYPE) {
      return {
        ...accumulator,
        valueType: R.path([key, 0, '@id'], vcObj),
      };
    }
    if (key === ENABLE_NEGATIVE_TOKENS) {
      return {
        ...accumulator,
        enableNegativeTokens: R.path([key, 0, '@value'], vcObj),
      };
    }
    if (key === ITEM_LIST_ELEMENT) {
      const itemList = R.path([key], vcObj);
      return { ...accumulator, itemList: flattenItemList(itemList) };
    }
    if (key === ITEM_LIST) {
      const itemList = R.path([key], vcObj);
      return {
        ...accumulator,
        itemList: itemList.map((item) => ({
          description: R.path([DESCRIPTION, 0, '@value'], item),
          image: item[IMAGE],
          name: languageListToObject(item[NAME]),
        })),
      };
    }

    if (key === ITEM_OPTIONS) {
      const itemOptions = R.path([key], vcObj);
      return {
        ...accumulator,
        itemOptions: itemOptions.map((option) => ({
          score: R.path([SCORE, 0, '@value'], option),
          value: R.path([VALUE, 0, '@value'], option),
          alert: R.path([ALERT, 0, '@value'], option),
        })),
      };
    }

    if (key === OPTIONS) {
      const options = R.path([key], vcObj);
      return {
        ...accumulator,
        options: options.map((option) => ({
          description: R.path([DESCRIPTION, 0, '@value'], option),
          image: option[IMAGE],
          name: languageListToObject(option[NAME]),
        })),
      };
    }

    if (key === SLIDER_OPTIONS) {
      const sliderOptions = R.path([SLIDER_OPTIONS], vcObj);

      return {
        ...accumulator,
        sliderOptions: sliderOptions.map((option) => ({
          minValue: R.path([MIN_VALUE, 0, '@value'], option),
          maxValue: R.path([MAX_VALUE, 0, '@value'], option),
          minValueImg: R.path([MIN_VALUE_IMAGE, 0, '@value'], option),
          maxValueImg: R.path([MAX_VALUE_IMAGE, 0, '@value'], option),
          sliderLabel: R.path([SLIDER_LABEL, 0, '@value'], option),
          itemList: flattenItemList(R.path([ITEM_LIST_ELEMENT], option)),
        })),
      };
    }

    if (key === REQUIRED_VALUE) {
      return { ...accumulator, required: R.path([key, 0, '@value'], vcObj) };
    }
    if (key === IMAGE) {
      return { ...accumulator, image: vcObj[key] };
    }
    return accumulator;
  }, {});

export const flattenItemList = (list = []) =>
  list.map((item) => ({
    name: languageListToObject(item[NAME]),
    value: R.path([VALUE, 0, '@value'], item),
    price: R.path([PRICE, 0, '@value'], item),
    score: R.path([SCORE, 0, '@value'], item),
    alert: R.path([ALERT, 0, '@value'], item),
    description: R.path([DESCRIPTION, 0, '@value'], item),
    image: item[IMAGE],
    valueConstraints: item[RESPONSE_OPTIONS]
      ? flattenValueConstraints(R.path([RESPONSE_OPTIONS, 0], item))
      : undefined,
  }));

export const listToValue = (list = []) => (list.length > 0 ? list[0]['@value'] : undefined);

export const transformMedia = (mediaObj) => {
  if (typeof mediaObj === 'undefined') {
    return undefined;
  }

  const keys = Object.keys(mediaObj);
  return keys.map((key) => {
    const media = mediaObj[key];
    return {
      contentUrl: R.path([0, CONTENT_URL, 0, '@value'], media),
      transcript: R.path([0, TRANSCRIPT, 0, '@value'], media),
      encodingType: R.path([0, ENCODING_FORMAT, 0, '@value'], media),
      name: R.path([0, NAME, 0, '@value'], media),
    };
  });
};

export const transformInputs = (inputs) =>
  inputs.reduce((accumulator, inputObj) => {
    const key = R.path([NAME, 0, '@value'], inputObj);
    let val = R.path([VALUE, 0, '@value'], inputObj);

    if (typeof val === 'undefined' && inputObj[ITEM_LIST_ELEMENT]) {
      const itemList = R.path([ITEM_LIST_ELEMENT], inputObj);
      val = flattenItemList(itemList);
    }

    if (inputObj['@type'].includes(AUDIO_OBJECT)) {
      val = {
        contentUrl: languageListToObject(inputObj[CONTENT_URL]),
        transcript: languageListToObject(inputObj[TRANSCRIPT]),
      };
    }

    if (inputObj['@type'].includes(IMAGE_OBJECT)) {
      val = {
        contentUrl: languageListToObject(inputObj[CONTENT_URL]),
      };
    }

    return {
      ...accumulator,
      [key]: val,
    };
  }, {});

export const flattenLookupTable = (lookupTable, isFinalSubScale) => {
  if (!Array.isArray(lookupTable)) {
    return undefined;
  }

  let references = {
    [RAW_SCORE]: 'rawScore',
    [OUTPUT_TEXT]: 'outputText',
  };

  if (!isFinalSubScale) {
    Object.assign(references, {
      [AGE]: 'age',
      [SEX]: 'sex',
      [T_SCORE]: 'tScore',
    });
  }

  return R.map(
    (row) =>
      Object.keys(references).reduce((previousValue, key) => {
        return {
          ...previousValue,
          [references[key]]: R.path([key, 0, '@value'], row),
        };
      }, {}),
    lookupTable
  );
};

export const itemAttachExtras = (transformedItem, schemaUri, addProperties = {}) => ({
  ...transformedItem,
  schema: schemaUri,
  variableName: R.path([0, '@value'], addProperties[VARIABLE_NAME]),
  visibility: R.path([0, '@value'], addProperties[IS_VIS]),
});
