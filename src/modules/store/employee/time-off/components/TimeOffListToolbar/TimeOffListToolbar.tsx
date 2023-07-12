import { memo } from 'react';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: true,
  },
  actions: {
    export: false,
    create: false,
  },
};

const TimeOffListToolbar = () => {
  return (
        <>
            <TableToolbar>
                <TableToolbarActions settings={settings}></TableToolbarActions>
            </TableToolbar>
            <GeneralActions>
            </GeneralActions>
        </>
  );
};

export default memo(TimeOffListToolbar);
