import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';

const ProductHistoryChangeInformation = () => {
  const { t } = useTranslation('product');

  return <FormPaper title={t('section.hisroryChange.title')}>Historial de cambios</FormPaper>;
};

export default memo(ProductHistoryChangeInformation);
