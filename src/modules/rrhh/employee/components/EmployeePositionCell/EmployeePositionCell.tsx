import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { useFindOneJobPositions } from 'modules/rrhh/settings/job-position/hooks/useFindOneJobPositions';

type EmployeeCategoryCellProps = {
  position?: string | null;
};

const EmployeePositionCell = ({ position }: EmployeeCategoryCellProps) => {
  const { data } = useFindOneJobPositions(position || null);

  return (
    <FlexBox alignItems={'center'} gap={1}>
      <Stack>
        <Typography>{data?.name || ''}</Typography>
      </Stack>
    </FlexBox>
  );
};

export default memo(EmployeePositionCell);
