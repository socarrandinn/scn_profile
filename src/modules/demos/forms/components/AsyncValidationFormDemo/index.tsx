import React, { FC, memo } from 'react';
import classnames from 'classnames';
import Demo from './demo';
import { DemoProps } from '../../../../../types';

const AsyncValidationFormDemo: FC<DemoProps> = (props: DemoProps) => {
  return (
    <div className={classnames('relative')}>
      <Demo />
    </div>
  );
};

export default memo(AsyncValidationFormDemo);
