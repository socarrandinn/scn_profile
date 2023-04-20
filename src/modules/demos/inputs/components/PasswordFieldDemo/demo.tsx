import { memo, useState } from 'react';
import { FlexBox, PasswordField } from '@dfl/mui-react-common';
import { FormControlLabel, Switch } from '@mui/material';

const PasswordFieldDemo = () => {
  const [hideIcon, setHideIcon] = useState(false);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <FormControlLabel
            control={
                <Switch
                    checked={hideIcon}
                    onChange={(evt) => {
                      setHideIcon(evt.target.checked);
                    }}
                />
            }
            label='Hide Icon'
        />
        <PasswordField hideIcon={hideIcon} value={'admin123'}/>
    </FlexBox>
  );
};

export default memo(PasswordFieldDemo);
