import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { IAddress } from 'modules/common/interfaces';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { isEmpty } from 'lodash';
import StoreDetailAddressUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailAddressUpdateContainer';
import { toAddressString } from 'utils/address';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import BasicTableDoubleColumnHeadless from 'modules/common/components/BasicTableHeadless/BasicTableDoubleColumnHeadless';

const StoreGeneralAddress = () => {
  const { t } = useTranslation('common');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.address.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailAddressUpdateContainer
          initValue={{
            _id: warehouse?._id,
            address: warehouse?.address,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.address.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableDoubleColumnHeadless
        columns={simpleColumns}
        responsiveData={getArrayAddress(warehouse?.address as IAddress) || []}
        doubleColumnData={getDoubleColumnArrayAddress(warehouse?.address as IAddress) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralAddress);

const getArrayAddress = (address: IAddress): any[] => {
  if (isEmpty(address)) return [];

  const array = [
    {
      label: 'fields.address.address',
      value: toAddressString(address, ['city', 'state', 'zipCode', 'country']),
    },
    {
      label: 'fields.address.state',
      value: findProvinceByStateCode(address?.state || '')?.name,
    },
    {
      label: 'fields.address.municipality',
      value: findMunicipalityByStateAndMunicipality(address?.state || '', address?.city || '')?.name,
    },
    {
      label: 'fields.address.zipCode',
      value: address?.zipCode || '-',
    },
    {
      label: 'fields.address.country',
      value: address?.country || '-',
    },
    {
      label: 'common:fields.address.number',
      value: address?.number || '-',
    },
  ];
  return array;
};

const getDoubleColumnArrayAddress = (address: IAddress): any[] => {
  if (isEmpty(address)) return [];

  const array = [
    {
      label: 'fields.address.address',
      value: toAddressString(address, ['city', 'state', 'zipCode', 'country']),
      label2: 'fields.address.state',
      value2: findProvinceByStateCode(address?.state || '')?.name,
    },
    {
      label: 'fields.address.municipality',
      value: findMunicipalityByStateAndMunicipality(address?.state || '', address?.city || '')?.name,
      label2: 'fields.address.zipCode',
      value2: address?.zipCode || '-',
    },
    {
      label: 'fields.address.country',
      value: address?.country || '-',
      label2: 'common:fields.address.number',
      value2: address?.number || '-',
    },
  ];
  return array;
};
