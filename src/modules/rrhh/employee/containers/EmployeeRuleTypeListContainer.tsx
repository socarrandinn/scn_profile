import React, { memo } from 'react';
import Box from '@mui/material/Box';
import { useFindEmployeeRuleTypes } from 'modules/rrhh/employee/hooks/useFindRules';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CircleIcon from '@mui/icons-material/Circle';
import FolderIcon from '@mui/icons-material/Folder';
import { ITimeOffPolicies } from 'modules/rrhh/settings/time-off-policies/interfaces';

const EmployeeRuleListContainer = () => {
  const { data } = useFindEmployeeRuleTypes();

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
