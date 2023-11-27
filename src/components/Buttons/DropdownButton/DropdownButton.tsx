import clsx from 'clsx';
import React, { useState } from 'react';
import { ButtonTypeEnum, GrowDirection } from '../../../models/enums';
import { Button } from '../Button/Button';
import styles from './DropdownButton.module.scss';

interface DropdownOption {
  id: string;
  text: string;
  onClick: () => void;
}

export interface DropdownButtonProps {
  buttonText: string;
  dropdownOptions: DropdownOption[];
  type: ButtonTypeEnum.PRIMARY | ButtonTypeEnum.SECONDARY;
  growDirection: GrowDirection.LEFT | GrowDirection.RIGHT;
  disabled?: boolean;
  id?: string;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  buttonText,
  dropdownOptions,
  type,
  growDirection = GrowDirection.LEFT,
  disabled = false,
  id
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={clsx(styles.container, styles[growDirection])} id={id} data-testid={id}>
      <Button
        text={buttonText}
        endIcon={isOpen ? 'expand_less' : 'expand_more'}
        onClick={() => setIsOpen((prev) => !prev)}
        type={type}
        disabled={disabled}
      />
      {isOpen && (
        <ul className={styles.dropdown}>
          {dropdownOptions.map((dropdownOption) => (
            <li
              key={dropdownOption.id}
              className={styles.listElement}
              title={dropdownOption.text}
              onClick={dropdownOption.onClick}
              onKeyDown={dropdownOption.onClick}
            >
              {dropdownOption.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
