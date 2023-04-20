import { memo, useState } from 'react';
import { FlexBox, TextField } from '@dfl/mui-react-common';
import { FormControlLabel, Switch } from '@mui/material';

const OutlinedButtonCodeDemo = () => {
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
};

export default memo(OutlinedButtonCodeDemo);
