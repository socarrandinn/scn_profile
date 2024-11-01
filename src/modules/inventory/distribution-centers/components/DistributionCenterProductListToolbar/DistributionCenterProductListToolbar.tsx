import { memo, useMemo } from 'react';
import { TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { defaultWarehouseProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const DistributionCenterProductListToolbar = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultWarehouseProductsFilters),
      },
    };
  }, []);

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions></GeneralActions>
    </>
  );
};

export default memo(DistributionCenterProductListToolbar);
