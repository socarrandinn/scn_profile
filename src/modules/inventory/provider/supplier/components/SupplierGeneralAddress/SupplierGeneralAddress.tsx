import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { IAddressWithLocation } from 'modules/common/interfaces';
import { simpleColumns } from '../../constants/supplier.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import SupplierDetailAddressUpdateContainer from '../../containers/SupplierDetailAddressUpdateContainer';
import { isEmpty } from 'lodash';

const SupplierGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, providerProducts, onOneClose, onOneToggle, state } = useProviderProductsDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneToggle]);

  if (open) {
    return (
      <FormPaper title={t('fields.address.address')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <SupplierDetailAddressUpdateContainer
          initValue={{
            _id: providerProducts?._id,
            address: providerProducts?.address,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.address.address')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArrayAddress(providerProducts?.address as any) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(SupplierGeneralAddress);

const getArrayAddress = (address: IAddressWithLocation): any[] => {
  if (isEmpty(address)) return [];

  const array = [
    {
      label: 'fields.address.address',
      value: address?.address,
    },
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
    },
  ];
  return array;
};
