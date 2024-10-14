import React, { memo } from 'react';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import StoreDetailContentSkeleton from 'modules/inventory/warehouse/components/StoreDetailInfo/StoreDetailInfoSkeleton';
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
import StoreSection from 'modules/inventory/warehouse/components/StoreSection/StoreSection';

const StoreDetailInfo = () => {
  const { t } = useTranslation('warehouse');
  const { warehouse, isLoading, error } = useWarehouseDetail();
  useBreadcrumbName(warehouse?._id || '', warehouse?.name, isLoading);

  if (isLoading) {
    return <StoreDetailContentSkeleton />;
  }
  if (error) {
    return <HandlerError error={error} />;
  }
  return (
    <>
      <Stack p={2} spacing={2}>
        <StoreSection name={warehouse?.name ?? ''} />
        <Typography variant={'h3'} mt={3}>
          {t('section.logistic.title')}
        </Typography>
        <ProviderView userid={warehouse?.logistic ?? ''} />
        <Divider sx={{ margin: '15px 0px' }} />
        <ContactPreview contacts={warehouse?.contacts ?? undefined} />
        <SubSectionTitle>{t('common:address')}</SubSectionTitle>
        <AddressValue value={warehouse?.address as IAddress} hideIcon={true} />
      </Stack>
    </>
  );
};
export default memo(StoreDetailInfo);
