/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date: 4/24/23
 */
import React, { memo } from 'react';
import { Divider, Stack } from '@mui/material';
import EmployeeDetail from 'modules/rrhh/employee/components/EmployeeDetail/EmployeeDetail';

const EmployeeSummary = () => {
  return (
    <Stack direction={'column'} divider={<Divider orientation='horizontal' light />} spacing={0}>
      <EmployeeDetail />
    </Stack>
  );
};

export default memo(EmployeeSummary);
