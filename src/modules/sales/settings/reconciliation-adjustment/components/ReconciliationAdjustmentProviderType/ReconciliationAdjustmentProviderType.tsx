import { Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type Props = {
  value: string;
};

const ReconciliationAdjustmentProviderType = ({ value }: Props) => {
  const { t } = useTranslation('reconciliationAdjustment');
  return <Typography>{t(`providerType.${value}`)}</Typography>;
};

export default memo(ReconciliationAdjustmentProviderType);
