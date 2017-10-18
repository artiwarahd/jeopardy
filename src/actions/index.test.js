import * as actions from './index';
import { categories } from '../data/fixtures';

describe('actions', () => {
  it('create an action to set all categories', () => {
    const expectedAction = {
      type: actions.SET_CATEGORIES,
      categories: categories
    }

    expect(actions.setCategories(categories)).toEqual(expectedAction);
  });

  it('create an action to pick a category', () => {
    const category = categories[0];

    const expectedAction = {
      type: actions.PICK_CATEGORY,
      category: category
    }

    expect(actions.pickCategory(category)).toEqual(expectedAction);
  });
});