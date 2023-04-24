import { memo } from 'react';
import { Box } from '@mui/material';
import LoginFormDemo from '../components/LoginFormDemo';

const FormsDemosContainer = () => {
  return (
    <Box sx={{ my: 4 }}>
      <LoginFormDemo
          codeTitle={''}/>
    </Box>
  );
};

export default memo(FormsDemosContainer);
