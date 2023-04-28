import React, { memo, FC } from 'react';
import classnames from 'classnames';
import Demo from './demo';

const ValidationFormDemo: FC = () => {
  return (
    <div className={classnames('relative')}>
      <Demo />
    </div>
  );
};

export default memo(ValidationFormDemo);
