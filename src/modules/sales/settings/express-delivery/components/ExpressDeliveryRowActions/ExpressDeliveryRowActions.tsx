import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteExpressDelivery } from 'modules/sales/settings/express-delivery/hooks/useDeleteExpressDelivery';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import AddExpressLocationButton from 'modules/sales/settings/common/components/AddLocationButton/AddExpressLocationButton';
import { ILocation } from 'modules/sales/settings/home-delivery/interfaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

type UserStatusProps = {
  rowId: string;
  location: ILocation;
};

const ExpressDeliveryRowActions = ({ rowId, location }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteExpressDelivery(rowId, onClose);
  const locationType = useMemo(() => location?.type === LOCATION_TYPE.COUNTRY ? LOCATION_TYPE.STATE : LOCATION_TYPE.MUNICIPALITY, [location?.type]);

  return (
    <>
      <Stack direction='row' spacing={1}>
        {!location?.city && <AddExpressLocationButton deliveryType={locationType} icon state={location?.state} country={location?.country} />}
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

export default memo(ExpressDeliveryRowActions);
