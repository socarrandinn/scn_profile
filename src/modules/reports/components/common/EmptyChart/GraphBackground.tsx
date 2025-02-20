import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const GraphBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `radial-gradient(circle, ${grey[400]} 1px, transparent 1px)`,

        backgroundSize: '20px 20px',
        backgroundRepeat: 'repeat',
      }}
    />
  );
};

export default GraphBackground;
