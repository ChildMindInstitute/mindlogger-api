export const accountFixtures = {
  defaultAuthResponse() {
    return {
      account: {
        accountId: '6242fd4a5197b9338bdb075b',
        accountName: 'Joe',
        applets: {
          coordinator: ['6242febd5197b9338bdb0766'],
          editor: ['6242febd5197b9338bdb0766'],
          manager: ['6242febd5197b9338bdb0766'],
          owner: ['6242febd5197b9338bdb0766'],
          reviewer: ['6242febd5197b9338bdb0766'],
          user: ['6242febd5197b9338bdb0766'],
        },
        isDefaultName: true,
      },
      authToken: {
        expires: '2022-10-16T11:40:47.587856+00:00',
        scope: ['core.user_auth'],
        token: 'TDRclrEvOUfo6hRxYoRA2qXjWWxHrcv4DQUpVrB8BXqaKEhMx0oAvWuSZWmKK1CB',
      },
      message: 'Login succeeded.',
      user: {
        _accessLevel: 2,
        _id: '6242fd4a5197b9338bdb075a',
        _modelType: 'user',
        admin: false,
        created: '2022-03-29T12:36:26.287000+00:00',
        creatorId: '6242fd4a5197b9338bdb075a',
        displayName: 'Joe',
        email: 'joe@email.com',
        emailVerified: false,
        firstName: 'Joe',
        lastName: 'Strong',
        login: '',
        otp: false,
        public: false,
        size: 0,
        status: 'enabled',
      },
    };
  },
};
