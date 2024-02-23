import { memo, useMemo } from 'react';
import { IOrderStatus } from '../../interfaces';
import { useTranslation } from 'react-i18next';

type NotificationStatusProps = {
  record: IOrderStatus;
};

const NotificationStatus = ({ record }: NotificationStatusProps) => {
  const { t } = useTranslation('orderStatus');
  const isNotification = useMemo(() => record?.notification?.enabled, [record]);

  return <>{t(isNotification ? 'fields.notification.status.yes' : 'fields.notification.status.no')}</>;
};

export default memo(NotificationStatus);
