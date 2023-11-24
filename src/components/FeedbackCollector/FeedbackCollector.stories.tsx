import { Meta, StoryObj } from '@storybook/react';
import {
  FeedbackCollector,
  FeedbackCollectorDirection,
  FeedbackCollectorProps
} from './FeedbackCollector';

const meta: Meta<FeedbackCollectorProps> = {
  title: 'Design System/FeedbackCollector',
  component: FeedbackCollector,
  parameters: {
    docs: {
      description: {
        component: 'Feedback collector with cookie'
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
      description: 'Function to close the feedbackCollector'
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
      options: ['bottom-right', 'centered'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Position of the feedbackCollector'
    },
    cookie: {
      name: 'cookie',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Cookie (change this to see the component)'
    },
    noBorder: {
      name: 'noBorder',
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: false }
      },
      description: 'Boolean by default false that removes border from feedbackCollector'
    },
    question: {
      name: 'question',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'Question in the feedbackCollector'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FeedbackCollector>;

export const Component: Story = {
  args: {
    cookie: 'cookieName',
    direction: FeedbackCollectorDirection.BOTTOM_RIGHT,
    question: 'How is your experience with Canopy?',
    noBorder: false
  }
};
