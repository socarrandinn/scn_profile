import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip, SxProps } from '@mui/material';

type TagItemStringProps = {
  tag: IProductTags;
  sx?: SxProps;
};

const TagItemString = ({ tag, sx }: TagItemStringProps) => {
  return (
    <ProductTagLayout title={tag?.name as string}>
      <Chip variant='outlined' label={tag?.value} sx={sx} />
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
