import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import StoreDetailProviderUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailProviderUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const StoreGeneralProvider = () => {
  const { t } = useTranslation('warehouse');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_5 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_5'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_5'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.logistic')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailProviderUpdateContainer
          initValue={{
            _id: warehouse?._id,
            logistic: warehouse?.logistic._id,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.logistic')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(warehouse as IWarehouse) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralProvider);

const getArray = (data: IWarehouse): any[] => {
  const array = [
    {
      label: 'warehouse:fields.logistic',
      value: data?.logistic.name,
    },
  ];
  return array;
};
