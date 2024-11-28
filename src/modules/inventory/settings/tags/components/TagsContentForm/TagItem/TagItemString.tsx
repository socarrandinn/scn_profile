import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip, SxProps } from '@mui/material';

type TagItemStringProps = {
  tag: ISummaryTags;
  sx?: SxProps;
  Component?: any;
};

const TagItemString = ({ tag, sx, Component }: TagItemStringProps) => {
  const label = Component ? <Component value={tag?.value} /> : tag?.value;
  return (
    <ProductTagLayout title={tag?.name}>
      <Chip variant='outlined' label={label} sx={sx} />
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
