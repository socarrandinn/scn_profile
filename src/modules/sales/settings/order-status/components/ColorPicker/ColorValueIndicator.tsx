import { Typography, Box } from '@mui/material';

interface IColorValueIndicator {
  redValue: number;
  blueValue: number;
  greenValue: number;
  hexValue: string;
}

const ColorValueIndicator = ({ redValue, blueValue, greenValue, hexValue }: IColorValueIndicator) => {
  return (
    <Box sx={{ width: '45%' }}>
      <Typography component='p' marginRight='1rem'>
        R: {redValue}
      </Typography>
      <Typography component='p' marginRight='1rem'>
        G: {greenValue}
      </Typography>
      <Typography component='p' marginRight='1rem'>
        B: {blueValue}
      </Typography>
      <Typography component='p' marginRight='1rem'>
        hex: {hexValue}
      </Typography>
    </Box>
  );
};

export default ColorValueIndicator;
