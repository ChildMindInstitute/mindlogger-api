export class MindloggerClient {
  constructor(options = {}) {
    this._baseUrl = new URL(options.baseUrl);
    this._fetch = options.fetch;
    this.credentials = options.credentials;
  }

  get headers() {
    let credentials = this.credentials;
    let token = this.token;

    if (token) {
      return {
        'Girder-Token': token,
      };
    } else if (credentials) {
      return {
        'Girder-Authorization': `Basic ${credentials}`,
      };
    }

    return {};
  }

  setUserAndPassword(user, password) {
    this.credentials = `${btoa(`${user}:${password}`)}`;
    return this;
  }

  async authenticate() {
    this._authPromise = this.request('/user/authentication', { method: 'GET' });

    const auth = await this._authPromise;

    let token = auth.authToken.token;
    if (token) {
      this.token = token;
    }

    return auth;
  }

  async request(path, options = {}) {
    if (this._authPromise) {
      await this._authPromise;
    }

    let url = `${this._baseUrl}${path}`;

    const response = await this._fetch(url, {
      ...options,
      method: options.method ?? 'GET',
      headers: {
        ...this.headers,
        ...options.headers,
      },
    });

    return response.json();
  }
}
