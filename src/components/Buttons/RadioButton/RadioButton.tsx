import clsx from 'clsx';
import React from 'react';
import { Input, Label } from 'reactstrap';

import styles from './RadioButton.module.scss';
import { RadioButtonSize } from '../../../models/types';

interface RadioButtonOption {
  title: string;
  value: string;
}

export interface RadioButtonProps {
  option: RadioButtonOption;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: RadioButtonSize;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  option,
  isChecked,
  onChange,
  disabled = false,
  size = 'small'
}) => {
  const { title, value } = option;
  return (
    <Label
      check
      className={clsx(styles.label, styles[size], {
        [styles.disabled]: disabled
      })}
    >
      <p className={clsx(styles.labelText, styles[size])} title={title}>
        {title}
      </p>
      <Input
        type='radio'
        checked={isChecked}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
      <span
        className={clsx(styles.checkmark, styles[size], {
          [styles.disabled]: disabled
        })}
      />
    </Label>
  );
};
