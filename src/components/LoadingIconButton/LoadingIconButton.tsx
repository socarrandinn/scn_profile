import { ChildrenProps } from '@dfl/mui-react-common';
import { Box, CircularProgress, IconButton, IconButtonProps } from '@mui/material';
import { memo } from 'react';

type LoadingIconButtonProps = IconButtonProps &
ChildrenProps & {
  loading: boolean;
};

const LoadingIconButton = ({ loading, children, ...props }: LoadingIconButtonProps) => {
  return (
    <IconButton {...props}>
      {loading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress size={16} />
        </Box>
      ) : (
        children
      )}
    </IconButton>
  );
};

export default memo(LoadingIconButton);
