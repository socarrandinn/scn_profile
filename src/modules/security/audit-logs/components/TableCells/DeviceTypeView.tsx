import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DEVICE_TYPE_ENUM } from '../../interfaces';

type DeviceTypeViewProps = {
  type: DEVICE_TYPE_ENUM;
};

const DeviceTypeView = ({ type }: DeviceTypeViewProps) => {
  const { t } = useTranslation('auditLog');
  if (type) {
    return <Chip color='info' size='small' label={t(`device.device_type.${type as unknown as string}`)} />;
  }
  return <></>;
};

export default memo(DeviceTypeView);

export const renderDeviceTypeView = (type: DEVICE_TYPE_ENUM) => <DeviceTypeView type={type} />;
