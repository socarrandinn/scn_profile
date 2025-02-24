import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteHomeDelivery } from 'modules/sales/settings/home-delivery/hooks/useDeleteHomeDelivery';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { ILocation } from '../../interfaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { useTranslation } from 'react-i18next';
import { AddLocationButton } from 'modules/sales/settings/common/components/AddLocationButton';

type Props = {
  rowId: string;
  location: ILocation;
};

const HomeDeliveryRowActions = ({ rowId, location }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteHomeDelivery(rowId, onClose);
  const locationType = useMemo(() => location?.type === LOCATION_TYPE.COUNTRY ? LOCATION_TYPE.STATE : LOCATION_TYPE.CITY, [location?.type]);

  return (
    <>
      <Stack direction='row' spacing={1} alignItems={'center'}>
        {!location?.city && <AddLocationButton deliveryType={locationType} icon state={location?.state} />}
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </Stack>
    </>
  );
};

export default memo(HomeDeliveryRowActions);
