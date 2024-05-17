import { memo, useCallback } from 'react';
import { IRobotTxt } from '../../interfaces';
import { useParamsLink } from '@dfl/react-security';
import { useRobotTxtContext } from '../../contexts/RobotTxtContext';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { DateValue } from '@dfl/mui-react-common';
import { Code } from '@mui/icons-material';

type RobotTxtLogTimelineItemProps = {
  robotTxt: IRobotTxt;
  index: number;
  onClose?: () => void;
};

const RobotTxtLogTimelineItem = ({ robotTxt, index, onClose }: RobotTxtLogTimelineItemProps) => {
  const { _id } = robotTxt;
  const { checkRobotTxt } = useRobotTxtContext();

  const handleEdit = useParamsLink({ log: robotTxt?._id });

  const onEdit = useCallback(() => {
    handleEdit();
    onClose?.();
  }, [handleEdit]);

  return (
    <ListItem
      onClick={onEdit}
      sx={(theme) => ({
        cursor: 'pointer',
        borderRadius: '10px',
        ':hover': {
          backgroundColor: theme.palette.grey[300],
        },
        ...(checkRobotTxt === _id ? { backgroundColor: theme.palette.grey[200] } : {}),
      })}
    >
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: (theme) => theme.palette.grey[200], color: '#000' }}>
          <Code />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary='robot.txt'
        secondary={<DateValue value={robotTxt?.createdAt} />}
        primaryTypographyProps={{
          fontWeight: 800,
        }}
      />
    </ListItem>
  );
};

export default memo(RobotTxtLogTimelineItem);
