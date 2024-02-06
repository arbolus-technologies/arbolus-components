import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PaginationBar, PaginationBarProps } from './PaginationBar';

const meta: Meta<PaginationBarProps> = {
  title: 'Design System/Pagination Bar',
  component: PaginationBar,
  parameters: {
    docs: {
      description: {
        component: 'Automatic pagination component'
      }
    }
  },
  argTypes: {
    currentPage: {
      name: 'currentPage*',
      control: 'number',
      type: 'number',
      description: '`required` - Number that determines the current page.'
    },
    totalCount: {
      name: 'totalCount*',
      control: 'number',
      type: 'number',
      description:
        '`required` - Total number of items that must be considered in the pagination process.'
    },
    onSetPage: {
      name: 'onSetPage*',
      action: 'clicked',
      description:
        '`required` - Callback method when clicking a navigation arrow. It returns the page index as a param.'
    },
    itemsPerPage: {
      name: 'itemsPerPage*',
      control: 'number',
      type: 'number',
      description: '`required` - Amount of items that should be displayed per page.'
    }
  }
};

export default meta;
type Story = StoryObj<typeof PaginationBar>;

export const Component: Story = {
  args: {
    currentPage: 1,
    totalCount: 100,
    itemsPerPage: 10
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();

    function onChange(nextPage: number) {
      updateArgs({ currentPage: nextPage });
    }

    return <PaginationBar {...args} onSetPage={onChange} />;
  }
};
