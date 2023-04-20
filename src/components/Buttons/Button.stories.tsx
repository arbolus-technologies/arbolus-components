import { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from './Button'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      description: 'Button type',
      defaultValue: 'primary',
      table: {
        type: 'string',
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'tab', 'iconButton'],
      },
    },
    nativeType: {
      control: { type: 'select', options: ['button', 'submit', 'reset'] },
    },
    disabled: {
      defaultValue: false,
    },
    activeTab: {
      name: 'activeTab',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'We use this when button when type === tab',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    startIcon: {
      type: { name: 'string', required: false },
      description: 'startIcon | endIcon | centerIcon',
    },
    endIcon: {
      type: { name: 'string', required: false },
      description: 'startIcon | endIcon | centerIcon',
    },
    centerIcon: {
      type: { name: 'string', required: false },
      description:
        'startIcon | endIcon | centerIcon -- Will not show text, only working with type = icon',
    },
  },
} as Meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary: StoryFn<ButtonProps> = Template.bind({})
Primary.args = {
  activeTab: false,
  disabled: false,
  text: 'Primary Button',
  nativeType: 'button',
  type: 'primary',
  onClick: () => console.log('click'),
}

export const Secondary: StoryFn<ButtonProps> = Template.bind({})
Secondary.args = {
  activeTab: false,
  disabled: false,
  text: 'Secondary Button',
  nativeType: 'button',
  type: 'secondary',
  onClick: () => console.log('click'),
}

export const SuccessWithEndIcon: StoryFn<ButtonProps> = Template.bind({})
SuccessWithEndIcon.args = {
  activeTab: false,
  disabled: false,
  text: 'Success Button',
  endIcon: 'add',
  nativeType: 'button',
  type: 'success',
  onClick: () => console.log('click'),
}

export const DangerWithStartIcon: StoryFn<ButtonProps> = Template.bind({})
DangerWithStartIcon.args = {
  activeTab: false,
  disabled: false,
  text: 'Danger Button',
  startIcon: 'chevron_left',
  nativeType: 'button',
  type: 'danger',
  onClick: () => console.log('click'),
}
