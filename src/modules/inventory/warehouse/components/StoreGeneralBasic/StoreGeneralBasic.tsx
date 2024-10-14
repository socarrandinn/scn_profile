import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useStoreDetail } from 'modules/inventory/warehouse/context/StoreContext';
import { simpleColumns } from 'modules/inventory/warehouse/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IStore } from 'modules/inventory/warehouse/interfaces';
import StoreDetailBasicUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailBasicUpdateContainer';

const StoreGeneralBasic = () => {
  const { t } = useTranslation('provider');
  const { isLoading, error, store, onOneClose, onOneToggle, state } = useStoreDetail();
  const open = useMemo(() => state?.form_1 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_1'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_1'), [onOneClose]);

  if (open) {
    return (
      <FormPaper
        nm
        title={t('fields.basicInformation')}
        actions={<FormPaperAction onToggle={handleToggle} open={open} />}
      >
        <StoreDetailBasicUpdateContainer
          initValue={{
            _id: store?._id,
            name: store?.name,
            description: store?.description,
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
      nm
      title={t('fields.basicInformation')}
      actions={<FormPaperAction onToggle={handleToggle} open={open} />}
    >
      <BasicTableHeadless
        columns={simpleColumns}
        data={getArray(store as IStore) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralBasic);

const getArray = (data: IStore): any[] => {
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
