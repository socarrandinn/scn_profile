import { memo, useMemo } from 'react';
import { useProductDetail } from '../../contexts/ProductDetail';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
type ProductWarehouseAreaProps = {
  rowId: string; // this warehouseId
};

const ProductWarehouseArea = ({ rowId }: ProductWarehouseAreaProps) => {
  const { product } = useProductDetail();

  const stock = useMemo(
    () => (product?.stock ? product?.stock?.find((item: any) => item.warehouse === rowId) : undefined),
    [product?.stock, rowId],
  );

  if (!stock?.area) return <></>;

  return (
    <AvatarNameCell
      // link={`/inventory/settings/warehouse-areas`}
      // @ts-ignore
      name={stock.area?.name}
      hideImage
      hideLink
    />
  );
};

export default memo(ProductWarehouseArea);
