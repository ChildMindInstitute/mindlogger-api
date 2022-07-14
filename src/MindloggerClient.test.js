import { MindloggerClient } from './MindloggerClient';
import { setupServer } from 'tools/test-server/setupServer';
import { rest } from 'msw';
import fetch from 'isomorphic-fetch';
import { accountFixtures } from './fixtures';

let baseUrl = 'http://example.com/api';
let user = 'user@email.com';
let password = 'secret';
let fooFixture = { foo: 'test' };

const server = setupServer([
  rest.get(`${baseUrl}/user/authentication`, (req, res, ctx) => {
    if (req.headers.get('Girder-Authorization')) {
      return res(ctx.json(accountFixtures.defaultAuthResponse()));
    }

    return res(ctx.json({ error: new Error('Boom!') }));
  }),

  rest.get(`${baseUrl}/private/foo`, (req, res, ctx) => {
    if (req.headers.get('Girder-Token')) {
      return res(ctx.json(fooFixture));
    }

    return res(ctx.json({ error: new Error('Boom!') }));
  }),
]);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Mindlogger Client', () => {
  let client;
  let token;
  let auth;

  beforeEach(() => {
    client = new MindloggerClient({ baseUrl, fetch });

    token = accountFixtures.defaultAuthResponse().authToken.token;
    auth = accountFixtures.defaultAuthResponse();
  });

  describe('setter and getters', () => {
    it('has empty header by default', async () => {
      expect(client.headers).toEqual({});
    });

    it('encodes creds in base64', async () => {
      const { credentials } = client.setUserAndPassword(user, password);

      expect(credentials).toEqual(`${btoa(`${user}:${password}`)}`);
    });

    it('has auth headers with credentials', () => {
      const { headers } = client.setUserAndPassword(user, password);

      expect(headers).toEqual({
        'Girder-Authorization': `Basic ${client.credentials}`,
      });
    });

    it('replaces credentials in headers if token present', () => {
      client.setUserAndPassword(user, password);

      client.token = token;

      const actual = client.headers;

      expect(client.token).toEqual(token);
      expect(actual).toEqual({
        'Girder-Token': token,
      });
    });
  });

  it('authenticates with credentials', async () => {
    client.setUserAndPassword(user, password);
    const actual = await client.authenticate();
    expect(actual).toEqual(auth);
  });

  it('requests private endpoint with token', async () => {
    const releativeUrl = '/private/foo';
    client.token = token;

    const actual = await client.request(releativeUrl);

    expect(actual).toEqual(fooFixture);
  });
});
