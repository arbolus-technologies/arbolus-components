import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FeedbackCollector.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FeedbackCollectorSchema } from './FeedbackCollectorSchema';
import { StarsSelector } from './StarsSelector/StarsSelector';
import clsx from 'clsx';
import { Icon } from '../Icon/Icon';
import { Button } from '../Buttons/Button/Button';
import { useCookie } from '../../utils/hooks/useCookie';
import { InputController } from '../Inputs/InputController/InputController';

export interface FeedbackCollectorProps {
  onClickClose: () => void;
  onSubmit: (data: IFeedbackCollector) => void;
  handleOnClickedStar: (star: number) => void;
  direction: 'bottom-right' | 'centered';
  cookie: string;
  title: string;
  subtitle: string;
}

export interface IFeedbackCollector {
  comment?: string | null;
  stars: number;
}

export const FeedbackCollector: React.FC<FeedbackCollectorProps> = ({
  onClickClose,
  onSubmit,
  handleOnClickedStar,
  direction,
  cookie,
  title,
  subtitle
}) => {
  const { t } = useTranslation(`feedbackCollector`);

  const [isStarSelected, setIsStarSelected] = useState(false);
  const { setCookie, isCookieStored } = useCookie(cookie);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<any>({
    resolver: yupResolver(FeedbackCollectorSchema),
    defaultValues: {
      comment: '' || undefined,
      stars: 0
    }
  });

  const handleClickStar = (star: number, value: number, onChange: (star: number) => void) => {
    if (star !== 0 && star !== value) {
      handleOnClickedStar(star);
      onChange(star);
      setIsStarSelected(true);
    }
  };

  return isCookieStored() ? null : (
    <div
      className={clsx(
        direction === 'bottom-right' ? styles.feedbackCollectorContainer : styles.container
      )}
    >
      <div className={styles.iconContainer}>
        <Icon
          fontSize='24px'
          name='close'
          onClick={() => {
            onClickClose();
            setCookie();
          }}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.titleSubtitleContainer}>
          <span className={styles.feedbackTitle}>{title}</span>
          <span className={styles.feedbackSubTitle}>{subtitle}</span>
        </div>
        <div className={styles.starContainer}>
          <Controller
            name='stars'
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
        <div className={styles.infoContainer}>
          <span>{t('veryGood')}</span>
          <span>{t('veryBad')}</span>
        </div>
      </div>
      {isStarSelected && (
        <div className={styles.feedbackTextContainer}>
          <InputController
            control={control}
            name='comment'
            errors={errors}
            placeholder={t('startTyping')}
            type='textarea'
            size='big'
          />
          <div className={styles.buttonContainer}>
            <Button onClick={handleSubmit(onSubmit)} text={t('submit')} />
          </div>
        </div>
      )}
    </div>
  );
};
