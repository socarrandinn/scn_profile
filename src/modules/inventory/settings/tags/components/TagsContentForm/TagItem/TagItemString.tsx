import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip } from '@mui/material';

type TagItemStringProps = {
  tag: IProductTags;
};

const TagItemString = ({ tag }: TagItemStringProps) => {
  return (
    <ProductTagLayout title={tag?.name as string}>
      <Chip variant='outlined' label={tag?.value} />
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
