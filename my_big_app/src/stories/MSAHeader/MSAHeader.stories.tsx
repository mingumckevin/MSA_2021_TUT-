import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MSAHeader from './MSAHeader';


export default {
  title: 'UI Components/MSAHeader',
  component: MSAHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MSAHeader>;

const Template: ComponentStory<typeof MSAHeader> = (args) => <MSAHeader/>;

export const Primary = Template.bind({});




