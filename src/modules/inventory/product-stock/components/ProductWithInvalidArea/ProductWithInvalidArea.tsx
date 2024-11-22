import { memo } from 'react';
import { IStockDetailCallback } from '../../interfaces/IStockSummary';
import DetailHeaderAction from '../DetailHeaderAction/DetailHeaderAction';
import { Divider, Stack } from '@mui/material';
import ProductWithInvalidAreaList from './ProductWithInvalidAreaList';
import ProductWithInvalidAreaExpand from './ProductWithInvalidAreaExpand';

export type SupplierNoRelationProps = Pick<IStockDetailCallback, 'productWithInvalidArea'> & {
  onInitialClose: () => void;
};

const ProductWithInvalidArea = ({ productWithInvalidArea, onInitialClose }: SupplierNoRelationProps) => {
  const groupedByAreaName = productWithInvalidArea?.reduce((acc: any, item: any) => {
    const area = item.areaName || 'Sin Área';
    if (!acc[area]) {
      acc[area] = [];
    }
    acc[area].push(item);
    return acc;
  }, {});

  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='warehouse.import.summary.error.productWithInvalidArea' />
      <Stack gap={2} divider={<Divider orientation='horizontal' flexItem />}>
        {Object.keys(groupedByAreaName).map((areaName) => (
          <ProductWithInvalidAreaExpand
            key={areaName}
            areaName={areaName}
            productCount={groupedByAreaName[areaName].length}
          >
            <ProductWithInvalidAreaList productWithInvalidArea={groupedByAreaName[areaName]} />
          </ProductWithInvalidAreaExpand>
        ))}
      </Stack>
    </Stack>
  );
};

export default memo(ProductWithInvalidArea);
