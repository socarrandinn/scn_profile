import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { AddButton, TablaHeaderOptions, TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';
/* import { useDeleteManyProducts } from 'modules/inventory/hooks/useDeleteManyProducts';
import { ExportInformationAlert } from 'components/ExportInformationAlert';
import { useExportProducts } from 'modules/inventory/hooks/useExportProducts'; */
import { GeneralActions } from 'layouts/portals';
/* import { useExportSelected } from 'hooks/useExportSelected';
import { useTranslation } from 'react-i18next'; */
import StoreProductAddStockModal from '../../containers/StoreProductAddStockModal';
import { CAUSE_TYPE } from '../../interfaces/IStock';

type StoreProductListToolbarProps = {
  filters: any;
  total: number | undefined;
  localExport?: boolean;
  hideAdd?: boolean;
  storeId: string;
};

const StoreProductListToolbar = ({ filters, total, localExport = false, storeId }: StoreProductListToolbarProps) => {
  const { isOpen, onClose, onOpen } = useToggle();

  /* const { selected } = useTableSelection();
  const { wFilters } = useExportSelected(filters, selected);

  const { isOpen: isOpenExport, onOpen: onOpenExport, onClose: onCloseExport } = useToggle(); */

  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        /*  export: localExport,
        exportAction: localExport ? onOpenExport : undefined, */
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
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>

      <GeneralActions>
        {/* <PermissionCheck permissions={['PRODUCT_ADMIN', 'PRODUCT_VIEW']} atLessOne>
          <ExportButton action={onOpenExport} />
        </PermissionCheck> */}
        {/*  <PermissionCheck permissions={['PRODUCT_ADMIN', 'STORE_PRODUCT_ADMIN']} atLessOne> */}
        <AddButton action={onOpen} />
        <StoreProductAddStockModal
          open={isOpen}
          onClose={onClose}
          stores={storeId}
          initValue={{
            items: [],
            store: storeId,
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
