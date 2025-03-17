import { Box, Typography } from '@mui/material';

const TourContent = ({ props }: any) => {
  const { content } = props;

  return (
    <Box sx={{ p: 2, width: '100%', height: '100%' }}>
      <Typography variant='body1' gutterBottom>
        {content || ''}
      </Typography>
    </Box>
  );
};

export default TourContent;
