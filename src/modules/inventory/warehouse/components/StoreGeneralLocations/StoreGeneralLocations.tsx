import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useStoreDetail } from 'modules/inventory/warehouse/context/StoreContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import StoreDetailLocationsUpdateContainer from '../../containers/GeneralTabs/StoreDetailLocationsUpdateContainer';
import StoreGeneralLocationsDetails from './StoreGeneralLocationsDetails';
import { findProvinceByStateCode } from '@dfl/location';

const StoreGeneralBasic = () => {
  const { t } = useTranslation('warehouse');
  const { isLoading, error, store, onOneClose, onOneToggle, state } = useStoreDetail();
  const open = useMemo(() => state?.form_4 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_4'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_4'), [onOneClose]);
  const states = store?.locations?.[0]?.states;
  const locations = useMemo(() => states?.map((pv) => findProvinceByStateCode(pv) || pv), [states]);

  if (open) {
    return (
      <FormPaper title={t('fields.locations')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailLocationsUpdateContainer
          initValue={{
            _id: store?._id,
            locations: locations as any,
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
