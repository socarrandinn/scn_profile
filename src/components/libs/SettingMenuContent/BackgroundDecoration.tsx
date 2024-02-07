import { Box } from '@mui/material';
import React from 'react';

type BackgroundDecorationProps = {
  color: string;
};

const BackgroundDecoration = ({ color }: BackgroundDecorationProps) => {
  return (
    <>
      <Box position='absolute' top={-105} left={-212} width={292} height={292} bgcolor={color} borderRadius={'100%'} />
      <Box
        position='absolute'
        top={-127}
        left={-221}
        width={322}
        height={322}
        bgcolor={color}
        borderRadius={'100%'}
        sx={{ opacity: '25%' }}
      />
    </>
  );
};
export default BackgroundDecoration;
