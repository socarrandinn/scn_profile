import React, { memo, FC } from 'react';
import classnames from 'classnames';
import Demo from './demo';
import { DemoProps } from '../../../../../types';

const NestedFieldsFormDemo: FC<DemoProps> = (props: DemoProps) => {
  return (
      <div className={classnames('relative')}>
          <Demo />
      </div>
  );
};

export default memo(NestedFieldsFormDemo);
