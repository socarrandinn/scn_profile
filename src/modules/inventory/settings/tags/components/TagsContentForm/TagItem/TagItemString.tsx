import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip, SxProps } from '@mui/material';
import { isArray } from 'lodash';
import { LongText } from '@dfl/mui-react-common';

type TagItemStringProps = {
  tag: ISummaryTags;
  sx?: SxProps;
  Component?: any;
};

const TagItemString = ({ tag, sx, Component }: TagItemStringProps) => {
  const label = Component ? <Component value={isArray(tag?.value) ? tag?.value?.[0] : tag?.value} /> : tag?.value;
  return (
    <ProductTagLayout title={tag?.name}>
      <Chip variant='filled' label={<LongText text={label} lineClamp={1} />} sx={sx} />
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
