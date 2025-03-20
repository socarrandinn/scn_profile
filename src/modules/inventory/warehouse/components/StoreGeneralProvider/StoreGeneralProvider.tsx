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
import { WAREHOUSE_PERMISSIONS } from '../../constants';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';

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
          sx: { color: 'rgba(62, 62, 62, 0.50)', '&:hover': { color: 'primary.main' } },
          permissions: [LOGISTICS_PERMISSIONS.LOGISTICS_VIEW],
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
    <FormPaper
      mbHeader={'12.83px'}
      title={t('fields.logistic')}
      actions={
        <FormPaperAction onToggle={handleToggle} open={open} permissions={[WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE]} />
      }
    >
      <DetailList
        data={warehouseData}
        isLoading={isLoading}
        labelSx={{ width: '50%' }}
        tableRowSx={{ '.MuiTableCell-root': { borderBottom: 'none', padding: '0px 0px 9px 0px' } }}
      />
    </FormPaper>
  );
};

export default memo(StoreGeneralProvider);
