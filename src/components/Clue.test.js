import React from 'react';
import { shallow } from 'enzyme';
import Clue from './Clue';
import { clue } from '../data/fixtures';

const props = { clue };

describe('Clue', () => {
  let clue = shallow(<Clue {...props} />);

  it('render clue value', () => {
    expect(clue.find('.clue-value').text()).toEqual(props.clue.value);
  });

  it('render clue question', () => {
    expect(clue.find('.clue-question').text()).toEqual(props.clue.question);
  });

  it('render clue answer', () => {
    expect(clue.find('.clue-answer').text()).toEqual(props.clue.answer);
  });

  it('hide the answer as default', () => {
    expect(clue.state().showAnswer).toBe(false);
    expect(clue.find('.text-revealed').exists()).toBe(false);
    expect(clue.find('.text-hidden').exists()).toBe(true);
  });

  describe('when rendering no value clue', () => {
    beforeEach(() => {
      props.clue.value = undefined;
      clue = shallow(<Clue {...props} />);
    });

    it('render "unknown" text for no value', () => {
      expect(clue.find('.clue-value').text()).toEqual('unknown');
    });
  });
  
  describe('when clicking on the clue', () => {
    beforeAll(() => {
      clue.find('.row.clue').simulate('click');
    });

    it('reveal answer', () => {
      expect(clue.state().showAnswer).toBe(true);
      expect(clue.find('.text-revealed').exists()).toBe(true);
      expect(clue.find('.text-hidden').exists()).toBe(false);
    });
  });
});