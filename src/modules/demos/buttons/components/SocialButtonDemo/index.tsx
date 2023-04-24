import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { withCodeSample, WithCodeSampleProps } from 'hocs/withCodeSample';
import Demo from './demo';

type Props = WithCodeSampleProps & {
  codeTitle?: string | null,
  codeDescription?: string | null,
  loading?: boolean
};

const SocialButtonDemo: FC<Props> = ({
  className,
}) => {
  return (
    <div className={classnames('relative', className)}>
      <Demo />
    </div>
  );
};

SocialButtonDemo.defaultProps = {
};

export default memo(withCodeSample(SocialButtonDemo));
