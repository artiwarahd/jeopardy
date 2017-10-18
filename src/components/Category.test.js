import React from 'react';
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Category } from './Category';
import { categories, clue } from '../data/fixtures';
import { fakeServer } from 'sinon';

const props = { category: categories[0], clues: [clue] };

describe('Category', () => {
  let server;

  beforeEach(() => {
    server = fakeServer.create();

    server.respondWith(
      'GET',
      `http://jservice.io/api/category?id=${props.category.id}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify([clue])
      ]
    );
  });
  
  describe('when creating a new category', () => {
    let category;

    beforeEach(done => {
      category = shallow(<Category {...props} />);
      server.respond(done);
    });

    it('render all clues', () => {
      expect(category.find('Clue').length).toEqual(props.clues.length);
    });

    it('render link to homepage', () => {
      expect(category.find('Link[to="/"]').exists()).toBe(true);
    });
  });
});
