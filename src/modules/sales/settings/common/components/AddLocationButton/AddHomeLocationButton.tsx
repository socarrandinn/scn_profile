import { AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck, useParamsLink, useSearchParamsChange } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { useCallback, useMemo } from 'react';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { IconButton } from '@dfl/mui-react-common';
import { AddCircle } from '@mui/icons-material';

type Props = {
  deliveryType: LOCATION_TYPE;
  icon?: boolean;
  state?: string | null;
  country?: string | null;
};

const AddHomeLocationButton = ({ deliveryType, icon = false, state, country }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const handleType = useParamsLink({ type: deliveryType });
  const { isOpen, onClose, onOpen } = useToggle();
  const { clean, update } = useSearchParamsChange();

  const searchParams = useMemo(() => {
    const params: Record<string, string> = { type: deliveryType };
    if (state) params.state = state;
    if (country) params.country = country;
    return params;
  }, [deliveryType, state, country]);

  const handleOpen = useCallback(() => {
    handleType();
    update(searchParams);
    onOpen();
  }, [handleType, update, searchParams, onOpen]);

  const handleClose = useCallback(() => {
    clean();
    onClose();
  }, [clean, onClose]);

  return (
    <>
      <PermissionCheck permissions={HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_WRITE}>
        {icon ? (
          <IconButton tooltip={t('common:addRule')} onClick={handleOpen}>
            <AddCircle color="primary" />
          </IconButton>
        ) : (
          <AddButton action={handleOpen}>{t('add')}</AddButton>
        )}
      </PermissionCheck>
      <HomeDeliveryCreateModal open={isOpen} onClose={handleClose} />
    </>
  );
};

export default AddHomeLocationButton;
