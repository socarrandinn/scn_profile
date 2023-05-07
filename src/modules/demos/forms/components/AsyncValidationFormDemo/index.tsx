import React, { memo, FC } from 'react';
import classnames from 'classnames';
import Demo from './demo';
import { SAMPLE_OPTIONS_ENUM } from 'constants/sample-options';

const AsyncValidationFormDemo: FC = () => {
  return (
    <div className={classnames('relative')}>
      <Demo defaultVisibleOption={SAMPLE_OPTIONS_ENUM.CODE} />
    </div>
  );
};

export default memo(AsyncValidationFormDemo);
