/* eslint-env mocha */
import React from 'react';
import {assert} from 'chai';
import ListItemIcon, {styleSheet} from './ListItemIcon';
import {createShallowWithContext} from 'test/utils';

/**
 * An item that goes in lists.
 */
describe('<ListItemIcon>', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallowWithContext();
    classes = shallow.context.styleManager.render(styleSheet, {group: 'mui'});
  });

  it('should render a div', () => {
    const wrapper = shallow(
      <ListItemIcon />
    );
    assert.strictEqual(wrapper.is('div'), true, 'should be a div');
    assert.strictEqual(wrapper.hasClass(classes.root), true, 'should have the root class');
  });
});
