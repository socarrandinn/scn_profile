import { memo } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CurrencyValue, FlexBox } from '@dfl/mui-react-common';

type LinearProgressWithLabelProps = {
  countOrder: number;
  valueBar: number;
  titleName: string;
  isPrice?: boolean;
  color?: 'inherit' | 'info' | 'primary' | 'secondary' | 'error' | 'success' | 'warning';
};

const LinearProgressWithLabel = ({ countOrder, valueBar, titleName, isPrice, color }: LinearProgressWithLabelProps) => {
  return (
    <FlexBox width='100%' height='100%' flexDirection='column' justifyContent='center'>
      <FlexBox sx={{ minWidth: 35 }} justifyContent='space-between' alignItems='center'>
        <Typography variant='body2' sx={{ color: 'black' }}>
          {titleName}
        </Typography>
        <Typography variant='body2' className='mr-4' sx={{ color: 'black' }}>
          {isPrice ? <CurrencyValue defaultValue={0} value={countOrder} /> : countOrder}
        </Typography>
      </FlexBox>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' color={color || 'info'} value={valueBar} sx={{ height: '15px' }} />
      </Box>
    </FlexBox>
  );
};
export default memo(LinearProgressWithLabel);
