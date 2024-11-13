import { IProduct } from 'modules/inventory/common/interfaces';
import { useMemo } from 'react';

export const useStockUtils = (product: IProduct, warehouse: string) => {
  const warehouseArea = useMemo(() => {
    const stock = product?.stock?.find((s) => s.warehouse === warehouse);
    return stock?.area?.areaId;
  }, [product?.stock, warehouse]);

  return {
    warehouseArea,
  };
};
