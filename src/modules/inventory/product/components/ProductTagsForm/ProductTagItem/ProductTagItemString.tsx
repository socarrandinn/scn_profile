import { memo } from 'react';
import ProductTagLayout from './ProductTagLayout';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip } from '@mui/material';

type ProductTagItemStringProps = {
  tag: IProductTags;
};

const ProductTagItemString = ({ tag }: ProductTagItemStringProps) => {
  return (
    <ProductTagLayout title={tag?.name as string}>
      <Chip variant='outlined' label={tag?.value} />
    </ProductTagLayout>
  );
};

export default memo(ProductTagItemString);
