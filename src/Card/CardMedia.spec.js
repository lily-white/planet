// @flow

import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import CardMedia, { styleSheet } from './CardMedia';

describe('<CardMedia />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ untilSelector: 'CardMedia' });
    classes = getClasses(styleSheet);
  });

  it('should have the root and custom class', () => {
    const wrapper = shallow(<CardMedia className="woof" image="/foo.jpg" />);
    assert.strictEqual(wrapper.hasClass(classes.root), true);
    assert.strictEqual(wrapper.hasClass('woof'), true);
  });

  it('should have the backgroundImage specified', () => {
    const wrapper = shallow(<CardMedia image="/foo.jpg" />);
    assert.strictEqual(wrapper.prop('style').backgroundImage, 'url(/foo.jpg)');
  });

  it('should spread custom props on the root node', () => {
    const wrapper = shallow(<CardMedia image="/foo.jpg" data-my-prop="woof" />);
    assert.strictEqual(wrapper.prop('data-my-prop'), 'woof', 'custom prop should be woof');
  });
});
