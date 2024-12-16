import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { IAddress } from 'modules/common/interfaces';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import DistributionCentersDetailAddressUpdateContainer from 'modules/inventory/distribution-centers/containers/GeneralTabs/DistributionCentersDetailAddressUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import BasicTableDoubleColumnHeadless from 'modules/common/components/BasicTableHeadless/BasicTableDoubleColumnHeadless';
import { getArrayAddress, getDoubleColumnArrayAddress } from 'modules/inventory/common/constants/common-address.datatable';
import { DISTRIBUTION_CENTER_PERMISSIONS } from '../../constants';

const StoreGeneralAddress = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, distributionCenter, onOneClose, onOneToggle, state } = useDistributionCenterDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper mbHeader={'8px'} title={t('fields.address.address')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
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
    <FormPaper
      mbHeader={'0px'}
      title={t('fields.address.address')}
      actions={
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={[DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE]}
        />
      }
    >
      <BasicTableDoubleColumnHeadless
        columns={simpleColumns}
        responsiveData={getArrayAddress(distributionCenter?.address as IAddress) || []}
        doubleColumnData={getDoubleColumnArrayAddress(distributionCenter?.address as IAddress) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralAddress);
