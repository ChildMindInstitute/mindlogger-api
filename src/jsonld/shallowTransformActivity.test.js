import {
  shallowTransformActivity,
  shallowTransformActivityAndItems,
} from './shallowTransformActivity';
import { activityFixtures, appletFixtures } from '../fixtures';

it('shallow transform of raw activity', () => {
  const json = activityFixtures.defaultRawActivityJson();
  expect(shallowTransformActivity(json)).toEqual(activityFixtures.defaultShallowActivity());
});

it('shallow transform for raw activity and items', () => {
  const activityJson = activityFixtures.defaultRawActivityJson();
  const { items } = appletFixtures.defaultRawAppletJson();

  expect(shallowTransformActivityAndItems(activityJson, items)).toEqual(
    activityFixtures.defaultShallowActivityWithItems()
  );
});
