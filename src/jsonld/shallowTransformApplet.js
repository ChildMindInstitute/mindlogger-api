import { get } from 'lodash';
import {
  URL,
  IMAGE,
  SHUFFLE,
  ORDER,
  ADD_PROPERTIES,
  PREF_LABEL,
  DESCRIPTION,
  ABOUT,
  ABOUT_CONTENT,
  SCHEMA_VERSION,
  VERSION,
  ALT_LABEL,
  languageListToObject,
  listToVisObject,
  flattenIdList,
} from './jsonLdHelpers';

export function shallowTransformApplet(appletRawJson) {
  const { applet, schedule, updated } = appletRawJson;
  const res = {
    id: applet._id,
    groupId: applet.groups,
    schema: applet.url || applet[URL],
    name: languageListToObject(applet[PREF_LABEL]),
    description: languageListToObject(applet[DESCRIPTION]),
    about: languageListToObject(applet[ABOUT]),
    aboutContent: languageListToObject(applet[ABOUT_CONTENT]),
    schemaVersion: languageListToObject(applet[SCHEMA_VERSION]),
    version: languageListToObject(applet[VERSION]),
    altLabel: languageListToObject(applet[ALT_LABEL]),
    visibility: listToVisObject(applet[ADD_PROPERTIES]),
    image: applet[IMAGE],
    order: flattenIdList(applet[ORDER][0]['@list']),
    schedule,
    contentUpdateTime: updated,
    responseDates: applet.responseDates,
    shuffle: get(applet, [SHUFFLE, 0, '@value']),
  };
  if (applet.encryption && Object.keys(applet.encryption).length) {
    res.encryption = applet.encryption;
  }
  return res;
}
