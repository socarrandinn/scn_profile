import { memo, useMemo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { AddButton, TablaHeaderOptions, TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import StoreProductAddStockModal from '../../containers/StoreProductAddStockModal';
import { CAUSE_TYPE } from '../../interfaces/IStock';

type RelatedProductsListToolbarProps = {
  filters: any;
  total: number | undefined;
  localExport?: boolean;
  hideAdd?: boolean;
  storeId: string;
};

const RelatedProductsListToolbar = ({ localExport = false, storeId }: RelatedProductsListToolbarProps) => {
  const { isOpen, onClose, onOpen } = useToggle();

  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
      },
    };
  }, [localExport]);

  return (
    <>
      <TableToolbar
      >
        <TableToolbarActions settings={settings}></TableToolbarActions>
      </TableToolbar>

      <GeneralActions>
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
      </GeneralActions>
    </>
  );
};

export default memo(RelatedProductsListToolbar);
