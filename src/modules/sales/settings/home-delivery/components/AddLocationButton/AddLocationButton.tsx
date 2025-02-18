import { AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import HomeDeliveryCreateModal from '../../containers/HomeDeliveryCreateModal';
import { HOME_DELIVERY_PERMISSIONS } from '../../constants';
import { useToggle } from '@dfl/hook-utils';

const AddLocationButton = () => {
  const { t } = useTranslation('homeDelivery');
  const { isOpen, onClose, onOpen } = useToggle();

  return (
    <>
      <PermissionCheck permissions={HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE}>
        <AddButton action={onOpen}>{t('add')}</AddButton>
      </PermissionCheck>
      <HomeDeliveryCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default AddLocationButton;
