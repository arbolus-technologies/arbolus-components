import { Meta, StoryObj } from '@storybook/react';
import { ArbolusAvatar, ArbolusAvatarProps } from './ArbolusAvatar';

const meta: Meta<ArbolusAvatarProps> = {
  title: 'Design System/ArbolusAvatar',
  component: ArbolusAvatar,
  parameters: {
    docs: {
      description: {
        component: 'Avatar component'
      }
    }
  },
  argTypes: {
    profileImage: {
      name: 'profileImage',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Profile image url'
    },
    name: {
      name: 'name',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'User name'
    },
    lastName: {
      name: 'lastName',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'User lastName'
    },
    children: {
      name: 'children',
      control: 'children',
      mapping: {
        Bold: <b>Bold</b>,
        Italic: <i>Italic</i>
      },
      description: 'Children'
    },
    title: {
      name: 'title',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'User title'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ArbolusAvatar>;

export const Component: Story = {
  args: {
    name: 'Josep',
    lastName: 'Salvat',
    profileImage: ''
  }
};
