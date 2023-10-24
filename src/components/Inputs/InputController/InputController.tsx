/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import React from 'react';
import { Control, Controller, FieldError, FieldErrors } from 'react-hook-form';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import styles from './InputController.module.scss';

interface ValidatorErrors {
  [key: string]: string;
}

interface InputControllerProps {
  control: Control<any>;
  defaultValue?: string;
  placeholder: string;
  name: string;
  errors: FieldErrors<any>;
  validatorErrors?: ValidatorErrors | null;
  required?: boolean;
  disabled?: boolean;
  size?: 'medium' | 'big';
  isInvalid?: boolean;
  type?: 'text' | 'textarea' | 'number';
  newError?: string;
  onlyInteger?: boolean;
  symbol?: string;
  classnames?: string;
  onHandleChange?: () => void;
  onKeyDown?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  errorClassName?: string;
  onTrackInput?: () => void;
}

export const InputController: React.FC<InputControllerProps> = ({
  control,
  defaultValue,
  placeholder,
  name,
  errors,
  validatorErrors,
  required = false,
  disabled,
  size,
  isInvalid,
  type = 'text',
  newError,
  onlyInteger,
  symbol,
  classnames,
  onHandleChange,
  onKeyDown,
  autoFocus,
  errorClassName = '',
  onTrackInput
}): JSX.Element => {
  const isError = !!(Object.keys(errors).length > 0 && errors[name]);
  const isValidatorError = !!(
    validatorErrors &&
    validatorErrors !== null &&
    typeof validatorErrors.Title !== 'undefined'
  );

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    onChange: (...event: any[]) => void
  ) => {
    onHandleChange?.();
    onChange(evt);
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (onlyInteger) {
      //enable only numbers, arrow keys, tab and backspace (needed for firefox)

      const charCode = typeof evt.which == 'undefined' ? evt.keyCode : evt.which;
      const charStr = String.fromCharCode(charCode);
      if (
        !/^[0-9]+$/.exec(charStr) &&
        evt.keyCode !== 8 &&
        evt.keyCode !== 9 &&
        evt.keyCode !== 37 &&
        evt.keyCode !== 39
      ) {
        evt.preventDefault();
      }
    }
    onKeyDown?.(evt);
  };

  return (
    <div className={clsx(styles.inputContainer, classnames)}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ''}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputGroup className={clsx(symbol ? 'append' : null)}>
            <Input
              disabled={disabled}
              invalid={isError || isInvalid || isValidatorError || !!newError}
              className={clsx(
                styles.inputController,
                size && styles[size],
                disabled && styles.disabled
              )}
              placeholder={required ? `* ${placeholder}` : placeholder}
              type={type}
              value={value ?? ''}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => handleChange(evt, onChange)}
              onKeyDown={handleKeyDown}
              onBlur={onBlur}
              autoFocus={autoFocus}
              onClick={onTrackInput}
            />
            {symbol && (
              <InputGroupAddon
                addonType='append'
                className={clsx({
                  'is-invalid': isError
                })}
              >
                <InputGroupText>{symbol}</InputGroupText>
              </InputGroupAddon>
            )}
          </InputGroup>
        )}
      />
      {(isError || validatorErrors || newError) && (
        <div className={clsx(styles.error, errorClassName)} data-testid='error-yup'>
          {isError && (errors[name] as FieldError).message}
          {validatorErrors?.Title[0]}
          {newError && !isError && newError}
        </div>
      )}
    </div>
  );
};
