import { memo } from 'react';
import { H1 } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import ChangePasswordRequireContainer from '../containers/ChangePasswordRequireContainer';

const ChangePasswordRequire = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <H1 textAlign={'center'}>{t('enterNewPassword')}</H1>
      <ChangePasswordRequireContainer />
    </>
  );
};

export default memo(ChangePasswordRequire);
