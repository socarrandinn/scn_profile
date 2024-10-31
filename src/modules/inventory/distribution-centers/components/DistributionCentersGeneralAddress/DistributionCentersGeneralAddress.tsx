import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { IAddress } from 'modules/common/interfaces';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { isEmpty } from 'lodash';
import DistributionCentersDetailAddressUpdateContainer from 'modules/inventory/distribution-centers/containers/GeneralTabs/DistributionCentersDetailAddressUpdateContainer';
import { toAddressString } from 'utils/address';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import { findMunicipalityByStateAndMunicipality, findProvinceByStateCode } from '@dfl/location';

const StoreGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, distributionCenter, onOneClose, onOneToggle, state } = useDistributionCenterDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.address.address')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <DistributionCentersDetailAddressUpdateContainer
          initValue={{
            _id: distributionCenter?._id,
            address: distributionCenter?.address,
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
        data={getArrayAddress(distributionCenter?.address as IAddress) || []}
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
      value: findProvinceByStateCode(address?.state || ''),
    },
    {
      label: 'fields.address.municipality',
      value: findMunicipalityByStateAndMunicipality(address?.state || '', address?.city || ''),
    },
  ];
  return array;
};
