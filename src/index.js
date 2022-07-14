import 'isomorphic-fetch';
import { MindloggerClient } from './MindloggerClient';
import { MindloggerApplets } from './MindloggerApplets';
import config from 'core/config';

const client = new MindloggerClient({
  baseUrl: config.mindLogger.baseUrl,
  credentials: config.mindLogger.credentials,
  fetch: window.fetch.bind(window),
});

const MindloggerApi = {
  Client: client,
  Applets: new MindloggerApplets({ client }),
};

export default MindloggerApi;
