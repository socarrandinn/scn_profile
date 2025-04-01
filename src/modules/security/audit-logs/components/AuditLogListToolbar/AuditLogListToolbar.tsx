import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar } from '@dfl/mui-admin-layout';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { auditLogAllFilters } from '../../constants';

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
        defaultFilterKeys: getDefaultFilterKeys(auditLogAllFilters),
      }
    };
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

const AuditLogListToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            {/* <DeleteRowAction isLoading={isLoading} onDelete={mutate} /> */}
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      {/* <GeneralActions>
                <PermissionCheck permissions={REVIEWS_PERMISSIONS.REVIEWS_WRITE}>
                    <AddButton action={onOpen}/>
                </PermissionCheck>
            </GeneralActions> */}
      {/* <ReviewsCreateModal open={isOpen} onClose={onClose}/> */}
    </>
  );
};

export default memo(AuditLogListToolbar);
