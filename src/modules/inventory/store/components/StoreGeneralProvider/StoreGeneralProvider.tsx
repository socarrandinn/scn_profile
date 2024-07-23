import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useStoreDetail } from 'modules/inventory/store/context/StoreContext';
import { simpleColumns } from 'modules/inventory/store/constants/store.simple.columns';
import { BasicTableHeadless } from 'modules/common/components/BasicTableHeadless';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import { IStore } from 'modules/inventory/store/interfaces';
import StoreDetailProviderUpdateContainer from 'modules/inventory/store/containers/GeneralTabs/StoreDetailProviderUpdateContainer';

const StoreGeneralProvider = () => {
  const { t } = useTranslation('store');
  const { isLoading, error, store, onOneClose, onOneToggle, state } = useStoreDetail();
  const open = useMemo(() => state?.form_5 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_5'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_5'), [onOneClose]);

  if (open) {
    return (
      <FormPaper title={t('fields.logistic')} actions={<FormPaperAction onToggle={handleToggle} open={open} />}>
        <StoreDetailProviderUpdateContainer
          initValue={{
            _id: store?._id,
            logistic: store?.logistic._id,
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
        data={getArray(store as IStore) || []}
        isLoading={isLoading}
        error={error}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralProvider);

const getArray = (data: IStore): any[] => {
  const array = [
    {
      label: 'store:fields.logistic',
      value: data?.logistic.name,
    },
  ];
  return array;
};
