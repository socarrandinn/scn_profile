import { Paragraph } from '@dfl/mui-react-common';
import StackLayout from 'layouts/PageLayouts/StackLayout';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Paper } from '@mui/material';
type HelperTextProps = {
  text: string;
};

const HelperText = ({ text }: HelperTextProps) => {
  return (
    <Paper>
      <StackLayout direction='row'>
        <HelpOutlineOutlinedIcon fontSize='small' />
        <Paragraph>{text}</Paragraph>
      </StackLayout>
    </Paper>
  );
};

export default HelperText;
