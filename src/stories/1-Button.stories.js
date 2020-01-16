import React from 'react';
import { Button } from './Button';
import {
  storiesOf,
  specs,
  describe,
  it,
  expect,
  render,
  action
} from './helpers';

storiesOf('UI/Button', module).add('simple button', () => {
  const story = <Button onClick={action('clicked')}>Hello Button</Button>;

  specs(() =>
    describe('basic test', () => {
      it('should say not available', async () => {
        console.log('xxx');
        const { getByText } = render(story, {
          container: document.getElementById('root')
        });
        // console.log('xxx', await getByText('not available'));
        const el = await getByText('not available');
        expect(el).toBeTruthy();
      });
    })
  );

  return story;
});
