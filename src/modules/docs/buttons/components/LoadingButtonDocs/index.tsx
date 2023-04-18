import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { ChildrenProps } from '@dfl/mui-react-common';
import { withCodeSample, WithCodeSampleProps } from 'hocs/withCodeSample';

type Props = WithCodeSampleProps & ChildrenProps & {
  loading?: boolean
};

const LoadingButtonDocs: FC<Props> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={classnames('relative', className)} {...rest}>
      {children}
    </div>
  );
};

LoadingButtonDocs.defaultProps = {};

export default memo(withCodeSample(LoadingButtonDocs));
