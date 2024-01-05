import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { IconButton, IconButtonProps } from './IconButton';

const meta: Meta<IconButtonProps> = {
  title: 'Design System/Buttons/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: 'This component is a button with a centered icon.'
      }
    }
  },
  argTypes: {
    icon: {
      name: 'icon*',
      control: 'text',
      type: 'string',
      description: '`required` - Icon name that is positioned inside of the button.'
    },
    onClick: {
      name: 'onClick',
      action: 'clicked',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Method called on button click.'
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: false }
      },
      description: 'Boolean by default false that disables the button.'
    },
    nativeType: {
      name: 'nativeType',
      options: ['submit', 'reset', 'button'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'button' }
      },
      description: 'Button native type. By default is `button`.'
    },
    id: {
      name: 'id',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description:
        'IconButton id. It is assigned automatically as the component id and the data-testid.'
    },
    borderColor: {
      name: 'borderColor',
      control: 'color',
      type: 'string',
      table: {
        defaultValue: { summary: '#6157FC' }
      },
      description: 'Icon border color.'
    },
    iconColor: {
      name: 'iconColor',
      control: 'color',
      type: 'string',
      table: {
        defaultValue: { summary: '#6157FC' }
      },
      description: 'Inner icon color.'
    },
    backgroundColor: {
      name: 'backgroundColor',
      control: 'color',
      type: 'string',
      table: {
        defaultValue: { summary: '#FFFFFF' }
      },
      description: 'Icon background color.'
    }
  }
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Component: Story = {
  args: {
    icon: 'people',
    disabled: false,
    nativeType: 'button'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
};
