import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { FeedbackCollector, FeedbackCollectorProps } from './FeedbackCollector';

const meta: Meta<FeedbackCollectorProps> = {
  title: 'Design System/FeedbackCollector',
  component: FeedbackCollector,
  parameters: {
    docs: {
      description: {
        component: 'This component is a button with a centered icon.'
      }
    }
  },
  argTypes: {
    onClickClose: {
      name: 'onClickClose',
      action: 'clicked',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'function to close the feedbackCollector'
    },
    onSubmit: {
      name: 'onSubmit',
      action: 'clicked',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Submit onclick button'
    },
    handleOnClickedStar: {
      name: 'handleOnClickedStar',
      action: 'clicked',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Retrieve star number clicked'
    },
    direction: {
      name: 'direction',
      options: ['bottom-right', 'center'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'position of the feedbackCollector'
    },
    cookie: {
      name: 'cookie',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Cookie name'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FeedbackCollector>;

export const Component: Story = {
  args: {
    cookie: 'cookieName',
    direction: 'bottom-right'
  }
};
