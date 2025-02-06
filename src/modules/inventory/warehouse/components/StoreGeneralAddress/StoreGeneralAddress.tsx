import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import StoreDetailAddressUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailAddressUpdateContainer';
import { WAREHOUSE_PERMISSIONS } from '../../constants';
import AddressMapView from 'components/AddressMapFormFields/AddressMapView';
import { IAddress } from 'modules/common/interfaces';

const StoreGeneralAddress = () => {
  const { t } = useTranslation('common');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        mbHeader={'8px'}
        title={t('fields.address.title')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
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
    <FormPaper
      mbHeader={'0px'}
      title={t('fields.address.title')}
      actions={
        <FormPaperAction onToggle={handleToggle} open={open} permissions={[WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE]} />
      }
    >
      <AddressMapView address={warehouse?.address as IAddress} />
    </FormPaper>
  );
};

export default memo(StoreGeneralAddress);
