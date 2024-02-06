import { Meta, StoryObj } from '@storybook/react';
import { RadioButtonSizeEnum } from '../../../models/enums';
import { RadioButton, RadioButtonProps } from './RadioButton';

const { SMALL, LARGE } = RadioButtonSizeEnum;

const meta: Meta<RadioButtonProps> = {
  title: 'Design System/Buttons/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          'Radio button component that can be rendered multiple times to have a list of radio buttons.'
      }
    }
  },
  argTypes: {
    option: {
      name: 'option*',
      control: 'object',
      type: 'string',
      description:
        '`required` - Option displayed in the radio button composed of 2 properties: title and value.'
    },
    isChecked: {
      name: 'isChecked*',
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: false }
      },
      description: 'required` - Boolean by default false that marks the radio button as selected.'
    },
    onChange: {
      name: 'onChange*',
      action: 'clicked',
      description:
        '`required` - Callback method when clicking a radius button. It returns an event as a param.'
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: false }
      },
      description: 'Boolean by default false that marks the radio button as disabled.'
    },
    size: {
      name: 'size',
      options: [SMALL, LARGE],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: SMALL }
      },
      description: 'Different sizes allowed: small or large.'
    }
  }
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Component: Story = {
  args: {
    isChecked: false,
    size: SMALL,
    disabled: false,
    option: { title: 'Option 1', value: '1' }
  }
};
