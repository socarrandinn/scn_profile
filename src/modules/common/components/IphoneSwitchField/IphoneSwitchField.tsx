import { FormSwitchField, FormSwitchFieldProps } from '@dfl/mui-react-common';
import { memo } from 'react';

const IphoneSwitchField = ({ ...props }: FormSwitchFieldProps) => {
  return (
    <FormSwitchField
      {...props}
      sx={{
        '.MuiSwitch-root': {
          width: 36,
          height: 18,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: '3px',
            top: '-1px',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#72B62F',
                opacity: 1,
              },
            },
            '&.Mui-disabled': {
              color: '#BABABA',
              '& + .MuiSwitch-track': {
                backgroundColor: '#D9D9DC',
                opacity: 1,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 14,
            height: 14,
            padding: 0,
          },
          '& .MuiSwitch-track': {
            borderRadius: 22 / 2,
            backgroundColor: '#D9D9DC',
            opacity: 1,
          },
          flexDirection: 'column',
        },
      }}
    />
  );
};

export default memo(IphoneSwitchField);
