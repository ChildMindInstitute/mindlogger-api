import { activityFixtures, appletFixtures, responseFixtures } from '../fixtures';
import { toAppletResponse } from './toAppletResponse';
import { getPublicKey, getPrivateKey, getAESKey, decryptAsJson } from './encryption';

describe('prepare applet response', () => {
  it('converts applet with one option', () => {
    const publicId = appletFixtures.defaultPublicId();
    const applet = appletFixtures.defaultApplet();
    const activity = activityFixtures.defaultShallowActivityWithItems();
    const expected = responseFixtures.oneOptionSelectedResponse();
    const screenIndex = 0;
    const nextsAt = {
      [screenIndex]: 1650529992232,
    };
    let responses = [{ value: 0 }];
    const actual = toAppletResponse({
      publicId,
      applet,
      activity,
      startedAt: expected.responseStarted,
      completedAt: expected.responseCompleted,
      responses,
      nextsAt,
    });

    const { userPublicKey, dataSource } = actual;

    let privateKey = getPrivateKey({
      userId: publicId,
      email: '',
      password: '',
    });

    expect(userPublicKey).toEqual(
      Array.from(getPublicKey(privateKey, applet.encryption.appletPrime, applet.encryption.base))
    );

    delete actual.userPublicKey;
    delete expected.userPublicKey;

    const AESKey = getAESKey(
      privateKey,
      applet.encryption.appletPublicKey,
      applet.encryption.appletPrime,
      applet.encryption.base
    );

    expect(decryptAsJson(dataSource, AESKey)).toEqual(responses);

    delete actual.dataSource;
    delete expected.dataSource;

    expect(actual).toEqual(expected);
  });
});
