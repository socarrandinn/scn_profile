import { Box } from '@mui/material';

interface IColorIndicator {
  color: string;
}

const ColorIndicator = ({ color }: IColorIndicator) => {
  return (
    <Box
      sx={{
        width: '45%',
        height: '5rem',
        backgroundColor: color,
        borderRadius: '10px',
      }}
    />
  );
};

export default ColorIndicator;
