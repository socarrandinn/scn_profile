/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo } from 'react';
import { CircularProgress } from '@mui/material';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ContentLoader = ({ className }: Props) => {
  return (
    <div
      className={classNames(
        'w-full h-full flex items-center justify-center min-h-[400px] mt-[23px] bg-amber-400',
        className,
      )}
    >
      <CircularProgress />
    </div>
  );
};

export default memo(ContentLoader);
