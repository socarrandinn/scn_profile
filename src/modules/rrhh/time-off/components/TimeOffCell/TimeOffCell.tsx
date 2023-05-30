import React, { memo } from 'react';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { Typography, useTheme } from '@mui/material';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';

interface CellProps {
  timeOff: IEmployeeTimeOff;
}

const TimeOffCell = ({ timeOff }: CellProps) => {
  const theme = useTheme();

  const policy = timeOff?.policy as ITimeOffPolicies;

  return (
    <FlexBox gap={1} alignItems={'center'}>
      <IconPreview
        value={policy?.icon || 'AutoFixHighIcon'}
        key={policy?.icon}
        size={24}
        bgColor={theme.palette.primary.main}
      />
      <Typography>{policy?.name}</Typography>
    </FlexBox>
  );
};

export default memo(TimeOffCell);

export const renderTimeOff = (_value: any, timeOff: IEmployeeTimeOff) => <TimeOffCell timeOff={timeOff} />;
