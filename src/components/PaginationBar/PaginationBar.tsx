import React, { useEffect, useState } from 'react';

import { ARBOLUS_COLORS } from '../../theme/colors/colorConstants';
import { Icon } from '../Icon/Icon';
import styles from './PaginationBar.module.scss';

export interface PaginationBarProps {
  currentPage: number;
  totalCount: number;
  onSetPage: (pageIndex: number) => void;
  itemsPerPage: number;
}

export const PaginationBar: React.FC<PaginationBarProps> = ({
  currentPage,
  totalCount,
  onSetPage,
  itemsPerPage
}): JSX.Element => {
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  useEffect(() => {
    const totalPagesCount = Math.ceil(totalCount / itemsPerPage);
    setTotalPages(totalPagesCount);
    setHasPreviousPage(currentPage > 1);
    setHasNextPage(currentPage < totalPagesCount && totalPagesCount > 0);
  }, [currentPage, itemsPerPage, totalCount]);

  const previousArrowColor = hasPreviousPage
    ? ARBOLUS_COLORS.bColorSecondaryGreyDark
    : ARBOLUS_COLORS.bColorSecondaryGreyMid;

  const nextArrowColor = hasNextPage
    ? ARBOLUS_COLORS.bColorSecondaryGreyDark
    : ARBOLUS_COLORS.bColorSecondaryGreyMid;

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.arrowsContainer}>
        <Icon
          name='first_page'
          fontSize='24px'
          onClick={(): void => onSetPage(1)}
          disabled={!hasPreviousPage}
          color={previousArrowColor}
        />
        <Icon
          name='chevron_left'
          fontSize='24px'
          onClick={(): void => onSetPage(currentPage - 1)}
          disabled={!hasPreviousPage}
          color={previousArrowColor}
        />
      </div>
      <p className={styles.currentPage}>
        Page <span className={styles.pageNumber}>{currentPage}</span> of{' '}
        <span className={styles.pageNumber}>{totalPages}</span>
      </p>
      <div className={styles.arrowsContainer}>
        <Icon
          name='chevron_right'
          fontSize='24px'
          onClick={(): void => onSetPage(currentPage + 1)}
          disabled={!hasNextPage}
          color={nextArrowColor}
        />
        <Icon
          name='last_page'
          fontSize='24px'
          onClick={(): void => onSetPage(totalPages ?? 1)}
          disabled={!hasNextPage}
          color={nextArrowColor}
        />
      </div>
    </div>
  );
};
