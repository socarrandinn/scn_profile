import React, { memo } from 'react';
import Box from '@mui/material/Box';
import { useFindEmployeeRules } from 'modules/rrhh/employee/hooks/useFindRules';
import List from '@mui/material/List';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';
import ListItem from '@mui/material/ListItem';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';

const EmployeeRuleListContainer = () => {
  const { data } = useFindEmployeeRules();
  return (
    <Box>
      <List>
        {data?.data?.map((item: ITimeOffPolicies, idx: number) => (
          <ListItem secondaryAction={<CircleIcon sx={{ color: item?.color }} />} key={item?._id || idx}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Single-line item' />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default memo(EmployeeRuleListContainer);
