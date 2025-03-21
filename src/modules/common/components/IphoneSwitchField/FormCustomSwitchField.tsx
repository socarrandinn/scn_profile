import { Box } from '@mui/material';
import IphoneSwitchField from './IphoneSwitchField';
import { FormSwitchFieldProps } from '@dfl/mui-react-common';

const FormCustomSwitchField = ({ ...props }: FormSwitchFieldProps) => {
  return (
    <Box sx={{
      '.MuiFormControlLabel-root': {
        background: '#F6F7F9 !important',
        marginLeft: '0px',
        padding: '12px 14px',
        borderRadius: '8px',
        flexDirection: 'row-reverse',
        width: '100%',
        justifyContent: 'space-between'
      }
    }} >
      <IphoneSwitchField {...props} />
    </Box>
  );
};

export default FormCustomSwitchField;
