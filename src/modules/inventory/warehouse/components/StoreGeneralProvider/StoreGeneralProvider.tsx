import { memo, useCallback, useMemo } from 'react';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useTranslation } from 'react-i18next';
import { useWarehouseDetail } from 'modules/inventory/warehouse/context/WarehouseContext';
import { FormPaperAction } from 'modules/common/components/FormPaperAction';
import StoreDetailProviderUpdateContainer from 'modules/inventory/warehouse/containers/GeneralTabs/StoreDetailProviderUpdateContainer';
import { renderNameLink } from 'modules/inventory/common/components/NameLink/NameLink';
import { isEmpty } from 'lodash';
import { DetailList } from 'components/DetailList';
import { filterByLabel } from 'components/DetailList/DetailList';

const StoreGeneralProvider = () => {
  const { t } = useTranslation('warehouse');
  const { isLoading, error, warehouse, onOneClose, onOneToggle, state } = useWarehouseDetail();
  const open = useMemo(() => state?.form_5 || false, [state]);
  const handleToggle = useCallback(() => onOneToggle?.('form_5'), [onOneToggle]);
  const handleClose = useCallback(() => onOneClose?.('form_5'), [onOneClose]);

  const warehouseData = useMemo(() => {
    if (!warehouse) return [];

    const items = Object.entries(warehouse).map(([key, value]) => {
      return {
        key,
        label: t(`fields.${key}`),
        value: renderNameLink({
          name: warehouse?.logistic?.name || '',
          route: `/inventory/settings/logistics/${warehouse?.logistic?._id as string}/general`,
          noLink: isEmpty(warehouse?.logistic?._id),
        }),
      };
    });
    return filterByLabel(items, ['logistic']);
  }, [t, warehouse]);

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
      <DetailList data={warehouseData} isLoading={isLoading} />
    </FormPaper>
  );
};

export default memo(StoreGeneralProvider);
