import React, { memo } from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { DateValue, FlexBox, IconPreview } from '@dfl/mui-react-common';
import ListItem from '@mui/material/ListItem';
import { Stack, useTheme } from '@mui/material';
import { IEmployeeTimeOff } from 'modules/store/employee/common/interfaces/IEmployeeTimeOff';
import { StatusItem } from '../../../StatusItem';
import { ITimeOffPolicies } from 'modules/store/employee/settings/time-off-policies/interfaces';

interface Props {
  item: IEmployeeTimeOff;
}

const TimeOffListItem = ({ item }: Props) => {
  const theme = useTheme();

  const policy = item?.policy as ITimeOffPolicies;

  return (
    <>
      <ListItem
        sx={{ borderLeft: `6px solid ${theme.palette.primary.main}` }}
        secondaryAction={<StatusItem status={item.status} />}
      >
        <ListItemAvatar>
          <IconPreview
            value={policy?.icon || 'AutoFixHighIcon'}
            key={policy?.icon}
            size={32}
            bgColor={theme.palette.primary.main}
          />
        </ListItemAvatar>
        <Stack direction='column'>
          <ListItemText primary={policy?.name} />
          <FlexBox justifyContent='flex-start' alignItems='center' gap={1}>
            <DateValue value={item?.startDate}/> -  <DateValue value={item?.endDate}/>
          </FlexBox>
        </Stack>
      </ListItem>
    </>
  );
};

export default memo(TimeOffListItem);
