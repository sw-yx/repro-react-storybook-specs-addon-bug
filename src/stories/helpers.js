// import APIError from '../../valueObjects/APIError';
import {
  action,
  storiesOf,
  specs,
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll
} from '../../.storybook/facade';
import {
  render,
  // renderIntoDocument,
  cleanup,
  wait as realWait
  // Simulate
} from 'react-testing-library';
// } from '@testing-library/react';

const isTest = process.env.NODE_ENV === 'test';
const TIMEOUT = 1000;

const success = (name, ...result) => {
  return (...args) => {
    action(name)(...args);
    return isTest
      ? Promise.resolve(...result)
      : new Promise((resolve) => setTimeout(() => resolve(...result), TIMEOUT));
  };
};

// const fail = (name, error = new APIError('API says no!')) => {
//   return (...args) => {
//     action(name)(...args, error);
//     return isTest
//       ? Promise.reject(error)
//       : new Promise((resolve, reject) =>
//           setTimeout(() => reject(error), TIMEOUT)
//         );
//   };
// };

const wait = isTest
  ? realWait
  : () => {
      /* TODO: Figure out how we can get storybook to wait when specs are run
     in the UI (works fine when run headlessly with jest)

     With the current version of react-testing-library, running a story that
     has a spec with wait, will raise an error:
     Uncaught (in promise) Error: Unable to find an element with the text: buy domain. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

    [36m<div />[39m
     at getAllByText (preview.f11ccfded76faebc1bd0.bundle.js:1)
     at firstResultOrNull (preview.f11ccfded76faebc1bd0.bundle.js:1)
     at getByText (preview.f11ccfded76faebc1bd0.bundle.js:1)
     at preview.f11ccfded76faebc1bd0.bundle.js:1
     at runExpectation (preview.f11ccfded76faebc1bd0.bundle.js:1)
    */
    };

export {
  storiesOf,
  action,
  success,
  // fail,
  specs,
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
  render,
  // renderIntoDocument,
  cleanup,
  wait,
  isTest
  // Simulate
  // APIError
};
