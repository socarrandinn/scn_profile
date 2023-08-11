import React, { memo } from 'react';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';
import StoreDetailContentSkeleton from 'modules/inventory/store/components/StoreDetailInfo/StoreDetailInfoSkeleton';
import { HandlerError } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';
import { ContactPreview } from 'modules/common/components/ContactPreview';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { AddressValue } from 'modules/common/components/Address';
import { IAddress } from 'modules/common/interfaces';
import ProviderView from 'modules/common/components/ProviderView/ProviderView';
import StoreSection from 'modules/inventory/store/components/StoreSection/StoreSection';

const StoreDetailInfo = () => {
  const { t } = useTranslation('store');
  const {
    store,
    isLoading,
    error
  } = useStoreDetail();
  useBreadcrumbName(store?._id || '', store?.name, isLoading);

  if (isLoading) {
    return (<StoreDetailContentSkeleton />);
  }
  if (error) {
    return <HandlerError error={error} />;
  }
  return (
    <>
      <Stack p={2} spacing={2}>
        <StoreSection name={store?.name ?? ''} />
        <Typography variant={'h3'} mt={3}>
          {t('section.logistic.title')}
        </Typography>
        <ProviderView userid={store?.logistic ?? ''} />
        <Divider sx={{ margin: '15px 0px' }} />
        <ContactPreview contacts={store?.contacts ?? undefined} />
        <SubSectionTitle>{t('common:address')}</SubSectionTitle>
        <AddressValue
          value={store?.address as IAddress}
          showStreet={true}
          hideIcon={true}
        />
      </Stack>
    </>
  );
};
export default memo(StoreDetailInfo);
