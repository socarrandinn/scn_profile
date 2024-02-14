import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
type LinearProgressBarProps = {
  value: number;
  color: 'warning' | 'primary';
};

const LinearProgressBar = ({ value, color = 'primary' }: LinearProgressBarProps) => {
  return (
    <Box
      sx={{
        borderRadius: '5px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ backgroundColor: '#e7e7e7' }}>
        <Stack justifyContent={'center'} sx={{ width: `${value}%`, height: '20px', backgroundColor: `${color}.main` }}>
          <Typography
            lineHeight={1}
            textAlign={'right'}
            mr={1}
            pl={0.6}
            fontWeight={600}
            fontSize={12}
            sx={{
              color: 'background.paper',
              marginRight: 1,
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5);',
            }}
          >{`${value}%`}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default memo(LinearProgressBar);
