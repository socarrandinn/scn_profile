import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

type ProviderTypeStatusProps = {
  value: PROVIDER_TYPE_ENUM;
};

const ProviderTypeStatus = ({ value }: ProviderTypeStatusProps) => {
  const { t } = useTranslation('role');
  return <Chip label={t(`${value}`)} size={'small'} variant={'outlined'} />;
};

export default memo(ProviderTypeStatus);

export const renderProviderTypeStatus = (value: PROVIDER_TYPE_ENUM) => {
  return <ProviderTypeStatus value={value} />;
};
