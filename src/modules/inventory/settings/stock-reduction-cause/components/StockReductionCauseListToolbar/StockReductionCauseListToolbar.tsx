import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import StockReductionCauseCreateModal from 'modules/inventory/settings/stock-reduction-cause/containers/StockReductionCauseCreateModal';
import { STOCK_REDUCTION_CAUSE_PERMISSIONS } from 'modules/inventory/settings/stock-reduction-cause/constants/stock-reduction-cause.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import StockReductionCauseDeleteButton from '../StockReductionCauseDeleteButton/StockReductionCauseDeleteButton';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
      },
    };
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

const StockReductionCauseListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <StockReductionCauseDeleteButton />
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={STOCK_REDUCTION_CAUSE_PERMISSIONS.STOCK_REDUCTION_CAUSE_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <StockReductionCauseCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(StockReductionCauseListToolbar);
