import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip, Stack, SxProps } from '@mui/material';

type TagItemArrayProps = {
  tag: ISummaryTags | string;
  sx?: SxProps;
};

const TagItemArray = ({ tag, sx }: TagItemArrayProps) => {
  if (typeof tag === 'string') {
    return (
      <Stack gap={1} flexDirection="row" flexWrap="wrap" justifyContent="flex-end">
        <Chip variant="filled" label={tag} sx={sx} />
      </Stack>
    );
  }

  return (
    <ProductTagLayout title={tag?.name}>
      <Stack gap={1} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'flex-end'}>
        {tag?.value?.map((v: string) => (
          <Chip key={v} variant='filled' label={v} sx={sx} />
        ))}
      </Stack>
    </ProductTagLayout>
  );
};

export default memo(TagItemArray);
