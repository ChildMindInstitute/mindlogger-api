import { decryptAsJson, encryptAndStringifyObject, getAESKey, getPrivateKey } from './encryption';
import { accountFixtures, appletFixtures } from '../fixtures';

it('decrypt default response', () => {
  const { user } = accountFixtures.defaultAuthResponse();
  const applet = appletFixtures.defaultApplet();

  const privateKey = getPrivateKey({
    userId: user._id,
    email: 'igor@miresource.com',
    password: 'y0QmWyt58Ycv',
  });

  expect(privateKey).toBeTruthy();

  const aesKey = getAESKey(
    privateKey,
    applet.encryption.appletPublicKey,
    applet.encryption.appletPrime,
    applet.encryption.base
  );

  const data = { boo: 1 };

  let encryptedData = encryptAndStringifyObject(data, aesKey);
  expect(data).toEqual(decryptAsJson(encryptedData, aesKey));
});
