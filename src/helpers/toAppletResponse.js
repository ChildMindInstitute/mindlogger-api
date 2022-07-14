import { encryptAndStringifyObject, getAESKey, getPrivateKey, getPublicKey } from './encryption';

const trimId = (id) => id.split('/').pop();

export function toAppletResponse(input = {}, options = { lang: 'en' }) {
  const { lang } = options;
  const { applet, activity, publicId, startedAt, completedAt, responses, nextsAt } = input;
  let encryption = applet.encryption;

  const privateKey = getPrivateKey({
    userId: publicId,
    email: '',
    password: '',
  });

  const AESKey = getAESKey(
    privateKey,
    encryption.appletPublicKey,
    encryption.appletPrime,
    encryption.base
  );

  const userPublicKey = Array.from(
    getPublicKey(privateKey, encryption.appletPrime, encryption.base)
  );

  let formattedResponses = [];
  let dataSource;

  if (encryption) {
    formattedResponses = activity.items.reduce(
      (accumulator, item, index) => ({ ...accumulator, [item.schema]: index }),
      {}
    );

    dataSource = encryptAndStringifyObject(responses, AESKey);
  }

  let newNextsAt = {};

  let i = 0;
  for (const key in formattedResponses) {
    newNextsAt[key] = (nextsAt && nextsAt[i]) || completedAt;
    i++;
  }

  return {
    applet: {
      id: trimId(applet.id),
      schemaVersion: applet.schemaVersion[lang],
    },
    activity: {
      id: trimId(activity.id),
      schema: trimId(activity.id),
      schemaVersion: activity.schemaVersion[lang],
    },
    alerts: [],
    subject: null,
    timeout: 0,
    languageCode: lang,
    nextActivities: [],
    event: null,
    client: {
      appId: 'miresource-spa',
      appVersion: '2.10.1',
    },
    publicId,
    tokenCumulation: {
      value: 0,
    },
    responses: formattedResponses,
    nextsAt: newNextsAt,
    userPublicKey,
    responseStarted: startedAt,
    responseCompleted: completedAt,
    dataSource,
  };
}
