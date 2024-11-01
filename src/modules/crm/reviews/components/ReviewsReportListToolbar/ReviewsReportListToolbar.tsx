import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar } from '@dfl/mui-admin-layout';
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

const ReviewsReportListToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<></>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
    </>
  );
};

export default memo(ReviewsReportListToolbar);
