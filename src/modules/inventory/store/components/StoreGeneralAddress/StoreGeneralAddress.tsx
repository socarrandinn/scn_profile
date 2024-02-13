import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { IAddressWithLocation } from 'modules/common/interfaces';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { isEmpty } from 'lodash';
import StoreDetailAddressUpdateContainer from 'modules/inventory/store/containers/GeneralTabs/StoreDetailAddressUpdateContainer';

const StoreGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, store, onOneClose, onOneToggle, state } = useStoreDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneToggle]);

  if (open) {
    return (
      <FormPaper title={t('fields.address.address')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailAddressUpdateContainer
          initValue={{
            _id: store?._id,
            address: store?.address,
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
        data={getArrayAddress(store?.address as any) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralAddress);

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
    /*  {
      label: 'fields.address.zipCode',
      value: address?.zipCode,
    }, */
  ];
  return array;
};
