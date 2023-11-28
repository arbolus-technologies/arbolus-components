import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { ButtonTypeEnum, GrowDirection } from '../../../models/enums';
import { Button } from '../Button/Button';
import styles from './DropdownButton.module.scss';
import { DropdownType, GrowDirectionType } from '../../../models/types';

interface DropdownOption {
  optionId: string;
  text: string;
  onClick: (id: string) => void;
}

export interface DropdownButtonProps {
  buttonText: string;
  dropdownOptions: DropdownOption[];
  type?: DropdownType;
  growDirection?: GrowDirectionType;
  disabled?: boolean;
  id?: string;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  buttonText,
  dropdownOptions,
  type = ButtonTypeEnum.PRIMARY,
  growDirection = GrowDirection.LEFT,
  disabled = false,
  id
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Click is outside the dropdown
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
    }
  }, [disabled]);

  return (
    <div
      className={clsx(styles.container, styles[growDirection])}
      id={id}
      data-testid={id}
      ref={dropdownRef}
    >
      <Button
        text={buttonText}
        endIcon={isOpen ? 'expand_less' : 'expand_more'}
        onClick={() => setIsOpen((prev) => !prev)}
        type={type}
        disabled={disabled}
      />
      {isOpen && (
        <ul className={styles.dropdown}>
          {dropdownOptions.map((dropdownOption) => {
            const { optionId, onClick, text } = dropdownOption;
            return (
              <li
                key={optionId}
                className={styles.listElement}
                title={text}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                  return onClick(optionId);
                }}
                onKeyDown={() => {
                  setIsOpen((prev) => !prev);
                  return onClick(optionId);
                }}
              >
                {text}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
