import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { useState } from 'react';
import { FlexBox, SearchField } from '@dfl/mui-react-common';
import { FormControlLabel, Switch } from '@mui/material';

export default function Demo() {

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
}

`,
  },
];
