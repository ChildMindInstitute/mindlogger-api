export const appletFixtures = {
  defaultPublicId() {
    return 'fa7c5edf-6833-45c1';
  },

  defaultRawAppletJson() {
    return {
      accountId: '6242fd4a5197b9338bdb075b',
      activities: {
        '6242febd5197b9338bdb075d': {
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
        },
      },
      applet: {
        '@id': 'Simple Applet_schema',
        _id: 'applet/6242febd5197b9338bdb0766',
        description: 'Simple Applet Description',
        displayName: 'Simple Applet',
        editing: false,
        encryption: {
          appletPrime: [
            145, 81, 247, 158, 61, 18, 219, 202, 232, 226, 212, 174, 111, 182, 150, 2, 124, 131,
            141, 217, 20, 249, 196, 189, 199, 196, 207, 95, 5, 52, 165, 181, 243, 87, 37, 128, 31,
            187, 107, 38, 34, 134, 129, 167, 201, 71, 221, 179, 234, 206, 184, 156, 159, 153, 69,
            255, 92, 94, 216, 92, 123, 213, 75, 229, 157, 100, 42, 138, 122, 46, 115, 197, 82, 150,
            22, 65, 122, 143, 9, 1, 9, 34, 18, 10, 239, 223, 17, 113, 111, 203, 244, 74, 115, 61,
            18, 215, 18, 168, 123, 39, 236, 18, 244, 253, 181, 111, 215, 221, 106, 188, 21, 6, 44,
            91, 150, 49, 151, 218, 39, 73, 254, 108, 160, 249, 81, 35, 165, 67,
          ],
          appletPublicKey: [
            49, 185, 161, 89, 182, 16, 88, 32, 128, 216, 159, 47, 124, 254, 196, 162, 148, 109, 180,
            23, 245, 1, 36, 189, 239, 246, 166, 50, 111, 249, 29, 31, 151, 223, 226, 19, 141, 247,
            47, 163, 177, 111, 90, 69, 77, 84, 88, 205, 158, 0, 81, 108, 230, 253, 58, 206, 175,
            186, 47, 57, 208, 45, 49, 104, 153, 215, 214, 138, 201, 113, 0, 204, 159, 87, 97, 128,
            152, 195, 4, 18, 242, 84, 100, 242, 185, 41, 109, 193, 52, 30, 155, 45, 37, 83, 137,
            155, 240, 16, 128, 203, 180, 234, 121, 202, 176, 11, 218, 89, 237, 21, 227, 8, 8, 220,
            194, 240, 8, 222, 184, 183, 57, 101, 41, 109, 65, 150, 129, 190,
          ],
          base: [2],
        },
        'http://www.w3.org/2004/02/skos/core#prefLabel': [
          { '@language': 'en', '@value': 'Simple Applet' },
        ],
        image:
          'https://mindlogger-applet-contents.s3.amazonaws.com/image/ryy3bwdYsVAjBpCXeBj4hX.png',
        largeApplet: false,
        'reprolib:terms/addProperties': [
          {
            'http://www.w3.org/2004/02/skos/core#prefLabel': [
              { '@language': 'en', '@value': 'First Activity' },
            ],
            'reprolib:terms/isAbout': [{ '@id': 'First Activity_schema' }],
            'reprolib:terms/isVis': [{ '@value': true }],
            'reprolib:terms/variableName': [
              { '@language': 'en', '@value': 'First Activity_schema' },
            ],
          },
        ],
        'reprolib:terms/landingPage': [{ '@language': 'en', '@value': '' }],
        'reprolib:terms/landingPageContent': [{ '@language': 'en', '@value': 'blblblblblblblbl' }],
        'reprolib:terms/landingPageType': [
          { '@type': 'http://www.w3.org/2001/XMLSchema#string', '@value': 'markdown' },
        ],
        'reprolib:terms/order': [{ '@list': [{ '@id': '6242febd5197b9338bdb075d' }] }],
        'reprolib:terms/shuffle': [{ '@type': 'http://schema.org/Boolean', '@value': false }],
        retentionSettings: { enabled: true, period: 0, retention: 'indefinitely' },
        'schema:description': [{ '@language': 'en', '@value': 'Simple Applet Description' }],
        'schema:image':
          'https://mindlogger-applet-contents.s3.amazonaws.com/image/ryy3bwdYsVAjBpCXeBj4hX.png',
        'schema:schemaVersion': [{ '@language': 'en', '@value': '1.0.0' }],
        'schema:version': [{ '@language': 'en', '@value': '1.0.0' }],
        themeId: '61323d4bf7102f0a6e9b3589',
        url: '',
      },
      items: {
        '6242febd5197b9338bdb075d/6242febd5197b9338bdb075e': {
          '@id': 'Screen1',
          '@type': ['reprolib:schemas/Field'],
          _id: 'screen/6242febd5197b9338bdb075e',
          'http://www.w3.org/2004/02/skos/core#altLabel': [
            { '@language': 'en', '@value': 'Screen1' },
          ],
          'http://www.w3.org/2004/02/skos/core#prefLabel': [
            { '@language': 'en', '@value': 'Screen1' },
          ],
          'reprolib:terms/allow': [{ '@list': [{ '@id': 'reprolib:terms/auto_advance' }] }],
          'reprolib:terms/allowEdit': [{ '@type': 'http://schema.org/Boolean', '@value': true }],
          'reprolib:terms/inputType': [
            { '@type': 'http://www.w3.org/2001/XMLSchema#string', '@value': 'radio' },
          ],
          'reprolib:terms/isOptionalText': [
            { '@type': 'http://schema.org/Boolean', '@value': false },
          ],
          'reprolib:terms/isVis': [{ '@value': false }],
          'reprolib:terms/options': [
            {
              'reprolib:terms/colorPalette': [
                { '@type': 'http://schema.org/Boolean', '@value': false },
              ],
              'reprolib:terms/enableNegativeTokens': [
                { '@type': 'http://schema.org/Boolean', '@value': false },
              ],
              'reprolib:terms/options': [
                {
                  'reprolib:terms/isVis': [{ '@value': false }],
                  'schema:description': [{ '@language': 'en', '@value': '' }],
                  'schema:name': [{ '@language': 'en', '@value': 'Option 1' }],
                  'schema:score': [{ '@value': 0 }],
                  'schema:value': [{ '@value': 0 }],
                },
                {
                  'reprolib:terms/isVis': [{ '@value': false }],
                  'schema:description': [{ '@language': 'en', '@value': '' }],
                  'schema:name': [{ '@language': 'en', '@value': 'Option 2' }],
                  'schema:score': [{ '@value': 0 }],
                  'schema:value': [{ '@value': 1 }],
                },
              ],
              'reprolib:terms/valueType': [{ '@id': 'http://www.w3.org/2001/XMLSchema#anyURI' }],
            },
          ],
          'reprolib:terms/responseOptions': [
            {
              'reprolib:terms/colorPalette': [
                { '@type': 'http://schema.org/Boolean', '@value': false },
              ],
              'reprolib:terms/enableNegativeTokens': [
                { '@type': 'http://schema.org/Boolean', '@value': false },
              ],
              'reprolib:terms/multipleChoice': [
                { '@type': 'http://schema.org/Boolean', '@value': false },
              ],
              'reprolib:terms/responseAlert': [
                { '@type': 'http://schema.org/Boolean', '@value': false },
              ],
              'reprolib:terms/scoring': [{ '@type': 'http://schema.org/Boolean', '@value': false }],
              'reprolib:terms/valueType': [{ '@id': 'http://www.w3.org/2001/XMLSchema#anyURI' }],
              'schema:itemListElement': [
                {
                  '@type': ['http://schema.org/option'],
                  'reprolib:terms/isVis': [{ '@value': false }],
                  'schema:color': [{ '@type': 'http://schema.org/String', '@value': '' }],
                  'schema:description': [{ '@language': 'en', '@value': '' }],
                  'schema:name': [{ '@language': 'en', '@value': 'Option 1' }],
                  'schema:value': [{ '@value': 0 }],
                },
                {
                  '@type': ['http://schema.org/option'],
                  'reprolib:terms/isVis': [{ '@value': false }],
                  'schema:color': [{ '@type': 'http://schema.org/String', '@value': '' }],
                  'schema:description': [{ '@language': 'en', '@value': '' }],
                  'schema:name': [{ '@language': 'en', '@value': 'Option 2' }],
                  'schema:value': [{ '@value': 1 }],
                },
              ],
              'schema:maxValue': [{ '@value': 2 }],
              'schema:minValue': [{ '@value': 1 }],
            },
          ],
          'reprolib:terms/timer': [{ '@value': 0 }],
          'schema:description': [
            { '@language': 'en', '@value': '' },
            { '@language': 'en', '@value': '' },
          ],
          'schema:name': [{ '@language': 'en', '@value': 'Screen1' }],
          'schema:question': [{ '@language': 'en', '@value': 'Text For The First Screen' }],
          'schema:schemaVersion': [{ '@language': 'en', '@value': '0.0.1' }],
          'schema:version': [{ '@language': 'en', '@value': '0.0.1' }],
          size: 3174,
        },
      },
      nextActivity: null,
      protocol: {
        '@type': ['reprolib:schemas/Protocol'],
        _id: 'protocol/6242febd5197b9338bdb075c',
      },
      updated: '2022-03-29T12:47:06.887000+00:00',
    };
  },

  defaultShallowApplet() {
    return {
      about: {
        en: '',
      },
      aboutContent: {
        en: 'blblblblblblblbl',
      },
      altLabel: undefined,
      contentUpdateTime: '2022-03-29T12:47:06.887000+00:00',
      description: {
        en: 'Simple Applet Description',
      },
      encryption: {
        appletPrime: [
          145, 81, 247, 158, 61, 18, 219, 202, 232, 226, 212, 174, 111, 182, 150, 2, 124, 131, 141,
          217, 20, 249, 196, 189, 199, 196, 207, 95, 5, 52, 165, 181, 243, 87, 37, 128, 31, 187,
          107, 38, 34, 134, 129, 167, 201, 71, 221, 179, 234, 206, 184, 156, 159, 153, 69, 255, 92,
          94, 216, 92, 123, 213, 75, 229, 157, 100, 42, 138, 122, 46, 115, 197, 82, 150, 22, 65,
          122, 143, 9, 1, 9, 34, 18, 10, 239, 223, 17, 113, 111, 203, 244, 74, 115, 61, 18, 215, 18,
          168, 123, 39, 236, 18, 244, 253, 181, 111, 215, 221, 106, 188, 21, 6, 44, 91, 150, 49,
          151, 218, 39, 73, 254, 108, 160, 249, 81, 35, 165, 67,
        ],
        appletPublicKey: [
          49, 185, 161, 89, 182, 16, 88, 32, 128, 216, 159, 47, 124, 254, 196, 162, 148, 109, 180,
          23, 245, 1, 36, 189, 239, 246, 166, 50, 111, 249, 29, 31, 151, 223, 226, 19, 141, 247, 47,
          163, 177, 111, 90, 69, 77, 84, 88, 205, 158, 0, 81, 108, 230, 253, 58, 206, 175, 186, 47,
          57, 208, 45, 49, 104, 153, 215, 214, 138, 201, 113, 0, 204, 159, 87, 97, 128, 152, 195, 4,
          18, 242, 84, 100, 242, 185, 41, 109, 193, 52, 30, 155, 45, 37, 83, 137, 155, 240, 16, 128,
          203, 180, 234, 121, 202, 176, 11, 218, 89, 237, 21, 227, 8, 8, 220, 194, 240, 8, 222, 184,
          183, 57, 101, 41, 109, 65, 150, 129, 190,
        ],
        base: [2],
      },
      groupId: undefined,
      id: 'applet/6242febd5197b9338bdb0766',
      image: 'https://mindlogger-applet-contents.s3.amazonaws.com/image/ryy3bwdYsVAjBpCXeBj4hX.png',
      name: {
        en: 'Simple Applet',
      },
      order: ['6242febd5197b9338bdb075d'],
      responseDates: undefined,
      schedule: undefined,
      schema: undefined,
      schemaVersion: {
        en: '1.0.0',
      },
      shuffle: false,
      version: {
        en: '1.0.0',
      },
      visibility: {
        'First Activity_schema': true,
      },
    };
  },

  defaultApplet() {
    return {
      about: {
        en: '',
      },
      aboutContent: {
        en: 'blblblblblblblbl',
      },
      activities: [
        {
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
          items: [
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
          ],
          messages: undefined,
          name: {
            en: 'First Activity',
          },
          notification: {},
          order: ['6242febd5197b9338bdb075d/6242febd5197b9338bdb075e'],
          preamble: {
            en: '',
          },
          schema: '6242febd5197b9338bdb075d',
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
        },
      ],
      altLabel: undefined,
      contentUpdateTime: '2022-03-29T12:47:06.887000+00:00',
      description: {
        en: 'Simple Applet Description',
      },
      encryption: {
        appletPrime: [
          145, 81, 247, 158, 61, 18, 219, 202, 232, 226, 212, 174, 111, 182, 150, 2, 124, 131, 141,
          217, 20, 249, 196, 189, 199, 196, 207, 95, 5, 52, 165, 181, 243, 87, 37, 128, 31, 187,
          107, 38, 34, 134, 129, 167, 201, 71, 221, 179, 234, 206, 184, 156, 159, 153, 69, 255, 92,
          94, 216, 92, 123, 213, 75, 229, 157, 100, 42, 138, 122, 46, 115, 197, 82, 150, 22, 65,
          122, 143, 9, 1, 9, 34, 18, 10, 239, 223, 17, 113, 111, 203, 244, 74, 115, 61, 18, 215, 18,
          168, 123, 39, 236, 18, 244, 253, 181, 111, 215, 221, 106, 188, 21, 6, 44, 91, 150, 49,
          151, 218, 39, 73, 254, 108, 160, 249, 81, 35, 165, 67,
        ],
        appletPublicKey: [
          49, 185, 161, 89, 182, 16, 88, 32, 128, 216, 159, 47, 124, 254, 196, 162, 148, 109, 180,
          23, 245, 1, 36, 189, 239, 246, 166, 50, 111, 249, 29, 31, 151, 223, 226, 19, 141, 247, 47,
          163, 177, 111, 90, 69, 77, 84, 88, 205, 158, 0, 81, 108, 230, 253, 58, 206, 175, 186, 47,
          57, 208, 45, 49, 104, 153, 215, 214, 138, 201, 113, 0, 204, 159, 87, 97, 128, 152, 195, 4,
          18, 242, 84, 100, 242, 185, 41, 109, 193, 52, 30, 155, 45, 37, 83, 137, 155, 240, 16, 128,
          203, 180, 234, 121, 202, 176, 11, 218, 89, 237, 21, 227, 8, 8, 220, 194, 240, 8, 222, 184,
          183, 57, 101, 41, 109, 65, 150, 129, 190,
        ],
        base: [2],
      },
      groupId: undefined,
      id: 'applet/6242febd5197b9338bdb0766',
      image: 'https://mindlogger-applet-contents.s3.amazonaws.com/image/ryy3bwdYsVAjBpCXeBj4hX.png',
      name: {
        en: 'Simple Applet',
      },
      order: ['6242febd5197b9338bdb075d'],
      responseDates: undefined,
      schedule: undefined,
      schema: undefined,
      schemaVersion: {
        en: '1.0.0',
      },
      shuffle: false,
      version: {
        en: '1.0.0',
      },
      visibility: {
        'First Activity_schema': true,
      },
    };
  },
};
