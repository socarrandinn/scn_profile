import React, { memo } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { FlexBox, IconPreview } from '@dfl/mui-react-common';
import ListItem from '@mui/material/ListItem';
import { ITimeOffPolicies } from 'modules/store/employee/settings/time-off-policies/interfaces';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { EditTypeEnum } from 'modules/store/employee/settings/time-off-policies/constants/editType.enum';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteTimeOffPolicy } from 'modules/store/employee/settings/time-off-policies/hooks/useDeleteTimeOffPolicy';

interface TimeOffPolicyItemProps {
  rowId: string;
  item: ITimeOffPolicies;
}

const TimeOffPolicyItem = ({ item, rowId }: TimeOffPolicyItemProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading: isDeleting, error: isError } = useDeleteTimeOffPolicy(onClose);
  const navigate = useNavigate();
  const goTo = () => {
    navigate(`/store/employee/settings/time-off-policies?edit=${rowId}&editType=${EditTypeEnum.TIME_OFF_POLICY}`);
  };

  return (
        <>
            <ListItem
                sx={{ borderLeft: '6px solid #ccc' }}
                secondaryAction={
                    <Stack direction='row' spacing={1}>
                        <EditRowActions onClick={goTo}/>
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
            >
                <ListItemAvatar>
                    <IconPreview value={item?.icon || 'AutoFixHighIcon'} key={item?.icon} size={'medium'}/>
                </ListItemAvatar>
                <Stack direction='column'>
                    <ListItemText primary={item?.name}/>
                    <FlexBox justifyContent='flex-start' alignItems='center' gap={1}>
                        {/* @ts-ignore */}
                        <CircleIcon sx={{ color: item?.type?.color, fontSize: '10px' }}/>
                        {/* @ts-ignore */}
                        <Typography>{item?.type?.name}</Typography>
                    </FlexBox>
                </Stack>
            </ListItem>
        </>
  );
};

export default memo(TimeOffPolicyItem);
