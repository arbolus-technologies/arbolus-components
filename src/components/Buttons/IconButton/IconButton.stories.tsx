import { jest } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { IconButton, IconButtonProps } from './IconButton'

const meta: Meta<IconButtonProps> = {
  title: 'Design System/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary', 'confirmation', 'rejection'],
      control: { type: 'select' },
      defaultValue: 'primary',
      table: {
        type: { summary: 'select' }
      }
    },
    text: {
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    onClick: {
      action: 'clicked',
      table: {
        defaultValue: { summary: '() => console.log("click")' },
        type: { summary: 'function' }
      }
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' }
      }
    },
    nativeType: {
      options: ['submit', 'reset', 'button'],
      control: { type: 'select' },
      defaultValue: 'button'
    },
    startIcon: {
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    },
    endIcon: {
      control: 'text',
      table: {
        type: { summary: 'string' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Test: Story = {
  args: {
    text: 'Primary button',
    onClick: jest.fn(),
    disabled: false,
    nativeType: 'button',
    type: 'primary'
  }
}
