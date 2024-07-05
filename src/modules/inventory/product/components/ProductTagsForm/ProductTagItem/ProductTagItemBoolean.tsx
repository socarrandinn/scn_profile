import { memo } from 'react';
import ProductTagLayout from './ProductTagLayout';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { SwitchField } from '@dfl/mui-react-common';

type ProductTagItemBooleanProps = {
  tag: IProductTags;
};

const ProductTagItemBoolean = ({ tag }: ProductTagItemBooleanProps) => {
  return (
    <ProductTagLayout title={tag?.name as string}>
      <SwitchField sx={{ cursor: 'pointer' }} label={tag?.name} checked={tag?.value} value={tag?.value} />
    </ProductTagLayout>
  );
};

export default memo(ProductTagItemBoolean);
