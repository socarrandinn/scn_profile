import { memo, SyntheticEvent, useState } from 'react';
import { FlexBox, LanguageSelector, SwitchField } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { DemoProps } from '../../../../../types';
import WithCodeSample from 'hocs/withCodeSample';
import { code } from './code';

const Demo = (props: DemoProps) => {
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
      <LanguageSelector mini={mini} icon={<TranslateIcon />} component={Typography} />
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(WithCodeSample(Demo));
