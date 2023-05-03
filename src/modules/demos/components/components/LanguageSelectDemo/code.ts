import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import React, { SyntheticEvent, useState } from 'react';
import { Typography } from '@mui/material';
import { FlexBox, LanguageSelector, SwitchField } from '@dfl/mui-react-common';
import TranslateIcon from '@mui/icons-material/Translate';

const Demo = () => {
  const [mini, setMini] = useState(false);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <SwitchField
        label={'Mini Mode'}
        value={mini}
        onChange={(evt: SyntheticEvent<Element, Event>, checked) => {
          setMini(checked);
        }}
      />
      <LanguageSelector mini={mini} icon={<TranslateIcon/>} component={Typography}/>
    </FlexBox>
  );
};

export default Demo;

`,
  },
];
