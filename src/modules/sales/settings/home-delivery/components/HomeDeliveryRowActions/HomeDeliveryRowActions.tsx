import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteHomeDelivery } from 'modules/sales/settings/home-delivery/hooks/useDeleteHomeDelivery';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { ILocation } from '../../interfaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';;
import { useParamsLink } from '@dfl/react-security';
import { AddHomeLocationButton } from 'modules/sales/settings/common/components/AddLocationButton';

type Props = {
  rowId: string;
  location: ILocation;
};

const HomeDeliveryRowActions = ({ rowId, location }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteHomeDelivery(rowId, onClose);
  const locationType = useMemo(() => location?.type === LOCATION_TYPE.COUNTRY ? LOCATION_TYPE.STATE : LOCATION_TYPE.MUNICIPALITY, [location?.type]);

  return (
    <>
      <Stack direction='row' spacing={1} alignItems={'center'}>
        {!location?.city && <AddHomeLocationButton deliveryType={locationType} icon state={location?.state} country={location?.country} />}
        <EditRowActions onClick={handleEdit} />
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
