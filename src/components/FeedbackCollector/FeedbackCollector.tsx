import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ARBOLUS_COLORS } from '../../theme/colors/colorConstants';
import { useCookie } from '../../utils/hooks/useCookie';
import { Button } from '../Buttons/Button/Button';
import { Icon } from '../Icon/Icon';
import { InputController } from '../Inputs/InputController/InputController';
import { FeedbackCollectorSchema } from './FeedbackCollectorSchema';
import { StarsSelector } from './StarsSelector/StarsSelector';
import { FEEDBACK_COLLECTOR, FEEDBACK_COLLECTOR_STARS } from './constants';

import styles from './FeedbackCollector.module.scss';

export enum FeedbackCollectorDirection {
  BOTTOM_RIGHT = 'bottom-right',
  CENTERED = 'centered'
}

export interface IFeedbackCollector {
  [FEEDBACK_COLLECTOR]?: string | null;
  [FEEDBACK_COLLECTOR_STARS]: number;
}

export interface FeedbackCollectorProps {
  onClickClose: () => void;
  onSubmit: (data: IFeedbackCollector) => void;
  handleOnClickedStar: (star: number) => void;
  direction: FeedbackCollectorDirection;
  cookie: string;
  noBorder?: boolean;
  question: string;
}

export const FeedbackCollector: React.FC<FeedbackCollectorProps> = ({
  onClickClose,
  onSubmit,
  handleOnClickedStar,
  direction,
  cookie,
  noBorder,
  question
}) => {
  const [isStarSelected, setIsStarSelected] = useState(false);
  const { setCookie, isCookieStored } = useCookie(cookie);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFeedbackCollector>({
    resolver: yupResolver(FeedbackCollectorSchema),
    defaultValues: {
      [FEEDBACK_COLLECTOR]: '',
      [FEEDBACK_COLLECTOR_STARS]: 0
    }
  });

  const handleClickStar = (star: number, value: number, onChange: (star: number) => void) => {
    if (star !== 0 && star !== value) {
      handleOnClickedStar(star);
      onChange(star);
      setIsStarSelected(true);
    }
  };

  if (isCookieStored()) {
    return null;
  }

  return (
    <div
      style={{
        border: noBorder ? 'none' : `1px solid ${ARBOLUS_COLORS.bColorSecondaryGreyMid}`
      }}
      className={clsx(
        direction === FeedbackCollectorDirection.BOTTOM_RIGHT
          ? styles.bottomRightContainer
          : styles.container
      )}
    >
      <div className={styles.iconContainer}>
        <Icon
          fontSize='24px'
          color={ARBOLUS_COLORS.bColorSecondaryGreyMid}
          name='close'
          onClick={() => {
            onClickClose();
            setCookie();
          }}
        />
      </div>
      <div className={styles.contentContainer}>
        <span className={styles.feedbackTitle}>{question}</span>
        <div className={styles.starContainer}>
          <Controller
            name={FEEDBACK_COLLECTOR_STARS}
            control={control}
            defaultValue={0}
            render={({ field: { onChange, value } }) => (
              <StarsSelector
                starSelected={value}
                onClickedStar={(star: number) => handleClickStar(star, value, onChange)}
              />
            )}
          />
        </div>
      </div>
      {isStarSelected && (
        <div className={styles.feedbackTextContainer}>
          <InputController
            control={control}
            name={FEEDBACK_COLLECTOR}
            errors={errors}
            placeholder={'Start typing what you loved or what we could do better...'}
            type='textarea'
            size='big'
          />
          <div className={styles.buttonContainer}>
            <Button
              type='tertiary'
              onClick={handleSubmit(onSubmit)}
              endIcon='chevron_right'
              text='Submit'
            />
          </div>
        </div>
      )}
    </div>
  );
};
