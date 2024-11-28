import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { ISummaryTags } from 'modules/inventory/settings/tags/interfaces';
import { Switch, SxProps } from '@mui/material';

type TagItemBooleanProps = {
  tag: ISummaryTags;
  sx?: SxProps;
};

const TagItemBoolean = ({ tag, sx }: TagItemBooleanProps) => {
  return (
    <ProductTagLayout title={tag?.name}>
      <Switch
        sx={{ '& .MuiSwitch-switchBase': { cursor: 'default' }, cursor: 'default', ...sx }}
        value={tag?.value}
        checked={tag?.value}
        readOnly
      />
      {/*  <SwitchField
        sx={{ '& .MuiSwitch-switchBase': { cursor: 'default' }, cursor: 'default', ...sx }}
        label={''}
        checked={!!tag?.value}
        value={!!tag?.value}
        readOnly
      /> */}
    </ProductTagLayout>
  );
};

export default memo(TagItemBoolean);
