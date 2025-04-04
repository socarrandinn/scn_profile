import { memo } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ChildrenProps, FlexBox } from '@dfl/mui-react-common';
import Typography from '@mui/material/Typography';

const NoteInfo = ({ children }: ChildrenProps) => {
  return (
    <FlexBox
      sx={{
        gap: 0.5,
        alignItems: 'center',
      }}
    >
      <InfoOutlinedIcon
        sx={{
          fontSize: 16,
        }}
      />
      <Typography fontSize={12}>{children}</Typography>
    </FlexBox>
  );
};

export default memo(NoteInfo);
