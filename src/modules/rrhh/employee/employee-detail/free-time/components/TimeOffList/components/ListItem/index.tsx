import React, { memo } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';
import ListItem from '@mui/material/ListItem';
import { Stack, Typography, useTheme } from '@mui/material';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { formatDate } from 'utils/date';

interface Props {
  item: IEmployeeTimeOff;
}

const TimeOffListItem = ({ item }: Props) => {
  const theme = useTheme();

  console.log('item', item);

  return (
    <>
      <ListItem sx={{ borderLeft: '6px solid #ccc' }}>
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
            {/* <CircleIcon sx={{ color: item?.type?.color, fontSize: '10px' }} /> */}
            {/* @ts-ignore */}
            <Typography>{`${formatDate(item?.startDate)} - ${formatDate(item?.endDate)}`}</Typography>
          </FlexBox>
        </Stack>
      </ListItem>
    </>
  );
};

export default memo(TimeOffListItem);
