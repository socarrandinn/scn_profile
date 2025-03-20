import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteHomeDelivery } from 'modules/sales/settings/home-delivery/hooks/useDeleteHomeDelivery';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { useParamsLink } from '@dfl/react-security';
import { AddLocationButton } from '../AddLocationButton';
import { EnabledCell } from '../EnabledCell';

type Props = {
  rowId: string;
  data: IDelivery;
};

const HomeDeliveryRowActions = ({ rowId, data }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteHomeDelivery(rowId, onClose);

  const locationType = useMemo(
    () => (data?.location?.type === LOCATION_TYPE.COUNTRY ? LOCATION_TYPE.STATE : LOCATION_TYPE.CITY),
    [data?.location?.type],
  );

  return (
    <>
      <Stack direction='row' spacing={1} alignItems={'center'} justifyContent={'end'} mr={1}>
        {!data?.location?.city && (
          <AddLocationButton
            deliveryType={locationType}
            icon
            state={data?.location?.state}
            country={data?.location?.country}
            id={rowId}
          />
        )}
        <EnabledCell data={data} />
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
