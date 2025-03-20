import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, useTableSelection } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { defaultPaidOrderFilterKeys } from '../../constants';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { PermissionCheck } from '@dfl/react-security';

import { usePaidOrderValidateBulk } from '../../hooks/usePaidOrderValidateBulk';
import { ConfirmBulkButton } from 'components/Actions/ConfirmBulkAction';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';

const useToolbarSetting = (defaultFilters?: any) => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
        menuFilter: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultFilters || defaultPaidOrderFilterKeys),
      },
    };
  }, [defaultFilters]);

  return {
    settings,
  };
};

type Props = {
  defaultFilters?: any;
};
const PaidOrderListToolbar = ({ defaultFilters }: Props) => {
  const { t } = useTranslation('paidOrder');
  const { settings } = useToolbarSetting(defaultFilters);
  const { selected } = useTableSelection();
  const disabledBulk = useMemo(() => selected?.length > 10, [selected]);

  const [searchParams] = useSearchParams();
  const showValidateBulk = [searchParams.get('fview'), searchParams.get('status')].includes(ORDER_STATUS_TYPE_ENUM.PAID);

  const { mutateAsync: onValidate, isLoading, error, reset } = usePaidOrderValidateBulk();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <PermissionCheck permissions={ORDER_PERMISSIONS.ORDER_VALIDATE}>
              {showValidateBulk && (
                <ConfirmBulkButton
                  isLoading={isLoading}
                  reset={reset}
                  onDelete={onValidate}
                  disabled={disabledBulk}
                  error={error}
                  confirmation={{
                    title: t('paidOrder:confirmation.title'),
                    description: t('paidOrder:confirmation.selected', { count: selected?.length }),
                    confirm: t('paidOrder:confirmation.confirm'),
                  }}
                />
              )}
            </PermissionCheck>
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions></GeneralActions>
    </>
  );
};

export default memo(PaidOrderListToolbar);
