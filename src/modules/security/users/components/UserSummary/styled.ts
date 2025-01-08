import { styled } from '@mui/material/styles';
import { AccordionSummary } from '@mui/material';

export const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
  minHeight: '47px',
  flexDirection: 'row-reverse',
  '&.Mui-expanded': {
    minHeight: '47px',
    borderBottom: '1px solid rgba(223, 222, 237, 0.5)',
    mt: '13px',
  },
  '.MuiAccordionSummary-content': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0,
  },
}));
