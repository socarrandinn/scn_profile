import { memo, useState } from 'react';
import { ButtonOutlined, CheckBoxField, FlexBox } from '@dfl/mui-react-common';
import { withCodeSample } from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const Demo = (props: DemoProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <ButtonOutlined
        onClick={() => {
          setChecked(true);
        }}
      >
        Select
      </ButtonOutlined>
      <ButtonOutlined
        onClick={() => {
          setChecked(false);
        }}
      >
        Unselect
      </ButtonOutlined>
      <CheckBoxField
        label={'Required*'}
        checked={checked}
        onChange={(event) => {
          setChecked(event?.target?.checked);
        }}
      />
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
