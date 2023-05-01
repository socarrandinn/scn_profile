import React, { FC, memo } from 'react';
import classnames from 'classnames';
import Demo from './demo';

const LoginFormDemo: FC = () => {
  return (
    <div className={classnames('relative')}>
      <Demo />
    </div>
  );
};

export default memo(LoginFormDemo);
