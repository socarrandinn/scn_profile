import { ChildrenProps } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';
import { memo } from 'react';

type TextFieldLabelProps = ChildrenProps;

const TextFieldLabel = ({ children }: TextFieldLabelProps) => {
  return (
    <Typography
      variant='h6'
      sx={{
        marginBottom: 1,
        marginTop: 0,
        textTransform: 'none',
        whiteSpace: 'normal',
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 1.5,
      }}
    >
      {children}
    </Typography>
  );
};

export default memo(TextFieldLabel);
