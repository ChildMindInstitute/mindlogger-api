export const itemFixtures = {
  rawItemWithTextField() {
    return {
      '@id': 'Screen3',
      '@type': ['reprolib:schemas/Field'],
      _id: 'screen/62a9ac06b90b7f2ba9e1aeab',
      'http://www.w3.org/2004/02/skos/core#altLabel': [{ '@language': 'en', '@value': 'Screen3' }],
      'http://www.w3.org/2004/02/skos/core#prefLabel': [{ '@language': 'en', '@value': 'Screen3' }],
      'reprolib:terms/allowEdit': [{ '@type': 'http://schema.org/Boolean', '@value': true }],
      'reprolib:terms/inputType': [
        { '@type': 'http://www.w3.org/2001/XMLSchema#string', '@value': 'text' },
      ],
      'reprolib:terms/isOptionalText': [{ '@type': 'http://schema.org/Boolean', '@value': false }],
      'reprolib:terms/isVis': [{ '@value': false }],
      'reprolib:terms/options': [
        {
          'reprolib:terms/isResponseIdentifier': [
            { '@type': 'http://schema.org/Boolean', '@value': false },
          ],
          'reprolib:terms/maxLength': [{ '@type': 'http://schema.org/Number', '@value': '500' }],
          'reprolib:terms/requiredValue': [
            { '@type': 'http://schema.org/Boolean', '@value': false },
          ],
          'reprolib:terms/valueType': [{ '@id': 'http://www.w3.org/2001/XMLSchema#string' }],
        },
      ],
      'reprolib:terms/responseOptions': [
        {
          'reprolib:terms/isResponseIdentifier': [
            { '@type': 'http://schema.org/Boolean', '@value': false },
          ],
          'reprolib:terms/maxLength': [{ '@type': 'http://schema.org/Number', '@value': '500' }],
          'reprolib:terms/requiredValue': [
            { '@type': 'http://schema.org/Boolean', '@value': false },
          ],
          'reprolib:terms/valueType': [{ '@id': 'http://www.w3.org/2001/XMLSchema#string' }],
        },
      ],
      'reprolib:terms/timer': [{ '@value': 0 }],
      'schema:correctAnswer': [{ '@language': 'en', '@value': '' }],
      'schema:description': [
        { '@language': 'en', '@value': '' },
        { '@language': 'en', '@value': '' },
      ],
      'schema:header': [{ '@language': 'en', '@value': '' }],
      'schema:name': [{ '@language': 'en', '@value': 'Screen3' }],
      'schema:question': [
        { '@language': 'en', '@value': 'Some text with formating \n- one\n- two\n- tree' },
      ],
      'schema:schemaVersion': [{ '@language': 'en', '@value': '0.0.1' }],
      'schema:section': [{ '@language': 'en', '@value': '' }],
      'schema:version': [{ '@language': 'en', '@value': '0.0.1' }],
      size: 1982,
    };
  },

  itemWithTextField() {
    return {
      altLabel: {
        en: 'Screen3',
      },
      autoAdvance: false,
      backDisabled: false,
      correctAnswer: {
        en: '',
      },
      delay: undefined,
      description: {
        en: '',
      },
      fullScreen: false,
      id: 'screen/62a9ac06b90b7f2ba9e1aeab',
      inputType: 'text',
      inputs: {},
      isOptionalText: false,
      media: undefined,
      preamble: undefined,
      question: {
        en: `Some text with formating \n- one
- two
- tree`,
      },
      schemaVersion: {
        en: '0.0.1',
      },
      skippable: undefined,
      timer: 0,
      valueConstraints: {
        isOptionalText: false,
        valueType: 'http://www.w3.org/2001/XMLSchema#string',
      },
      version: {
        en: '0.0.1',
      },
    };
  },
};
