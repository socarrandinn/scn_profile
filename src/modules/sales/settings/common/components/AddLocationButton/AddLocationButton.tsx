import { AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck, useParamsLink, useSearchParamsChange } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { useCallback } from 'react';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { MS_LOCATION_CONFIG } from 'settings/address-location';

const AddLocationButton = () => {
  const { t } = useTranslation('homeDelivery');
  const handleType = useParamsLink({ type: MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY });
  const { isOpen, onClose, onOpen } = useToggle();
  const { removeField } = useSearchParamsChange();

  const handleOpen = useCallback(() => {
    handleType();
    onOpen();
  }, [onOpen, handleType]);

  const handleClose = useCallback(() => {
    removeField('type');
    onClose();
  }, [removeField, onClose]);

  return (
    <>
      <PermissionCheck permissions={HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE}>
        <AddButton action={handleOpen}>{t('add')}</AddButton>
      </PermissionCheck>
      <HomeDeliveryCreateModal open={isOpen} onClose={handleClose} />
    </>
  );
};

export default AddLocationButton;
