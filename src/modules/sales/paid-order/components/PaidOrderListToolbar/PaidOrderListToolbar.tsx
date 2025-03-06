import { memo, useMemo } from 'react';
import { Button, Stack } from '@mui/material';
import { TableToolbar, useTableSelection } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { defaultPaidOrderFilterKeys } from '../../constants';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { PermissionCheck } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { ConfirmDialog } from 'components/ConfirmActions';
import { useToggle } from '@dfl/hook-utils';
import { usePaidOrderValidateBulk } from '../../hooks/usePaidOrderValidateBulk';

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
        menuFilter: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultPaidOrderFilterKeys),
      },
    };
  }, []);

  return {
    settings,
  };
};

const PaidOrderListToolbar = () => {
  const { t } = useTranslation('paidOrder');
  const { settings } = useToolbarSetting();
  const { selected } = useTableSelection();
  const disabledBulk = useMemo(() => selected?.length > 10, [selected]);
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { mutate: onValidate, isLoading, error } = usePaidOrderValidateBulk();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <PermissionCheck permissions={ORDER_PERMISSIONS.ORDER_VALIDATE}>
              <Button className='whitespace-nowrap' variant='contained' disabled={disabledBulk} onClick={onOpen}>
                {t('validateOrder')}
              </Button>
            </PermissionCheck>
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions></GeneralActions>

      <ConfirmDialog
        open={isOpen}
        title={t('paidOrder:confirmation.title')}
        confirmationMessage={t('paidOrder:confirmation.description')}
        onClose={onClose}
        isLoading={isLoading}
        onConfirm={onValidate}
        confirmButtonText={t('paidOrder:confirmation.confirm')}
        // imageUrl={ACTION_IMAGES.warningImage}
        colorBtn='primary'
        error={error}
      />
    </>
  );
};

export default memo(PaidOrderListToolbar);
