import { FilterProps, FixedListFilter } from '@dfl/mui-admin-layout';
import { IProductStockItem } from 'modules/inventory/product-stock/interfaces/IStockResponse';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindWarehouseStockByProductId } from 'modules/inventory/warehouse/hooks/useFindWarehouseStockByProductId';
import { memo, useMemo } from 'react';

const WarehouseStockFilter = ({ filter, value, onChange, title }: FilterProps & { options?: any[] }) => {
  const { product } = useProductDetail();
  const { data } = useFindWarehouseStockByProductId(product?._id as string);
  const warehouses = data?.data as IProductStockItem[];

  const filterOptions = useMemo(
    () =>
      warehouses?.map((w) => ({
        value: w.warehouse,
        label: w.warehouseName,
      })),
    [warehouses],
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
