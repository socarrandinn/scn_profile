import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';
import { IAddressWithLocation } from 'modules/common/interfaces';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { isEmpty } from 'lodash';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import { simpleColumns } from 'modules/inventory/provider/supplier/constants/supplier.simple.columns';
import LogisticDetailAddressUpdateContainer from '../../containers/LogisticDetailAddressUpdateContainer';

const LogisticGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, logistic, state, onOneToggle, onOneClose } = useLogisticsDetailContext();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneToggle]);

  if (open) {
    return (
      <FormPaper title={t('fields.address.address')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <LogisticDetailAddressUpdateContainer
          initValue={{
            _id: logistic?._id,
            address: logistic?.address,
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
        data={getArrayAddress(logistic?.address as any) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(LogisticGeneralAddress);

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
