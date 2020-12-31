import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { PuppySprite } from '../src/PuppySprite/PuppySprite';

storiesOf('PuppySprite', module)
  .addDecorator(withInfo)
  .add(
    'This is a cSS animated sprite of a puppy - step1',   
    () => <PuppySprite />,
    { info: { header: true, inline: true } }
  )
  .add(
    'This is a css animated a puppy with fliped set.',
    ()=>
    <PuppySprite flipped={true} />,
    {Info: {header:true, inline: true}}
  )
 
 