import { memo } from 'react';
import { ICategory } from 'modules/rrhh/settings/category/interfaces';
import FontIconPicker from 'components/libs/FontIconPicker';
import { Box } from '@mui/material';
import { EditLink } from '@dfl/mui-admin-layout';
import { FlexBox } from '@dfl/mui-react-common';

interface CategoryCellProps {
  data: ICategory;
}
const CategoryCell = ({ data }: CategoryCellProps) => {
  return (
    <FlexBox gap={1} justifyContent='flex-start' alignItems='center'>
      <Box mr={1}>
        <FontIconPicker
          readOnly
          value={data?.icon === 'category' ? 'AdminPanelSettingsIcon' : data?.icon}
          size='medium'
          key={data?.icon}
        />
      </Box>
      <EditLink entityId={data._id as string}>{data?.name}</EditLink>
    </FlexBox>
  );
};

export default memo(CategoryCell);
