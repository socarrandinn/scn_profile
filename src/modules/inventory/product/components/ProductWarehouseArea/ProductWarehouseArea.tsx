import { memo } from 'react';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IProductStockItem } from 'modules/inventory/product-stock/interfaces/IStockResponse';
type ProductWarehouseAreaProps = {
  rowId: string; // this warehouseId
  record: IProductStockItem;
};

const ProductWarehouseArea = ({ rowId, record }: ProductWarehouseAreaProps) => {
  if (!record?.warehouseArea?.areaId) return <></>;

  return (
    <AvatarNameCell
      // link={`/inventory/settings/warehouse-areas`}
      // @ts-ignore
      name={record?.warehouseArea?.name}
      hideImage
      hideLink
    />
  );
};

export default memo(ProductWarehouseArea);
