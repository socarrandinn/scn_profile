import React, { memo } from 'react';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { Typography, useTheme } from '@mui/material';

interface CellProps {
  timeOff: IEmployeeTimeOff;
}

const TimeOffCell = ({ timeOff }: CellProps) => {
  const theme = useTheme();

  return (
    <FlexBox gap={1} alignItems={'center'}>
      <IconPreview
        value={timeOff?.policy?.icon || 'AutoFixHighIcon'}
        key={timeOff?.policy?.icon}
        size={24}
        bgColor={theme.palette.primary.main}
      />
      <Typography>{timeOff?.policy?.name}</Typography>
    </FlexBox>
  );
};

export default memo(TimeOffCell);

export const renderTimeOff = (_value: any, timeOff: IEmployeeTimeOff) => <TimeOffCell timeOff={timeOff}/>
