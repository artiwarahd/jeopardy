import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { categories } from '../data/fixtures';

const props = { categories };

describe('App', () => {
  const app = shallow(<App {...props} />);

  it('render link for each category', () => {
    expect(app.find('Link').length).toEqual(props.categories.length);
  });

  it('render link to /category', () => {
    expect(app.find('Link').at(0).props().to).toEqual('/category');
  });
});