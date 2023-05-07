import { memo, useState } from 'react';
import { FlexBox, SwitchField, TextField } from '@dfl/mui-react-common';
import { code } from './code';
import WithCodeSample from 'hocs/withCodeSample';
import { DemoProps } from '../../../../../types';

const Demo = (props: DemoProps) => {
  const [dark, setDark] = useState(false);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <SwitchField
        label='Dark Style'
        checked={dark}
        onChange={(evt, checked) => {
          setDark(checked);
        }}
      />
      <TextField dark={dark} label={'Title'} />
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(WithCodeSample(Demo));
