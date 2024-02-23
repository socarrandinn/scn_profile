import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

type KeywordsDisplayProsp = {
  words: string[];
};
const KeywordsDisplay = ({ words }: KeywordsDisplayProsp) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 2, words.length - 2));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 2, 0));
  };

  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      {startIndex !== 0 && (
        <IconButton sx={{ width: 10, height: 13 }} color='primary'>
          <ChevronLeftIcon onClick={handlePrev} />
        </IconButton>
      )}
      {words.slice(startIndex, startIndex + 2).map((word, index) => (
        <Box display={'flex'} alignItems={'center'} gap={1} key={index}>
          {word}
        </Box>
      ))}

      {startIndex + 2 <= words.length && (
        <IconButton sx={{ width: 10, height: 13 }}>
          <ChevronRightIcon onClick={handleNext} color='primary'/>
        </IconButton>
      )}
    </Box>
  );
};

export default KeywordsDisplay;
