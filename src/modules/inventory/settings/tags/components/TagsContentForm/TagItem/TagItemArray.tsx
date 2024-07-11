import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { Chip, Stack } from '@mui/material';

type TagItemArrayProps = {
  tag: IProductTags;
};

const TagItemArray = ({ tag }: TagItemArrayProps) => {
  return (
    <ProductTagLayout title={tag?.name as string}>
      <Stack gap={1} flexDirection={'row'} flexWrap={'wrap'}>
        {tag?.value?.map((v: string) => (
          <Chip key={v} variant='outlined' label={v} />
        ))}
      </Stack>
      {/* <FormGroup>
        {tag?.value?.map((val: string) => (
          <FormControlLabel
            key={val}
            sx={{ cursor: 'default' }}
            control={<Checkbox sx={{ cursor: 'default' }} checked value={true} />}
            label={val}
          />
        ))}
      </FormGroup> */}
    </ProductTagLayout>
  );
};

export default memo(TagItemArray);
