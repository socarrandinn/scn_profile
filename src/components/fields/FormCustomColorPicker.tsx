import { FormColorPicker, TextFieldProps } from '@dfl/mui-react-common';
import { Box } from '@mui/material';

type Props = Omit<TextFieldProps, 'value'> & {
  colors?: string[];
  bg?: string;
  Component?: any;
};
const FormCustomColorPicker = ({ bg, Component = FormColorPicker, ...props }: Props) => {
  return (
    <Box
      sx={{
        p: '8px 8px 16px 16px',
        borderRadius: 1,
        backgroundColor: bg || '#F6F7F9',
        '& .MuiTypography-root': {
          my: 1,
          fontSize: 14,
          '.DFL-FormLabel': {
            fontWeight: '400 !important',
          },
        },
        '.circle-picker': {
          width: '100% !important',
        },
      }}
    >
      <Component {...props} />
    </Box>
  );
};

export default FormCustomColorPicker;
