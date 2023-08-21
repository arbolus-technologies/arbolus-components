import { Meta, StoryObj } from '@storybook/react'
import { Icon, IconProps } from './Icon'

const meta: Meta<IconProps> = {
  title: 'Design System/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'text',
      type: 'string'
    },
    fontSize: {
      control: 'text',
      type: 'string'
    },
    color: {
      control: { type: 'color' }
    },
    filled: {
      control: 'boolean'
    },
    onClick: {
      action: 'clicked'
    },
    id: {
      control: 'text',
      type: 'string'
    },
    tooltip: {
      control: 'text',
      type: 'string'
    }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

export const Component: Story = {
  args: {
    name: 'menu',
    fontSize: '20px',
    color: '#000'
  }
}
