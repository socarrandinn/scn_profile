import { memo, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chip, Typography } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box } from '@mui/system';
import { FlexBox } from '@dfl/mui-react-common';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ClearIcon from '@mui/icons-material/Clear';
import { isEmpty } from 'lodash';

type AccordionDetailProps = {
  name: string;
  data: any;
};
const AccordionProductSection = ({ name, data }: AccordionDetailProps) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => {
    if (isEmpty(data)) setExpanded(false);
    else {
      setExpanded(!expanded);
    }
  };

  return (
    <Box mt={1} mb={2}>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
          <FlexBox justifyContent={'space-between'} minWidth={'100%'} maxWidth={'100%'}>
            <Typography>{name}</Typography>
            {!isEmpty(data) ? <ClearIcon sx={{ color: 'red' }} /> : <DoneAllIcon sx={{ color: 'green' }} />}
          </FlexBox>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((a: string) => (
            <Chip key={a} label={a} />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default memo(AccordionProductSection);
