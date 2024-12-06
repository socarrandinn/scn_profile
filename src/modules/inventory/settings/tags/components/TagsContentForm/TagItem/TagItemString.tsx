import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip, SxProps } from '@mui/material';
import { LongText } from 'modules/common/components/LongText';

type TagItemStringProps = {
  tag: ISummaryTags;
  sx?: SxProps;
  Component?: any;
};

const TagItemString = ({ tag, sx, Component }: TagItemStringProps) => {
  console.log('tag', tag);
  const label = Component ? <Component value={tag?.value?.[0]} /> : tag?.value;
  return (
    <ProductTagLayout title={tag?.name}>
      <Chip variant='outlined' label={<LongText text={label} lineClamp={1} />} sx={sx} />
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
