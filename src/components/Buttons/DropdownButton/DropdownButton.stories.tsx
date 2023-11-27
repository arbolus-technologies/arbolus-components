import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { ButtonTypeEnum, GrowDirection } from '../../../models/enums';
import { DropdownButton, DropdownButtonProps } from './DropdownButton';

const { PRIMARY, SECONDARY } = ButtonTypeEnum;

const meta: Meta<DropdownButtonProps> = {
  title: 'Design System/Buttons/DropdownButton',
  component: DropdownButton,
  parameters: {
    docs: {
      description: {
        component: 'Dropdown button component that shows a list of options.'
      }
    }
  },
  argTypes: {
    buttonText: {
      name: 'buttonText*',
      control: 'text',
      type: 'string',
      description: '`required` - Text within the dropdown button.'
    },
    dropdownOptions: {
      name: 'dropdownOptions*',
      control: 'object',
      type: 'string',
      description:
        '`required` - Options displayed in the dropdown. Is an object composed of 3 properties: id, text and onClick. `Id` is an optional prop that can set the key and is passed up as a callback if it is needed. The other two props are mandatory.'
    },
    type: {
      name: 'type*',
      options: [PRIMARY, SECONDARY],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: ButtonTypeEnum.PRIMARY }
      },
      description: '`required` - Different types of dropdown button allowed.'
    },
    growDirection: {
      name: 'growDirection*',
      options: [GrowDirection.LEFT, GrowDirection.RIGHT],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: GrowDirection.LEFT }
      },
      description:
        '`required` - Direction where the dropdown list will grow. It affects the button positioning relative to the dropdown.'
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: false }
      },
      description: 'Boolean by default false that disables the dropdown button.'
    },
    id: {
      name: 'id',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description:
        'Dropdown id. It is assigned automatically as the component id and the data-testid.'
    }
  }
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

export const DropdownPrimary: Story = {
  args: {
    buttonText: 'Primary',
    dropdownOptions: [
      { id: 'id1', onClick: () => false, text: 'Option 1' },
      { id: 'id2', onClick: () => false, text: 'Option 2' },
      { id: 'id3', onClick: () => false, text: 'Option 3' },
      {
        id: 'id4',
        onClick: () => false,
        text: 'Option with a super very long text that is not going to fit'
      }
    ],
    type: PRIMARY,
    growDirection: GrowDirection.RIGHT,
    disabled: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
};

export const DropdownSecondary: Story = {
  args: {
    ...DropdownPrimary.args,
    buttonText: 'Secondary',
    type: SECONDARY
  }
};
