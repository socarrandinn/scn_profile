import { memo } from 'react';
import { IStockDetailCallback } from '../../interfaces/IStockSummary';
import DetailHeaderAction from '../DetailHeaderAction/DetailHeaderAction';
import { Divider, Stack } from '@mui/material';
import ProductNoExistList from './ProductNoExistList';

export type SupplierNoRelationProps = Pick<IStockDetailCallback, 'productNoExist'> & {
  onInitialClose: () => void;
};

const ProductNoExist = ({ productNoExist, onInitialClose }: SupplierNoRelationProps) => {
  return (
    <Stack gap={1} minHeight={400} maxHeight={600}>
      <DetailHeaderAction onClose={onInitialClose} title='warehouse.import.summary.error.productNoExist' />
      <Stack gap={2} divider={<Divider orientation='horizontal' flexItem />}>
        <ProductNoExistList productNoExist={productNoExist} />
      </Stack>
    </Stack>
  );
};

export default memo(ProductNoExist);
