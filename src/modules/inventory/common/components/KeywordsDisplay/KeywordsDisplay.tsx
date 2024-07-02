import { Box, Chip } from '@mui/material';

type KeywordsDisplayProsp = {
  words: string[];
};
const KeywordsDisplay = ({ words }: KeywordsDisplayProsp) => {
  return (
    <Box>
      {words.map((word, index) => (
        <Chip key={index} label={word} sx={{ marginLeft: 1, marginBottom: 1 }} />
      ))}
    </Box>
  );
};

export default KeywordsDisplay;
