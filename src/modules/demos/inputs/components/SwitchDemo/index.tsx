import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { withCodeSample, WithCodeSampleProps } from 'hocs/withCodeSample';
import Demo from './demo';

type Props = WithCodeSampleProps & {
  codeTitle?: string | null,
  codeDescription?: string | null,
  loading?: boolean
};

const SwitchDemo: FC<Props> = ({
  className,
  ...rest
}) => {
  return (
    <div className={classnames('relative', className)}>
      {/* @ts-ignore */}
      <Demo {...rest}/>
    </div>
  );
};

SwitchDemo.defaultProps = {
};

export default memo(withCodeSample(SwitchDemo));
