import { storiesOf as storiesOfReal } from '@storybook/react';
import { action as actionReal } from '@storybook/addon-actions';
import {
  specs as specsReal,
  describe as describeReal,
  it as itReal,
  beforeEach as beforeEachReal,
  afterEach as afterEachReal,
  before as beforeAllReal,
  after as afterAllReal
} from 'storybook-addon-specifications';
import realExpect from 'expect';

export const storiesOf = storiesOfReal;
export const action = actionReal;
export const specs = specsReal;
export const describe = describeReal;
export const it = itReal;

export const beforeEach = beforeEachReal;
export const afterEach = afterEachReal;
export const beforeAll = beforeAllReal;
export const afterAll = afterAllReal;

export const snapshot = () => {};
export const expect = (...args) => {
  const matchers = realExpect(...args);
  matchers.toMatchSnapshot = () => {};
  return matchers;
};
