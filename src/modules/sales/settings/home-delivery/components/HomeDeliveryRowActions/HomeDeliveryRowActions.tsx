import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteHomeDelivery } from 'modules/sales/settings/home-delivery/hooks/useDeleteHomeDelivery';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { ILocation } from '../../interfaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { IconButton } from '@dfl/mui-react-common';
import { AddCircle } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type Props = {
  rowId: string;
  location: ILocation;
};

const HomeDeliveryRowActions = ({ rowId, location }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteHomeDelivery(rowId, onClose);
  const locationType = useMemo(() => location?.type === LOCATION_TYPE.COUNTRY ? LOCATION_TYPE.STATE : LOCATION_TYPE.CITY, [location?.type]);

  const handleOpen = useParamsLink({ edit: locationType });

  return (
    <>
      <Stack direction='row' spacing={1} alignItems={'center'}>
        <IconButton tooltip={t('offerOrder:sections.usage.action')} action={handleOpen}>
          <AddCircle color='primary' />
        </IconButton>
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
