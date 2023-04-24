import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { withCodeSample, WithCodeSampleProps } from 'hocs/withCodeSample';
import Demo from './demo';
import { FormValueProvider } from '../../context/FormValueProvider';

type Props = WithCodeSampleProps & {
  codeTitle?: string | null;
  codeDescription?: string | null;
  loading?: boolean;
};

const LoginFormDemo: FC<Props> = ({ className }) => {
  return (
    <div className={classnames('relative', className)}>
      <FormValueProvider>
        <Demo />
      </FormValueProvider>
    </div>
  );
};

LoginFormDemo.defaultProps = {};

export default memo(withCodeSample(LoginFormDemo));
