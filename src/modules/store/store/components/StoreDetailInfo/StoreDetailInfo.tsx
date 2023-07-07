import React, { memo } from 'react';
import { useStoreDetail } from 'modules/store/store/context/StoreContext';
import StoreDetailContentSkeleton from 'modules/store/store/components/StoreDetailInfo/StoreDetailInfoSkeleton';
import { DetailStack, HandlerError } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import { useFindOneUsers } from 'modules/security/users/hooks/useFindOneUsers';
import { USER_DETAILS_SUMMARY } from 'modules/security/users/constants';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';
import { ContactPreview } from 'modules/store/store/components/ContactPreview';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { AddressValue } from 'modules/common/components/Address';
import { IAddress } from 'modules/common/interfaces';

const StoreDetailInfo = () => {
  const { t } = useTranslation('store')
  const { store, isLoading, error } = useStoreDetail();
  const { data } = useFindOneUsers(store?.logistic as string);
  useBreadcrumbName(store?._id || '', store?.name, isLoading);

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
          <Typography variant={'h3'} mt={3} >
            {t('fields.logistic')}
          </Typography>
        </Stack>
        <DetailStack details={USER_DETAILS_SUMMARY} data={data} />
        <Divider sx={{ margin: '15px 0px' }} />
         <ContactPreview contacts={store?.contacts ? store?.contacts : undefined}/>
          <SubSectionTitle>{t('common:address')}</SubSectionTitle>
          <AddressValue
              value={store?.address as IAddress}
              showStreet={true}
              hideIcon={true}
          />
      </Stack>
  )
}
export default memo(StoreDetailInfo);
