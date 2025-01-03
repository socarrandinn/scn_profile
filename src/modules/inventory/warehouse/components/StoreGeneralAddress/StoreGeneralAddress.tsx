import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { IAddress } from 'modules/common/interfaces';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import StoreDetailAddressUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailAddressUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';
import BasicTableDoubleColumnHeadless from 'modules/common/components/BasicTableHeadless/BasicTableDoubleColumnHeadless';
import {
  getArrayAddress,
  getDoubleColumnArrayAddress,
} from 'modules/inventory/common/constants/common-address.datatable';
import { WAREHOUSE_PERMISSIONS } from '../../constants';

const StoreGeneralAddress = () => {
  const { t } = useTranslation('common');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_2 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_2'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_2'), [onOneClose]);

  if (open) {
    return (
      <FormPaper mbHeader={'8px'} title={t('fields.address.title')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
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
        <FormPaperAction
          onToggle={handleToggle}
          open={open}
          permissions={[WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE]}
        />
      }
    >
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
