import { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from './Button'
import { within, userEvent } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'tab', 'iconButton'],
      control: { type: 'select' },
      defaultValue: 'primary',
      table: {
        type: { summary: 'select' },
      },
    },
    onClick: {
      action: 'clicked',
      table: {
        defaultValue: { summary: '() => console.log("click")' },
        type: { summary: 'function' },
      },
    },

    text: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
      },
    },
    activeTab: {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
      },
    },
    endIcon: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    centerIcon: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    startIcon: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    testId: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    nativeType: {
      options: ['submit', 'reset', 'button'],
      control: { type: 'select' },
      defaultValue: 'button',
    },
  },
} as Meta<ButtonProps>

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Primary Button',
  disabled: false,
  onClick: jest.fn(),
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  text: 'Secondary Button',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  text: 'Tertiary Button',
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  text: 'Danger Button',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  text: 'Success Button',
}

export const Tab = Template.bind({})
Tab.args = {
  type: 'tab',
  text: 'Tab Button',
}

export const IconButton = Template.bind({})
IconButton.args = {
  type: 'iconButton',
  startIcon: 'menu',
}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  type: 'primary',
  text: 'Button with start icon',
  startIcon: 'menu',
}

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
  type: 'primary',
  text: 'Button with end icon',
  endIcon: 'chevron_right',
}

export const WithCenterIcon = Template.bind({})
WithCenterIcon.args = {
  type: 'primary',
  centerIcon: 'menu',
}

Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await expect(args.onClick).toHaveBeenCalled()
}
