import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IProductStockResponse } from 'modules/inventory/product-stock/interfaces/IStockResponse';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindWarehouseStockByProductId } from 'modules/inventory/warehouse/hooks/useFindWarehouseStockByProductId';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
type Props = {
  warehouse: string;
};

const StockWarehouseCell = ({ warehouse }: Props) => {
  const { t } = useTranslation('stock');
  const { product } = useProductDetail();
  const { data, isLoading } = useFindWarehouseStockByProductId(product?._id as string);
  const stock = data as IProductStockResponse;
  const warehouseObj = useMemo(() => stock?.data?.find((w) => w.warehouse === warehouse), [stock?.data, warehouse]);

  if (isLoading) return <>...</>;
  if (!warehouseObj) return <>-</>;

  return (
    <AvatarNameCell
      name={warehouseObj?.warehouseName}
      secondary={`${t('fields.areaName')}: ${warehouseObj?.warehouseArea?.name}`}
      link={`/inventory/warehouses/${warehouseObj?.warehouse}/general`}
      hideImage
    />
  );
};

export default memo(StockWarehouseCell);
