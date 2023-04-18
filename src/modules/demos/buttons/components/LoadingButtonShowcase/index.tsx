import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { withCodeSample, WithCodeSampleProps } from 'hocs/withCodeSample';
import { code } from './code';
import i18n from 'i18next';
import CodeShowCase from 'modules/demos/buttons/components/LoadingButtonShowcase/showcase';

type Props = WithCodeSampleProps & {
  codeTitle?: string | null,
  codeDescription?: string | null,
  loading?: boolean
};

const LoadingButtonShowcase: FC<Props> = ({
  className,
  ...rest
}) => {
  return (
    <div className={classnames('relative', className)}>
      {/* @ts-ignore */}
      <CodeShowCase {...rest}/>
    </div>
  );
};

LoadingButtonShowcase.defaultProps = {
  codeTitle: i18n.t('demos:buttons.loadingButtons.title'),
  codeDescription: i18n.t('demos:buttons.loadingButtons.description'),
  code
};

export default memo(withCodeSample(LoadingButtonShowcase));
