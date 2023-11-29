import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Button, ButtonProps } from './Button';
import { ButtonTypeEnum } from '../../../models/enums';

const { CONFIRMATION, GREY, PRIMARY, REJECTION, SECONDARY, TERTIARY } = ButtonTypeEnum;

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
      options: [PRIMARY, SECONDARY, TERTIARY, CONFIRMATION, REJECTION, GREY],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: PRIMARY }
      },
      description: '`required` - Different type of buttons allowed.'
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
    startIcon: {
      name: 'startIcon',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Icon name that is positioned at the beginning of the button text.'
    },
    endIcon: {
      name: 'endIcon',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Icon name that is positioned at the end of the button text.'
    },
    id: {
      name: 'id',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description:
        'Button id. It is assigned automatically as the component id and the data-testid.'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary',
    type: PRIMARY,
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
    type: SECONDARY
  }
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    text: 'Tertiary',
    type: TERTIARY
  }
};

export const Confirmation: Story = {
  args: {
    ...Primary.args,
    text: 'Confirmation',
    type: CONFIRMATION
  }
};

export const Rejection: Story = {
  args: {
    ...Primary.args,
    text: 'Rejection',
    type: REJECTION
  }
};

export const Grey: Story = {
  args: {
    ...Primary.args,
    text: 'Grey',
    type: GREY
  }
};

export const Red: Story = {
  args: {
    ...Primary.args,
    text: 'Red',
    type: GREY
  }
};
