import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { RECONCILIATION_ADJUSTMENT_PERMISSIONS } from '../../constants/reconciliation-adjustment.permissions';
import ReconciliationAdjustmentCreateModal from '../../containers/ReconciliationAdjustmentCreateModal';
import { useTranslation } from 'react-i18next';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);

  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        export: false,
        create: false,
      },
      filter: {
        // defaultFilterKeys: getDefaultFilterKeys(defaultProductFilters),
        activeMenu: true,
      },
    };
  }, []);

  return {
    isOpen,
    onClose,
    onOpen,
    settings,
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
  const { t } = useTranslation();
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

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
      <GeneralActions>
        <PermissionCheck permissions={RECONCILIATION_ADJUSTMENT_PERMISSIONS.RECONCILIATION_ADJUSTMENT_WRITE}>
          <AddButton action={onOpen}>{t('common:add')}</AddButton>
        </PermissionCheck>
      </GeneralActions>
      <ReconciliationAdjustmentCreateModal open={isOpen} onClose={onClose} />

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
