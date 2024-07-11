import { memo } from 'react';
import ProductTagLayout from './TagLayout';
import { IProductTags } from 'modules/inventory/settings/tags/interfaces';
import { SwitchField } from '@dfl/mui-react-common';

type TagItemBooleanProps = {
  tag: IProductTags;
};

const TagItemBoolean = ({ tag }: TagItemBooleanProps) => {
  return (
    <ProductTagLayout title={tag?.name as string}>
      <SwitchField
        sx={{ '& .MuiSwitch-switchBase': { cursor: 'default' }, cursor: 'default' }}
        label={tag?.name}
        checked={tag?.value}
        value={tag?.value}
        readOnly
      />
    </ProductTagLayout>
  );
};

export default memo(TagItemBoolean);
