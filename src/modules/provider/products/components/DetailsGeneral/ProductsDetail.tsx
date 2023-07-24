import React, { memo } from 'react';
import ManufactueDetailSkeleton
  from 'modules/provider/manufacture/components/ManufactureDetail/ManufactueDetailSkeleton';
import { HandlerError, ButtonOutlined, FlexBox } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { PermissionCheck, ReactLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { ContactPreview } from 'modules/store/store/components/ContactPreview';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { AddressValue } from 'modules/common/components/Address';
import { IAddress } from 'modules/common/interfaces';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { ProvedorProductsDetail } from 'modules/provider/products/context/ProvedorProductDetail';
import { PRODUCTS_PERMISSIONS } from 'modules/provider/products/constants';
import ProductStatusTable from 'modules/provider/products/components/DataPickerPoroduct/ProductsStatusTable';
import ImageProveProducts from 'modules/provider/products/components/UploadImgaEditProduct/ImageProveProducts';

const ProProductsDetailGeneral = () => {
  const {
    isLoading,
    error,
    provedorProducts,
    provedorProductsId
  } = ProvedorProductsDetail();
  const { t } = useTranslation('products');
  useBreadcrumbName(provedorProducts?._id || '', provedorProducts?.name, isLoading);

  if (isLoading) {
    return <ManufactueDetailSkeleton />;
  }

  if (error) {
    return <HandlerError error={error} />;
  }

  return (
    <Stack p={2} pt={2} spacing={1}>
      <Stack direction="column" alignItems="center" spacing={0}>
        <ImageProveProducts provedorProducts={provedorProducts} />
        <Typography variant={'h3'} mt={1}>
          {provedorProducts?.name}
        </Typography>
      </Stack>
      <Divider sx={{ margin: '15px 0px' }} />
      <FlexBox display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant={'h3'} mt={1}>
          {t('fields.status')}
        </Typography>
        <ProductStatusTable rowId={provedorProductsId as string} value={provedorProducts?.active ?? false} />
      </FlexBox>
      <Divider sx={{ margin: '15px 0px' }} />
      <ContactPreview contacts={provedorProducts?.contacts ?? undefined} />
      <SubSectionTitle sx={{ margintop: '0px' }} >{t('common:address')}</SubSectionTitle>
      <AddressValue
        value={provedorProducts?.address as IAddress}
        showStreet={true}
        hideIcon={true}
      />
      <PermissionCheck permissions={PRODUCTS_PERMISSIONS.PRODUCTS_VIEW}>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
          <ReactLink to={`/provider/products/${provedorProductsId as string}/edit`}>
            <ButtonOutlined fullWidth={true} color={'success'} >
              {t('edit')}
            </ButtonOutlined>
          </ReactLink>
        </FlexBox>
      </PermissionCheck>
    </Stack>

  );
};
export default memo(ProProductsDetailGeneral);
