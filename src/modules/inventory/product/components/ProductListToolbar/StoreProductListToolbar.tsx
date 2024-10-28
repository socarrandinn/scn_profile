import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
/* import { useDeleteManyProducts } from 'modules/inventory/hooks/useDeleteManyProducts';
import { ExportInformationAlert } from 'components/ExportInformationAlert';
import { useExportProducts } from 'modules/inventory/hooks/useExportProducts'; */
import { GeneralActions } from 'layouts/portals';
/* import { useExportSelected } from 'hooks/useExportSelected';
import { useTranslation } from 'react-i18next'; */
import StoreProductAddStockModal from '../../containers/StoreProductAddStockModal';
import { CAUSE_TYPE } from '../../interfaces/IStock';
import { defaultWarehouseProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { ExcludeFilterMenu } from 'components/libs/table/toolbar/FilterSelected/ExcludeFilterMenu';

type StoreProductListToolbarProps = {
  filters: any;
  total: number | undefined;
  localExport?: boolean;
  hideAdd?: boolean;
  warehouseId: string;
};

const StoreProductListToolbar = ({
  filters,
  total,
  localExport = false,
  warehouseId,
}: StoreProductListToolbarProps) => {
  const { isOpen, onClose, onOpen } = useToggle();

  /* const { selected } = useTableSelection();
  const { wFilters } = useExportSelected(filters, selected);

  const { isOpen: isOpenExport, onOpen: onOpenExport, onClose: onCloseExport } = useToggle(); */

  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        /*  export: localExport,
        exportAction: localExport ? onOpenExport : undefined, */
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultWarehouseProductsFilters),
      },
    };
  }, []);

  // const { mutate, isLoading } = useDeleteManyProducts();

  // @ts-ignore
  /* const {
    mutate: handleExport,
    isLoading: isExporting,
    error: errorExport,
    reset,
  } = useExportProducts(wFilters, onCloseExport, onCloseExport); */

  return (
    <>
      <TableToolbar
      /* selectActions={
          <Stack direction={'row'} spacing={1}>
            {!isProvider && <DeleteButton isLoading={isLoading} onDelete={mutate} many />}
          </Stack>
        } */
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions>
        {/* <PermissionCheck permissions={['PRODUCT_ADMIN', 'PRODUCT_VIEW']} atLessOne>
          <ExportButton action={onOpenExport} />
        </PermissionCheck> */}
        {/*  <PermissionCheck permissions={['PRODUCT_ADMIN', 'STORE_PRODUCT_ADMIN']} atLessOne> */}
        <AddButton action={onOpen} />
        <ExcludeFilterMenu />
        <StoreProductAddStockModal
          open={isOpen}
          onClose={onClose}
          warehouse={warehouseId}
          initValue={{
            items: [],
            warehouse: warehouseId,
            note: '',
            file: '',
            cause: CAUSE_TYPE.ATTENTION_WORKERS,
          }}
        />
        {/* <ExportInformationAlert
            error={errorExport}
            isOpen={isOpenExport}
            onExport={handleExport}
            onClose={onCloseExport}
            reset={reset}
            isExporting={isExporting}
            total={total}
            selected={selected}
          /> */}
        {/*   </PermissionCheck> */}
      </GeneralActions>
    </>
  );
};

export default memo(StoreProductListToolbar);
