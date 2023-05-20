import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';

type EmployeeCategoryCellProps = {
  position?: IJobPosition;
};

const EmployeePositionCell = ({ position }: EmployeeCategoryCellProps) => {
  return (
        <FlexBox alignItems={'center'} gap={1}>
            <Stack>
                <Typography>{position?.name || ''}</Typography>
            </Stack>
        </FlexBox>
  );
};

export default memo(EmployeePositionCell);
