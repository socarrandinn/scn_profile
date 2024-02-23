import { memo } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FlexBox } from '@dfl/mui-react-common';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => {
  return (
    <FlexBox width='100%' height='100%' flexDirection='column' justifyContent='center'>
      <FlexBox sx={{ minWidth: 35 }} justifyContent='space-between' alignItems='center'>
        <CloudUploadOutlinedIcon color='primary' />
        <Typography variant='body2' color='primary'>{`${Math.round(props.value)}%`}</Typography>
      </FlexBox>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
    </FlexBox>
  );
};
export default memo(LinearProgressWithLabel);
