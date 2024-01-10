import ManufactureDetailSkeleton from 'modules/inventory/provider/manufacture/components/ManufactureDetail/ManufactureDetailSkeleton';
import { HandlerError, ButtonOutlined, FlexBox } from '@dfl/mui-react-common';
import { Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { PermissionCheck, ReactLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { ContactPreview } from 'modules/common/components/ContactPreview';
import SubSectionTitle from 'modules/common/components/Titles/SubSectionTitle';
import { AddressValue } from 'modules/common/components/Address';
import { IAddress } from 'modules/common/interfaces';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import ProductStatusTable from 'modules/inventory/provider/supplier/components/DataPickerPoroduct/ProductsStatusTable';
import ImageProveProducts from 'modules/inventory/provider/supplier/components/UploadImgaEditSupplier/ImageSupplier';
import { memo } from 'react';

const SupplierDetailGeneral = () => {
  const { isLoading, error, providerProducts, providerProductsId } = useProviderProductsDetail();
  const { t } = useTranslation('supplier');
  useBreadcrumbName(providerProducts?._id || '', providerProducts?.name, isLoading);

  if (isLoading) {
    return <ManufactureDetailSkeleton />;
  }

  if (error) {
    return <HandlerError error={error} />;
  }

  return (
    <Stack p={2} pt={2} spacing={1}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <ImageProveProducts provedorProducts={providerProducts} />
        <Typography variant={'h3'} mt={1}>
          {providerProducts?.name}
        </Typography>
      </Stack>
      <Divider sx={{ margin: '15px 0px' }} />
      <FlexBox display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant={'h3'} mt={1}>
          {t('fields.status')}
        </Typography>
        <ProductStatusTable rowId={providerProductsId as string} value={providerProducts?.active ?? false} />
      </FlexBox>
      <Divider sx={{ margin: '15px 0px' }} />
      <ContactPreview contacts={providerProducts?.contacts ?? undefined} />
      <SubSectionTitle sx={{ marginTop: '0px' }}>{t('common:address')}</SubSectionTitle>
      <AddressValue value={providerProducts?.address as IAddress} showStreet={true} hideIcon={true} />
      <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
        <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
          <ReactLink to={`/provider/products/${providerProductsId as string}/edit`}>
            <ButtonOutlined fullWidth={true} color={'success'}>
              {t('edit')}
            </ButtonOutlined>
          </ReactLink>
        </FlexBox>
      </PermissionCheck>
    </Stack>
  );
};
export default memo(SupplierDetailGeneral);
