import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
import BankCreateModal from 'modules/sales/settings/bank/containers/BankCreateModal';
import { BANK_PERMISSIONS } from 'modules/sales/settings/bank/constants/bank.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table';
import { bankFilters } from '../../constants';
import { useToggle } from '@dfl/hook-utils';


const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle();
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(bankFilters),
      },
    };
  }, []);

  return {
    settings,
    isOpen,
    onClose,
    onOpen,
  };
};


const BankListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={BANK_PERMISSIONS.BANK_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <BankCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(BankListToolbar);
