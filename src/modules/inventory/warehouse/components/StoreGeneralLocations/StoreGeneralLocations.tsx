import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import StoreDetailLocationsUpdateContainer from '../../containers/GeneralTabs/StoreDetailLocationsUpdateContainer';
import StoreGeneralLocationsDetails from './StoreGeneralLocationsDetails';

const StoreGeneralBasic = () => {
  const { t } = useTranslation('warehouse');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_4 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_4'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_4'), [onOneClose]);
  /*   const states = warehouse?.locations?.[0]?.states;
  const locations = useMemo(() => states?.map((pv) => findProvinceByStateCode(pv) || pv), [states]); */

  if (open) {
    return (
      <FormPaper title={t('fields.locations')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailLocationsUpdateContainer
          initValue={{
            _id: warehouse?._id,
            // locations: locations as unknown as WarehouseLocation[],
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
      <StoreGeneralLocationsDetails />
    </FormPaper>
  );
};

export default memo(StoreGeneralBasic);
