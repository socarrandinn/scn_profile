import { getStatusColor, TimeOffStatusEnum } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoffStatus.enum';
import React, { memo } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type Props = {
  status: TimeOffStatusEnum;
};

const StatusItem = ({ status }: Props) => {
  const { t } = useTranslation('employee');

  return (
    <FlexBox gap={1} alignItems={'center'}>
      <CircleIcon sx={{ color: getStatusColor(status), fontSize: '10px' }} />
      <Typography>{t(`section.freeTime.status.${status}`)}</Typography>
    </FlexBox>
  )
};

export default memo(StatusItem);

export const renderStatusItem = (status: TimeOffStatusEnum) => <StatusItem status={status}/>;
