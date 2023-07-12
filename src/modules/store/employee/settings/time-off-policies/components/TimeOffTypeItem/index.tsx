import React, { memo } from 'react';
import { Stack } from '@mui/material';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteTimeOffType } from 'modules/store/employee/settings/time-off-policies/hooks/useDeleteTimeOffType';
import { ITimeOffPolicyType } from 'modules/store/employee/settings/time-off-policies/interfaces';
import { useNavigate } from 'react-router';
import { EditTypeEnum } from 'modules/store/employee/settings/time-off-policies/constants/editType.enum';

interface TimeOffTypeItemProps {
  rowId: string;
  item: ITimeOffPolicyType;
}

const TimeOffTypeItem = ({ rowId, item }: TimeOffTypeItemProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading: isDeleting, error: isError } = useDeleteTimeOffType(onClose);
  const navigate = useNavigate();
  const goTo = () => {
    navigate(`/rrhh/settings/time-off-policies?edit=${rowId}&editType=${EditTypeEnum.TIME_OFF_TYPE}`);
  };

  return (
    <ListItem
      secondaryAction={
        <Stack direction='row' spacing={1}>
          <EditRowActions onClick={goTo} />
          <DeleteRowAction
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            error={isError}
            isLoading={isDeleting}
            onDelete={() => {
              mutate(rowId);
            }}
          />
        </Stack>
      }
      key={rowId}
    >
      <ListItemAvatar sx={{ minWidth: '20px' }}>
        <CircleIcon sx={{ color: item?.color, fontSize: '10px' }} />
      </ListItemAvatar>
      <ListItemText primary={item.name} />
    </ListItem>
  );
};

export default memo(TimeOffTypeItem);
