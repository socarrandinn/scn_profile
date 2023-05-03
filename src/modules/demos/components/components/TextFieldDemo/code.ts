import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { useState } from 'react';
import { FlexBox, TextField } from '@dfl/mui-react-common';
import { FormControlLabel, Switch } from '@mui/material';

export default function Demo() {

  const [dark, setDark] = useState(false);
  
  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <FormControlLabel
            control={
                <Switch
                    checked={dark}
                    onChange={(evt) => {
                      setDark(evt.target.checked);
                    }}
                />
            }
            label='Dark Style'
        />
        <TextField dark={dark} label={'Title'}/>
    </FlexBox>
  );
}

`,
  },
];
