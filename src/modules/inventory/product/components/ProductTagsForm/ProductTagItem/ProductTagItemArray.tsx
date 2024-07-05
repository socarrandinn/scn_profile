import { memo } from 'react';
import ProductTagLayout from './ProductTagLayout';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

type ProductTagItemArrayProps = {
  tag: IProductTags;
};

const ProductTagItemArray = ({ tag }: ProductTagItemArrayProps) => {
  return (
    <ProductTagLayout title={tag?.name as string}>
      <FormGroup>
        {tag?.value?.map((val: string) => (
          <FormControlLabel
            key={val}
            sx={{ cursor: 'default' }}
            control={<Checkbox sx={{ cursor: 'default' }} checked value={true} />}
            label={val}
          />
        ))}
      </FormGroup>
    </ProductTagLayout>
  );
};

export default memo(ProductTagItemArray);
