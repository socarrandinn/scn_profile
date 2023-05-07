import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { withCodeSample, WithCodeSampleProps } from 'hocs/withCodeSample';
import Demo from './demo';
import { code } from './code';

type Props = WithCodeSampleProps & {
  codeTitle?: string | null;
  codeDescription?: string | null;
  loading?: boolean;
};

const PaperPageLayoutDemo: FC<Props> = ({ className }) => {
  return (
    <div className={classnames('relative', className)}>
      <Demo />
    </div>
  );
};

PaperPageLayoutDemo.defaultProps = {
  code,
};

export default memo(withCodeSample(PaperPageLayoutDemo));
