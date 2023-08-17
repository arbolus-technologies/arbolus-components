import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button, ButtonProps } from './Button'

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    text: 'Click me',
    onClick: jest.fn(),
    disabled: false,
    type: 'primary',
    nativeType: 'button',
    startIcon: '🚀',
    endIcon: '🌟'
  }

  it('renders button text', () => {
    const { getByText } = render(<Button {...defaultProps} />)
    const buttonText = getByText(defaultProps.text)
    expect(buttonText).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const { getByText } = render(<Button {...defaultProps} />)
    const button = getByText(defaultProps.text)
    fireEvent.click(button)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('disables the button when disabled prop is true', () => {
    const { getByText } = render(<Button {...defaultProps} disabled={true} />)
    const button = getByText(defaultProps.text)
    expect(button).toBeDisabled()
  })

  it('applies the correct class based on type prop', () => {
    const { container } = render(<Button {...defaultProps} />)
    const button = container.querySelector('button')
    expect(button).toHaveClass('primary')
  })

  it('renders start and end icons when provided', () => {
    const { getByText } = render(<Button {...defaultProps} />)
    const startIcon = getByText('🚀')
    const endIcon = getByText('🌟')
    expect(startIcon).toBeInTheDocument()
    expect(endIcon).toBeInTheDocument()
  })
})
