import React, { useEffect, useState } from 'react';
import { Icon } from '../../Icon/Icon';
import { ARBOLUS_COLORS } from '../../../theme/colors/colorConstants';

interface StarsSelectorProps {
  onClickedStar: (clickedValue: number) => void;
  starSelected: number;
  totalStars?: number;
}

export const StarsSelector: React.FC<StarsSelectorProps> = ({
  onClickedStar,
  starSelected,
  totalStars = 5
}) => {
  const [arrayOfStars, setArrayOfStars] = useState(
    Array.from({ length: totalStars }, (v, i) => ({ value: i + 1, active: false }))
  );

  const handleOnClick = (clickedValue: number) => {
    setArrayOfStars((prevStars) =>
      prevStars.map((star) => ({
        ...star,
        active: star.value <= clickedValue
      }))
    );
    onClickedStar(clickedValue);
  };

  useEffect(() => {
    setArrayOfStars((prevStars) =>
      prevStars.map((star) => ({
        ...star,
        active: star.value <= starSelected
      }))
    );
    onClickedStar(starSelected);
  }, []);

  return (
    <>
      {arrayOfStars.map((star) => (
        <Icon
          filled={star.active}
          key={star.value}
          name='star'
          fontSize='36px'
          onClick={() => {
            handleOnClick(star.value);
          }}
          color={
            star.active ? ARBOLUS_COLORS.bColorBasePurple : ARBOLUS_COLORS.bColorSecondaryGreyMid
          }
        />
      ))}
    </>
  );
};
