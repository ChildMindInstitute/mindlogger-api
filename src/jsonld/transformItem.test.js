import { transformItem } from './transformItem';
import { itemFixtures } from '../fixtures';

it('transform to plain object', () => {
  const jsonLd = itemFixtures.rawItemWithTextField();
  const expected = itemFixtures.itemWithTextField();
  expect(transformItem(jsonLd)).toEqual(expected);
});
