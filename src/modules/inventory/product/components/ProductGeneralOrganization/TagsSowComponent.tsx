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
    <Box display={'flex'} justifyContent={'space-between'}>
      {startIndex !== 0 && (
        <IconButton>
          <ChevronLeftIcon onClick={handlePrev} />
        </IconButton>
      )}
      {words.slice(startIndex, startIndex + 2).map((word, index) => (
        <Box gap={1} key={index}>
          {word}
        </Box>
      ))}

      {startIndex + 2 <= words.length && (
        <IconButton>
          <ChevronRightIcon onClick={handleNext} />
        </IconButton>
      )}
    </Box>
  );
};

export default KeywordsDisplay;
