import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { TablaHeaderOptions, TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { useSecurity } from '@dfl/react-security';
import { RECONCILIATION_ADJUSTMENT_PERMISSIONS } from '../../constants/reconciliation-adjustment.permissions';
import ReconciliationAdjustmentCreateModal from '../../containers/ReconciliationAdjustmentCreateModal';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { hasPermission } = useSecurity();

  const { isOpen: isOpenExport, onOpen: onOpenExport, onClose: onCloseExport } = useToggle(false);

  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        createAction: onOpen,
        export: true,
        create: hasPermission(RECONCILIATION_ADJUSTMENT_PERMISSIONS.RECONCILIATION_ADJUSTMENT_WRITE, true),
        exportAction: onOpenExport,
      },
    };
  }, [hasPermission, onOpen, onOpenExport]);

  return {
    isOpen,
    onClose,
    settings,
    isOpenExport,
    onOpenExport,
    onCloseExport,
  };
};

const ReconciliationAdjustmentListToolbar = ({
  filters,
  search,
  total,
}: {
  filters: any;
  search: string;
  total: number;
}) => {
  const { isOpen, settings, onClose } = useToolbarSetting();
  const { hasPermission } = useSecurity();

  /* const {
    mutate: handleExport,
    isLoading: isExporting,
    error: errorExport,
    reset,
  } = useExportAdjustment(filters, search, onCloseExport);

  const ExportToExcel = useCallback(() => {
    handleExport({ path: '-/adjustments' });
  }, [handleExport]); */

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions />
      {hasPermission(RECONCILIATION_ADJUSTMENT_PERMISSIONS.RECONCILIATION_ADJUSTMENT_WRITE) && (
        <ReconciliationAdjustmentCreateModal open={isOpen} onClose={onClose} />
      )}
      {/*  <ExportInformationAlert
        error={errorExport}
        isOpen={isOpenExport}
        onExport={ExportToExcel}
        onClose={onCloseExport}
        reset={reset}
        isExporting={isExporting}
        total={total}
      /> */}
    </>
  );
};

export default memo(ReconciliationAdjustmentListToolbar);
