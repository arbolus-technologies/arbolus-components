import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Button, ButtonProps } from './Button'

const meta: Meta<ButtonProps> = {
  title: 'Design System/Buttons/Button',
  component: Button,
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
      type: 'string'
    },
    onClick: {
      action: 'clicked'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      type: 'boolean'
    },
    nativeType: {
      options: ['submit', 'reset', 'button'],
      control: { type: 'select' },
      defaultValue: 'button'
    },
    startIcon: {
      control: 'text',
      type: 'string'
    },
    endIcon: {
      control: 'text',
      type: 'string'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    text: 'Primary',
    disabled: false,
    nativeType: 'button',
    type: 'primary'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await userEvent.click(button)
  }
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    text: 'Secondary',
    type: 'secondary'
  }
}

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    text: 'Tertiary',
    type: 'tertiary'
  }
}

export const Confirmation: Story = {
  args: {
    ...Primary.args,
    text: 'Confirmation',
    type: 'confirmation'
  }
}

export const Rejection: Story = {
  args: {
    ...Primary.args,
    text: 'Rejection',
    type: 'rejection'
  }
}
