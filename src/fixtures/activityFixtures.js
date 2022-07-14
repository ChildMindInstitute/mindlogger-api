export const activityFixtures = {
  defaultRawActivityJson() {
    return {
      '@id': 'First Activity',
      '@type': ['reprolib:schemas/Activity'],
      _id: 'activity/6242febd5197b9338bdb075d',
      'http://www.w3.org/2004/02/skos/core#altLabel': [
        { '@language': 'en', '@value': 'First Activity' },
      ],

      'http://www.w3.org/2004/02/skos/core#prefLabel': [
        { '@language': 'en', '@value': 'First Activity' },
      ],

      'reprolib:terms/addProperties': [
        {
          'reprolib:terms/isAbout': [{ '@id': 'Screen1' }],
          'reprolib:terms/isVis': [{ '@value': true }],
          'reprolib:terms/variableName': [{ '@language': 'en', '@value': 'Screen1' }],
        },
      ],

      'reprolib:terms/allow': [{ '@list': [] }],
      'reprolib:terms/hasResponseIdentifier': [
        { '@type': 'http://schema.org/Boolean', '@value': false },
      ],

      'reprolib:terms/isOnePageAssessment': [
        { '@type': 'http://schema.org/Boolean', '@value': false },
      ],

      'reprolib:terms/isPrize': [{ '@type': 'http://schema.org/Boolean', '@value': false }],
      'reprolib:terms/isReviewerActivity': [
        { '@type': 'http://schema.org/Boolean', '@value': false },
      ],

      'reprolib:terms/isVis': [{ '@value': false }],
      'reprolib:terms/order': [
        { '@list': [{ '@id': '6242febd5197b9338bdb075d/6242febd5197b9338bdb075e' }] },
      ],

      'reprolib:terms/preamble': [{ '@language': 'en', '@value': '' }],
      'reprolib:terms/scoreOverview': [{ '@language': 'en', '@value': '' }],
      'reprolib:terms/shuffle': [{ '@type': 'http://schema.org/Boolean', '@value': false }],
      'repronim:timeUnit': [{ '@language': 'en', '@value': 'yearmonthdate' }],
      'schema:description': [{ '@language': 'en', '@value': 'First Activity Description' }],
      'schema:image': '',
      'schema:schemaVersion': [{ '@language': 'en', '@value': '0.0.1' }],
      'schema:splash': [{ '@language': 'en', '@value': '' }],
      'schema:version': [{ '@language': 'en', '@value': '0.0.1' }],
    };
  },

  defaultShallowActivity() {
    return {
      addProperties: [
        {
          'reprolib:terms/isAbout': [
            {
              '@id': 'Screen1',
            },
          ],
          'reprolib:terms/isVis': [
            {
              '@value': true,
            },
          ],
          'reprolib:terms/variableName': [
            {
              '@language': 'en',
              '@value': 'Screen1',
            },
          ],
        },
      ],
      altLabel: {
        en: 'First Activity',
      },
      autoAdvance: false,
      backDisabled: false,
      compute: undefined,
      description: {
        en: 'First Activity Description',
      },
      finalSubScale: undefined,
      fullScreen: false,
      id: 'activity/6242febd5197b9338bdb075d',
      image: undefined,
      info: undefined,
      isPrize: false,
      messages: undefined,
      name: {
        en: 'First Activity',
      },
      notification: {},
      order: ['6242febd5197b9338bdb075d/6242febd5197b9338bdb075e'],
      preamble: {
        en: '',
      },
      schemaVersion: {
        en: '0.0.1',
      },
      scoringLogic: undefined,
      shuffle: false,
      skippable: false,
      subScales: undefined,
      version: {
        en: '0.0.1',
      },
    };
  },

  defaultShallowActivityWithItems() {
    return {
      ...activityFixtures.defaultShallowActivity(),
      items: activityFixtures.defaultItems(),
    };
  },

  defaultItems() {
    return [
      {
        altLabel: {
          en: 'Screen1',
        },
        autoAdvance: true,
        backDisabled: false,
        correctAnswer: undefined,
        delay: undefined,
        description: {
          en: '',
        },
        fullScreen: false,
        id: 'screen/6242febd5197b9338bdb075e',
        inputType: 'radio',
        inputs: {},
        isOptionalText: false,
        media: undefined,
        preamble: undefined,
        question: {
          en: 'Text For The First Screen',
        },
        schema: '6242febd5197b9338bdb075d/6242febd5197b9338bdb075e',
        schemaVersion: {
          en: '0.0.1',
        },
        skippable: undefined,
        timer: 0,
        valueConstraints: {
          enableNegativeTokens: false,
          isOptionalText: false,
          itemList: [
            {
              alert: undefined,
              description: '',
              image: undefined,
              name: {
                en: 'Option 1',
              },
              price: undefined,
              score: undefined,
              value: 0,
              valueConstraints: undefined,
            },
            {
              alert: undefined,
              description: '',
              image: undefined,
              name: {
                en: 'Option 2',
              },
              price: undefined,
              score: undefined,
              value: 1,
              valueConstraints: undefined,
            },
          ],
          maxValue: 2,
          minValue: 1,
          multipleChoice: false,
          responseAlert: false,
          scoring: false,
          valueType: 'http://www.w3.org/2001/XMLSchema#anyURI',
        },
        variableName: 'Screen1',
        version: {
          en: '0.0.1',
        },
        visibility: true,
      },
    ];
  },
};
