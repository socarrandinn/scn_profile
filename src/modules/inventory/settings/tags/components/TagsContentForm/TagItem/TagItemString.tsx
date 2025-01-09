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
  const renderChip = (value: string) => (
    <Chip
      key={value}
      variant="filled"
      label={<LongText text={Component ? <Component value={value} /> : String(value)} lineClamp={1} />}
      sx={sx}
    />
  );

  return (
    <ProductTagLayout title={tag?.name}>
      {isArray(tag?.value)
        ? <div className='flex gap-1'>{tag.value.map((item) => renderChip(item))}</div>
        : renderChip(tag?.value)}
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
