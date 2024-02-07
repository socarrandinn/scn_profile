import { memo } from 'react';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, Skeleton, Stack, Typography } from '@mui/material';
import { Add, Place } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useStorePickupContext } from '../../contexts/StorePickupContext';
import { useToggle } from '@dfl/hook-utils';
import { getAddress } from '@dfl/location';
import { PickUpPointActions } from '../PickUpPointActions';
import { FlexBox, HandlerError } from '@dfl/mui-react-common';
import PickupPointCreateModal from '../../container/PickupPointCreateModal';
import PickupPointEditModal from '../../container/PickupPointEditModal';

const PickupPointPlacesList = () => {
  const { t } = useTranslation('storePickup');
  const { isLoading, error, isError, places } = useStorePickupContext();
  const { isOpen, onClose, onOpen } = useToggle(false);

  const items = places?.map((place: any) => {
    return (
      <div key={place._id}>
        <ListItem key={place._id}>
          <ListItemIcon>
            <Place color='primary' />
          </ListItemIcon>
          <ListItemText
            primary={place.name}
            secondary={
              <em>
                {getAddress(
                  {
                    country: place.location.country,
                    state: place.location.state,
                    municipality: place.location.municipality,
                    address: place.location.address,
                  },
                  {
                    showCountry: true,
                    showStreet: true,
                  },
                )}
              </em>
            }
          />
          <PickUpPointActions rowId={place._id} />
        </ListItem>
        <Divider />
      </div>
    );
  });

  return (
    <>
      <HandlerError error={error} />
      {!isError && (
        <>
          <Stack
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={1}
            alignItems={{ xs: 'start', md: 'center' }}
            justifyContent={'space-between'}
          >
            <Typography fontWeight={600}>{t('pickupPoint.list')}</Typography>
            <Button variant='outlined' startIcon={<Add />} onClick={onOpen}>
              {t('pickupPoint.addPoint')}
            </Button>
          </Stack>
          <List>
            {isLoading && (
              <FlexBox justifyContent={'center'}>
                <Skeleton variant={'rectangular'} width={'100%'} height={'10vh'} />
              </FlexBox>
            )}
            {!isLoading && items}
            <PickupPointCreateModal open={isOpen} onClose={onClose} />
            <PickupPointEditModal />
          </List>
        </>
      )}
    </>
  );
};

export default memo(PickupPointPlacesList);
