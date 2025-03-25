import { Box } from '@mui/material';
import IphoneSwitchField from './IphoneSwitchField';
import { FormSwitchFieldProps } from '@dfl/mui-react-common';

type Props = FormSwitchFieldProps & {
  bg?: string
};

const FormCustomSwitchField = ({ bg, ...props }: Props) => {
  return (
    <Box sx={{
      '.MuiFormControlLabel-root': {
        background: bg || '#F6F7F9 !important',
        marginLeft: '0px',
        padding: '9px 14px',
        borderRadius: '8px',
        flexDirection: 'row-reverse',
        gap: 2,
        width: '100%',
        justifyContent: 'space-between'
      }
    }} >
      <IphoneSwitchField {...props} />
    </Box>
  );
};

export default FormCustomSwitchField;
