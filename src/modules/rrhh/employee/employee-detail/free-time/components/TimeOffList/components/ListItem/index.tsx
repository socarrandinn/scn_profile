import React, { memo } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';
import ListItem from '@mui/material/ListItem';
import { Stack, Typography, useTheme } from '@mui/material';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { format } from 'date-fns';
import { getStatusColor } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoffStatus.enum';
import { useTranslation } from 'react-i18next';

interface Props {
  item: IEmployeeTimeOff;
}

const TimeOffListItem = ({ item }: Props) => {
  const theme = useTheme();
  const { t } = useTranslation('employee');

  return (
    <>
      <ListItem
        sx={{ borderLeft: `6px solid ${theme.palette.primary.main}` }}
        secondaryAction={
          <FlexBox gap={1} alignItems={'center'}>
            <CircleIcon sx={{ color: getStatusColor(item.status), fontSize: '10px' }} />
            <Typography>{t(`section.freeTime.status.${item.status}`)}</Typography>
          </FlexBox>
        }
      >
        <ListItemAvatar>
          <IconPreview
            value={item?.policy?.icon || 'AutoFixHighIcon'}
            key={item?.policy?.icon}
            size={32}
            bgColor={theme.palette.primary.main}
          />
        </ListItemAvatar>
        <Stack direction='column'>
          <ListItemText primary={item?.policy?.name} />
          <FlexBox justifyContent='flex-start' alignItems='center' gap={1}>
            {/* @ts-ignore */}
            <Typography>{`${format(new Date(item?.startDate), 'dd-MM-yyyy')} - ${format(
              new Date(item?.endDate),
              'dd-MM-yyyy',
            )}`}</Typography>
          </FlexBox>
        </Stack>
      </ListItem>
    </>
  );
};

export default memo(TimeOffListItem);
