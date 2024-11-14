import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { SwitchField } from '@dfl/mui-react-common';
import { SxProps } from '@mui/material';

type TagItemBooleanProps = {
  tag: IProductTags;
  sx?: SxProps;
};

const TagItemBoolean = ({ tag, sx }: TagItemBooleanProps) => {
  return (
    <ProductTagLayout title={tag?.name as string}>
      <SwitchField
        sx={{ '& .MuiSwitch-switchBase': { cursor: 'default' }, cursor: 'default', ...sx }}
        label={tag?.name}
        checked={tag?.value}
        value={tag?.value}
        readOnly
      />
    </ProductTagLayout>
  );
};

export default memo(TagItemBoolean);
