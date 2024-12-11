import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip, SxProps } from '@mui/material';
import { LongText } from 'modules/common/components/LongText';
import { isArray } from 'lodash';

type TagItemStringProps = {
  tag: ISummaryTags;
  sx?: SxProps;
  Component?: any;
};

const TagItemString = ({ tag, sx, Component }: TagItemStringProps) => {
  const label = Component ? <Component value={isArray(tag?.value) ? tag?.value?.[0] : tag?.value} /> : tag?.value;
  return (
    <ProductTagLayout title={tag?.name}>
      <Chip variant='outlined' label={<LongText text={label} lineClamp={1} />} sx={sx} />
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
