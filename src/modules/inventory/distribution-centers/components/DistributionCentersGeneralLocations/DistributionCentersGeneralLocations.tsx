import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import DistributionCentersDetailLocationsUpdateContainer from '../../containers/GeneralTabs/DistributionCentersDetailLocationsUpdateContainer';
import DistributionCentersGeneralLocationsDetails from './DistributionCentersGeneralLocationsDetails';
import { findProvinceByStateCode } from '@dfl/location';
import { WarehouseLocation } from 'modules/inventory/warehouse/interfaces';

const DistributionCentersGeneralLocations = () => {
  const { t } = useTranslation('warehouse');
  const { isLoading, error, distributionCenter, onOneClose, onOneToggle, state } = useDistributionCenterDetail();
  const open = useMemo(() => state?.form_4 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_4'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_4'), [onOneClose]);
  const states = distributionCenter?.locations?.[0]?.states;
  const locations = useMemo(() => states?.map((pv) => findProvinceByStateCode(pv) || pv), [states]);

  if (open) {
    return (
      <FormPaper title={t('fields.locations')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <DistributionCentersDetailLocationsUpdateContainer
          initValue={{
            _id: distributionCenter?._id,
            locations: locations as unknown as WarehouseLocation[],
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.locations')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <DistributionCentersGeneralLocationsDetails />
    </FormPaper>
  );
};

export default memo(DistributionCentersGeneralLocations);
