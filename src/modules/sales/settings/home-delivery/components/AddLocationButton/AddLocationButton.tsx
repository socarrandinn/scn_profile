import { AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck, useParamsLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import HomeDeliveryCreateModal from '../../containers/HomeDeliveryCreateModal';
import { HOME_DELIVERY_PERMISSIONS } from '../../constants';
import { useToggle } from '@dfl/hook-utils';
import { useCallback } from 'react';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { useSearchParams } from 'react-router-dom';

const AddLocationButton = () => {
  const { t } = useTranslation('homeDelivery');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleType = useParamsLink({ type: LOCATION_TYPE.COUNTRY });
  const { isOpen, onClose, onOpen } = useToggle();

  const handleOpen = useCallback(() => {
    handleType();
    onOpen();
  }, [onOpen, handleType]);

  const handleClose = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.type;
    setSearchParams(params);
    onClose();
  }, [searchParams, setSearchParams]);

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
