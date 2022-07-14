import { shallowTransformApplet } from './shallowTransformApplet';
import { appletFixtures } from '../fixtures';

it('convert raw json-ld to shallow applet json', () => {
  let rawJson = appletFixtures.defaultRawAppletJson();
  let expected = appletFixtures.defaultShallowApplet();
  let actual = shallowTransformApplet(rawJson);
  expect(actual).toEqual(expected);
});
