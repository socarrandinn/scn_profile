import { LoadingButton } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const PaidOrderValidateButton = () => {
  const { t } = useTranslation('paidOrder');
  return (
    <>
      <LoadingButton>{t('validate')}</LoadingButton>
    </>
  );
};

export default memo(PaidOrderValidateButton);
