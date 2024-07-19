import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CLIENT_TYPE_ENUM } from '../../interfaces';

type ClientTypeViewProps = {
  type: CLIENT_TYPE_ENUM;
};

const ClientTypeView = ({ type }: ClientTypeViewProps) => {
  const { t } = useTranslation('auditLog');
  if (type) {
    return <Chip color='info' size='small' label={t(`device.client_type.${type as unknown as string}`)} />;
  }
  return <></>;
};

export default memo(ClientTypeView);

export const renderClientTypeView = (type: CLIENT_TYPE_ENUM) => <ClientTypeView type={type} />;
