import React, { memo } from 'react';
import classnames from 'classnames';
import Demo from './demo';

const AsyncValidationFormDemo = () => {
  return (
    <div className={classnames('relative')}>
      <Demo />
    </div>
  );
};

export default memo(AsyncValidationFormDemo);
