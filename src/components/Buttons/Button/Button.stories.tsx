import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Design System/Buttons/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'This component is the base Button which should be used whenever there is an action required. It is not allowed to wrap the component or overwrite the inherit styling.'
      }
    }
  },
  argTypes: {
    text: {
      name: 'text*',
      control: 'text',
      type: 'string',
      description: '`required` - Text within the button.'
    },
    type: {
      name: 'type*',
      options: ['primary', 'secondary', 'tertiary', 'confirmation', 'rejection'],
      control: { type: 'select' },
      description: '`required` - Different type of buttons allowed.'
    },
    onClick: {
      name: 'onClick',
      action: 'clicked',
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
    startIcon: {
      name: 'startIcon',
      control: 'text',
      type: 'string',
      description: 'Icon name that is positioned at the beginning of the button text.'
    },
    endIcon: {
      name: 'endIcon',
      control: 'text',
      type: 'string',
      description: 'Icon name that is positioned at the end of the button text.'
    },
    id: {
      name: 'id',
      control: 'text',
      type: 'string',
      description: 'Button id.'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary',
    type: 'primary',
    nativeType: 'button',
    disabled: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    text: 'Secondary',
    type: 'secondary'
  }
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    text: 'Tertiary',
    type: 'tertiary'
  }
};

export const Confirmation: Story = {
  args: {
    ...Primary.args,
    text: 'Confirmation',
    type: 'confirmation'
  }
};

export const Rejection: Story = {
  args: {
    ...Primary.args,
    text: 'Rejection',
    type: 'rejection'
  }
};
