import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { Box, SxProps } from '@mui/material';
import { isArray } from 'lodash';
import { LongText } from '@dfl/mui-react-common';
import { grey } from '@mui/material/colors';

type TagItemStringProps = {
  tag: ISummaryTags;
  sx?: SxProps;
  Component?: any;
};

const TagItemString = ({ tag, sx, Component }: TagItemStringProps) => {
  const renderChip = (value: string) => (
    <Box key={value} sx={{ background: grey[200], borderRadius: 2, padding: 1, ...sx, my: 'auto' }}>
      <LongText fontSize={13} text={Component ? <Component value={value} /> : String(value)} lineClamp={3} />
    </Box>
  );

  return (
    <ProductTagLayout title={tag?.name}>
      {isArray(tag?.value) ? (
        <div className='flex gap-1'>{tag.value.map((item) => renderChip(item))}</div>
      ) : (
        renderChip(tag?.value)
      )}
    </ProductTagLayout>
  );
};

export default memo(TagItemString);
