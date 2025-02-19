import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { IProductStockItem } from 'modules/inventory/product-stock/interfaces/IStockResponse';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useInventoryStockSummary } from 'modules/reports/hooks/product/useInventoryStock';
import { memo, useMemo } from 'react';

const WarehouseStockFilter = ({ filter, value, onChange, title }: FilterProps & { options?: any[] }) => {
  const { product } = useProductDetail();
  const { data } = useInventoryStockSummary(product?._id as string);
  const filterOptions = useMemo(
    () =>
      data?.data?.map((w: IProductStockItem) => ({
        value: w.warehouse,
        label: w.warehouseName,
      })),
    [data?.data],
  );

  return (
    <FixedListFilter
      options={filterOptions}
      value={(value as string[] | undefined) || []}
      title={title}
      onChange={onChange}
      filter={filter}
    />
  );
};

export default memo(WarehouseStockFilter);
