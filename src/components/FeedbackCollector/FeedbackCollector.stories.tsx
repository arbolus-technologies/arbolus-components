import { Meta, StoryObj } from '@storybook/react';
import { FeedbackCollector, FeedbackCollectorProps } from './FeedbackCollector';

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
      options: ['bottom-right', 'center'],
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
      description: 'cookie (change this to see the component)'
    },
    title: {
      name: 'title',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'title in the feedbackCollector'
    },
    subtitle: {
      name: 'subtitle',
      control: 'text',
      type: 'string',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      description: 'subtitle in the feedbackCollector'
    }
  }
};

export default meta;
type Story = StoryObj<typeof FeedbackCollector>;

export const Component: Story = {
  args: {
    cookie: 'cookieName',
    direction: 'bottom-right',
    title: 'How is your experience with Canopy?',
    subtitle:
      'Tell us about your canopy experience, this will help us to improve the quality of our services'
  }
};
