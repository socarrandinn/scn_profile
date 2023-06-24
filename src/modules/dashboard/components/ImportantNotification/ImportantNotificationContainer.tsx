import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ImportantNotification } from 'modules/dashboard/components/ImportantNotification/index';
import { useUser } from '@dfl/react-security';

const ImportantNotificationContainer = () => {
  const { t } = useTranslation('dashboard');
  const { user } = useUser()
  return (
        <ImportantNotification
            name={t('notification.regards', { name: user.fullName })}
            url='/images/noti.svg'
            title={t('notification.soon')}
            bodyMenssager={t('notification.explain')}
        />
  );
};

export default memo(ImportantNotificationContainer);
