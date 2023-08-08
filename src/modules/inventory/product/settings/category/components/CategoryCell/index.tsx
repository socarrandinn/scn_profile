import { memo } from 'react';
import { ICategory } from 'modules/inventory/product/settings/category/interfaces';
import { EditLink } from '@dfl/mui-admin-layout';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';

interface CategoryCellProps {
  data: ICategory;
}
const CategoryCell = ({ data }: CategoryCellProps) => {
  return (
    <FlexBox gap={1} alignItems='center'>
      <IconPreview
        value={data?.icon === 'category' ? 'AdminPanelSettingsIcon' : data?.icon}
        size='small'
        bgColor={'primary'}
        key={data?.icon}
      />
      <EditLink entityId={data._id as string}>{data?.name}</EditLink>
    </FlexBox>
  );
};

export default memo(CategoryCell);
