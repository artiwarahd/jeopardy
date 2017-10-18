import rootReducer from './index';
import * as actions from '../actions';
import { categories } from '../data/fixtures';

describe('rootReducer', () => {
  it('returns initial state', () => {
    const reducer = rootReducer({}, {});

    expect(reducer).toEqual({ categories: [], category: {}});
  });

  it('sets categories', () => {
    const reducer = rootReducer({}, { type: actions.SET_CATEGORIES, categories: categories });

    expect(reducer).toEqual({ categories: categories, category: {}});
  });

  it('picks a categories', () => {
    const category = categories[0];
    const reducer = rootReducer({}, { type: actions.PICK_CATEGORY, category: category });

    expect(reducer).toEqual({ categories: [], category: category });
  })
});