import { transformApplet } from './transformApplet';
import { appletFixtures } from '../fixtures';

it('transforms default applet', () => {
  const json = appletFixtures.defaultRawAppletJson();
  const applet = appletFixtures.defaultApplet();

  expect(transformApplet(json)).toEqual(applet);
});
