/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import React from 'react';
import { FormFeedback, Input, InputGroup, InputGroupText } from 'reactstrap';
import styles from './InputText.module.scss';

export interface InputTextProps {
  defaultValue?: string;
  placeholder: string;
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  symbol?: string;
  errorMsg?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  placeholder,
  invalid,
  defaultValue,
  disabled,
  required,
  symbol,
  errorMsg
}): JSX.Element => {


  return (
    <div className={classNames(styles.inputContainer)}>
          <InputGroup>
          <Input type="text" required={required} disabled={disabled} invalid={invalid} placeholder={placeholder} defaultValue={defaultValue} />
          {errorMsg && (<FormFeedback>
            {errorMsg}
          </FormFeedback>)}
          {symbol && (<InputGroupText>
            {symbol}
          </InputGroupText>)}
        </InputGroup>
    </div>
  );
};
