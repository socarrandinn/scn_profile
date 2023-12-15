import { BasicTable } from '@dfl/mui-admin-layout';
import { FormPaper } from 'modules/common/components/FormPaper';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ProviderProductsDetail } from '../../context/ProviderProductDetail';
import SupplierGeneralAddressSkeleton from './SupplierGeneralAddressSkeleton';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { IAddressWithLocation } from 'modules/common/interfaces';
import { addressColumns } from '../../constants/supplier.address.columns';
import { Box } from '@mui/material';
import AddressActions from './AddressActions';

const SupplierGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, providerProducts } = ProviderProductsDetail();
  const address = useMemo(
    () => getArrayAddress(providerProducts?.address as IAddressWithLocation) || [],
    [providerProducts?.address],
  );

  if (isLoading || error) return <SupplierGeneralAddressSkeleton />;

  return (
    <FormPaper nm title={t('address.address')} actions={<AddressActions />}>
      <Box
        sx={{
          '& .MuiTableHead-root': {
            display: 'none !important',
          },
        }}
      >
        <BasicTable columns={addressColumns} data={address || []} />
      </Box>
    </FormPaper>
  );
};

export default memo(SupplierGeneralAddress);

const getArrayAddress = (address: IAddressWithLocation): any[] => {
  const { t } = useTranslation('provider');
  const array = useMemo(
    () => [
      {
        label: t('address.address'),
        value: address?.address,
      },
      {
        label: t('address.country'),
        value: findProvinceByStateCode(address?.country),
      },
      {
        label: t('address.state'),
        value: findProvinceByStateCode(address?.state)?.name,
      },
      {
        label: t('address.municipality'),
        value: findMunicipalityByStateAndMunicipality(address?.state, address?.municipality)?.name,
      },
      {
        label: t('address.zipCode'),
        value: address?.zipCode,
      },
    ],
    [address],
  );
  return array || [];
};
