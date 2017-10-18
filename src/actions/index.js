export const SET_CATEGORIES = 'SET_CATEGORIES';
export const PICK_CATEGORY = 'PICK_CATEGORY';

export function setCategories(categories){
  const action = {
    type: SET_CATEGORIES,
    categories: categories
  }

  return action;
}

export function pickCategory(category){
  const action = {
    type: PICK_CATEGORY,
    category: category
  }

  return action;
}
