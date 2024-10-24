import { Paper } from '@mui/material';
import { memo } from 'react';
type HtmlTextProps = {
  text: string;
};

const HtmlText = ({ text }: HtmlTextProps) => {
  return (
    <Paper variant={'outlined'} sx={{ p: { xs: 1, md: '8px 16px' } }} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default memo(HtmlText);
