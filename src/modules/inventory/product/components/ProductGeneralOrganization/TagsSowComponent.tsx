import { Chip, Table, TableRow } from '@mui/material';

type KeywordsDisplayProsp = {
  words: string[];
};
const KeywordsDisplay = ({ words }: KeywordsDisplayProsp) => {
  return (
    <Table>
      <TableRow >
        {words.map((word, index) => (
          <Chip key={index} label={word} />
        ))}
      </TableRow>
    </Table>
  );
};

export default KeywordsDisplay;
