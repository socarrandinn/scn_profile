import { AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck, useParamsLink, useSearchParamsChange } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { useCallback } from 'react';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { IconButton } from '@dfl/mui-react-common';
import { AddCircle } from '@mui/icons-material';

type Props = {
  deliveryType: LOCATION_TYPE,
  icon?: boolean,
  state?: string | null,
}

const AddLocationButton = ({ deliveryType, icon, state }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const handleType = useParamsLink({ type: deliveryType });
  const { isOpen, onClose, onOpen } = useToggle();
  const { clean, update } = useSearchParamsChange();

  const handleOpen = useCallback(() => {
    handleType();
    if (state) {
      update({ 'type': deliveryType, 'state': state });
    }
    onOpen();
  }, [onOpen, handleType, update, state]);

  const handleClose = useCallback(() => {
    clean();
    onClose();
  }, [clean, onClose]);

  return (
    <>
      <PermissionCheck permissions={HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE}>
        {icon ? (
          <IconButton tooltip={t('common:addRule')} onClick={handleOpen}><AddCircle color='primary' /></IconButton>
        ) : (
          <AddButton action={handleOpen}>{t('add')}</AddButton>
        )}
      </PermissionCheck>
      <HomeDeliveryCreateModal open={isOpen} onClose={handleClose} />
    </>
  );
};

export default AddLocationButton;
