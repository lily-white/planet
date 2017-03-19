// @flow weak

import { assert } from 'chai';
import createBreakpoints from './breakpoints';

describe('createBreakpoints', () => {
  let breakpoints;

  before(() => {
    breakpoints = createBreakpoints();
  });

  describe('up', () => {
    it('should work', () => {
      assert.strictEqual(breakpoints.up('md'), '@media (min-width:960px)');
    });
  });

  describe('down', () => {
    it('should work', () => {
      assert.strictEqual(breakpoints.down('md'), '@media (max-width:960px)');
    });
  });

  describe('between', () => {
    it('should work', () => {
      assert.strictEqual(breakpoints.between('sm', 'md'),
        '@media (min-width:600px) and (max-width:1279px)');
    });
  });

  describe('only', () => {
    it('should work', () => {
      assert.strictEqual(breakpoints.only('md'),
        '@media (min-width:960px) and (max-width:1279px)');
    });
  });
});
