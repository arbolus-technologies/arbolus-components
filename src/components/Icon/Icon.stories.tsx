import { Meta, StoryObj } from '@storybook/react'
import { Icon, IconProps } from './Icon'

const meta: Meta<IconProps> = {
  title: 'Design System/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Base Icon that can be used in other components or individually.'
      }
    }
  },
  argTypes: {
    name: {
      name: 'name*',
      control: 'text',
      type: 'string',
      description:
        '`required` - Name of the icon that will render the desired icon from Google Material Symbols.'
    },
    fontSize: {
      name: 'fontSize*',
      control: 'text',
      type: 'string',
      description: '`required` - Size of the icon specified as string (number and pixels: `20px`).'
    },
    color: {
      name: 'color',
      control: { type: 'color' },
      table: {
        defaultValue: { summary: '#000a3f' }
      },
      description: 'Color of the icon.'
    },
    filled: {
      name: 'filled',
      control: 'boolean',
      table: {
        defaultValue: { summary: false }
      },
      description: 'Specify if the icon should be filled or not.'
    },
    onClick: {
      name: 'onClick',
      action: 'clicked',
      description:
        'Method called on icon click. When possible, an IconButton or a Button component should be used instead if an onClick action is needed.'
    },
    tooltip: {
      name: 'tooltip',
      control: 'text',
      type: 'string',
      description: 'Specify the tooltip of the icon on mouse hover.'
    },
    id: {
      name: 'id',
      control: 'text',
      type: 'string',
      description: 'Icon id.'
    }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

export const Component: Story = {
  args: {
    name: 'people',
    fontSize: '20px',
    color: '#000a3f'
  }
}
