import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import StoreDetailBasicUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailBasicUpdateContainer';
import { simpleColumns } from 'modules/common/constants/simple.columns';

const StoreGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_1 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_1'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_1'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailBasicUpdateContainer
          initValue={{
            _id: warehouse?._id,
            name: warehouse?.name,
            description: warehouse?.description,
          }}
          dataError={error}
          loadingInitData={isLoading}
          onClose={handleClose}
        />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('fields.basicInformation')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(warehouse as IWarehouse) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralBasic);

const getArray = (data: IWarehouse): any[] => {
  return [
    {
      label: 'fields.name',
      value: data?.name,
    },
    {
      label: 'fields.description',
      value: data?.description,
    },
  ];
};
