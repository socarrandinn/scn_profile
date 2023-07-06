import { memo } from 'react';
import { useStoreDetail } from 'modules/store/store/context/StoreContext';
import StoreDetailContentSkeleton from 'modules/store/store/components/StoreDetailContent/StoreDetailContentSkeleton';
import { HandlerError } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';

const StoreDetailContent = () => {
  const { store, isLoading, error } = useStoreDetail();
  const { data } = useFindOneUsers(store?.logistic as string);

  if (isLoading) {
    return (<StoreDetailContentSkeleton />)
  }
  if (error) {
    return <HandlerError error={error} />;
  }
  return (
      <Stack p={2} pt={5} spacing={2}>
        <Stack direction='column' alignItems='center' spacing={0}>
          <Typography variant={'h3'} mt={1}>
            {store?.name}
          </Typography>
          <Typography color={'text.secondary'}>{store?.description}</Typography>
        </Stack>
          <Stack direction='row' alignItems='center' spacing={2}>
              <Typography variant={'h3'} mt={1}>
                  Proveedor
              </Typography>
              <Typography color={'text.secondary'}>{data?.fullName}</Typography>
          </Stack>
      </Stack>
  )
}
export default memo(StoreDetailContent);
