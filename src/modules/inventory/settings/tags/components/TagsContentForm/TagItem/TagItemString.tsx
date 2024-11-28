import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip, SxProps } from '@mui/material';

type TagItemStringProps = {
  tag: ISummaryTags;
  sx?: SxProps;
};

const TagItemString = ({ tag, sx }: TagItemStringProps) => {
  return (
    <ProductTagLayout title={tag?.name}>
      <Chip variant='outlined' label={tag?.value} sx={sx} />
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
