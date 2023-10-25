/* eslint-disable react/react-in-jsx-scope */
import { Meta, StoryObj } from '@storybook/react';
import { ArbolusAvatar, ArbolusAvatarProps } from './ArbolusAvatar';

const meta: Meta<ArbolusAvatarProps> = {
  title: 'Design System/ArbolusAvatar',
  component: ArbolusAvatar,
  parameters: {
    docs: {
      description: {
        component: 'This component is a button with a centered icon.'
      }
    }
  },
  argTypes: {
    profileImage: {
      name: 'profileImage url',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Profile image'
    },
    name: {
      name: 'user name',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Profile image'
    },
    lastName: {
      name: 'user lastName',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Profile image'
    },
    children: {
      name: 'children after name',
      control: 'children',
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        Bold: <b>Bold</b>,
        Italic: <i>Italic</i>
      }
    },
    title: {
      name: 'user Title',
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
