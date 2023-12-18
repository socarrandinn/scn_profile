import { memo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { ProviderProductsDetail } from '../../context/ProviderProductDetail';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { IAddressWithLocation } from 'modules/common/interfaces';
import { addressColumns } from '../../constants/supplier.address.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { useToggle } from '@dfl/hook-utils';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import SupplierDetailAddressUpdateContainer from '../../containers/SupplierDetailAddressUpdateContainer';
import SupplierGeneralContactSkeleton from '../SupplierGeneralContact/SupplierGeneralContactSkeleton';
import { isEmpty } from 'lodash';

const SupplierGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isOpen, onClose, onToggle } = useToggle(false);
  const { isLoading, error, providerProducts } = ProviderProductsDetail();

  if (isLoading || error) return <SupplierGeneralContactSkeleton />;

  if (isOpen) {
    return (
      <FormPaper nm title={t('fields.address.address')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
        <SupplierDetailAddressUpdateContainer
          initValue={{
            _id: providerProducts?._id,
            address: providerProducts?.address,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={onClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('fields.address.address')} actions={<FormPaperAction onToggle={onToggle} open={isOpen} />}>
      <BasicTableHeadless
        columns={addressColumns}
        data={providerProducts?.address ? getArrayAddress(providerProducts?.address) : []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  )
};

export default memo(SupplierGeneralAddress);

const getArrayAddress = (address: IAddressWithLocation): any[] => {
  if (isEmpty(address)) return [];

  const array = [
    {
      label: 'fields.address.address',
      value: address?.address,
    },
    /*   {
    label: 'fields.address.country'),
    value: findProvinceByStateCode(address?.country),
  }, */
    {
      label: 'fields.address.state',
      value: findProvinceByStateCode?.(address?.state)?.name || '',
    },
    {
      label: 'fields.address.municipality',
      value: findMunicipalityByStateAndMunicipality?.(address?.state, address?.municipality)?.name || '',
    },
    {
      label: 'fields.address.zipCode',
      value: address?.zipCode,
    }
  ];
  return array;
};
