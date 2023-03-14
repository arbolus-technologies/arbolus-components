import { Story, Meta } from '@storybook/react'
import React from 'react'
import { InputText, InputTextProps } from './InputText'

export default {
  component: InputText,
  title: 'InputText',
  argTypes: {
    defaultValue: {
      name: 'defaultValue',
      type: { name: 'string', required: false },
    },
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: false },
      table: {
        type: 'string',
        defaultValue: { summary: '' },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    symbol: {
      name: 'symbol',
      type: { name: 'string', required: false },
      table: {
        type: 'string',
        defaultValue: { summary: '' },
      },
    },
    // errors: FieldErrors<any>;
  },
} as Meta<typeof InputText>

const Template: Story<InputTextProps> = (args) => <InputText {...args} />

export const Primary: Story<InputTextProps> = Template.bind({})
Primary.args = {
  placeholder: 'Primary input',
}

export const Error: Story<InputTextProps> = Template.bind({})
Error.args = {
  invalid: true,
  errorMsg: 'There is an error',
}

export const Required: Story<InputTextProps> = Template.bind({})
Required.args = {
  required: true,
  placeholder: 'First Name',
}

export const Disabled: Story<InputTextProps> = Template.bind({})
Disabled.args = {
  disabled: true,
  placeholder: 'This field is disabled',
}

export const WithSymbol: Story<InputTextProps> = Template.bind({})
WithSymbol.args = {
  placeholder: 'Cost/h',
  symbol: '€',
}
