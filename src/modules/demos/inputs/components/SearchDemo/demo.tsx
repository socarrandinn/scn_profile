import { memo, useState } from 'react';
import { FlexBox, SearchField } from '@dfl/mui-react-common';
import { FormControlLabel, Switch } from '@mui/material';

const OutlinedButtonCodeDemo = () => {
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
        <SearchField hideIcon={hideIcon} />
    </FlexBox>
  );
};

export default memo(OutlinedButtonCodeDemo);
