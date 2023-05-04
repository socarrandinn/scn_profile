import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { code } from './code';
import WithCodeSample from 'hocs/withCodeSample';
import { DemoProps } from '../../../../../types';
import { PhoneInput } from 'components/libs/PhoneInput';

const Demo = (props: DemoProps) => {
  return (
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <PhoneInput />
      </FlexBox>
  );
};

Demo.defaultProps = {
  code,
}

export default memo(WithCodeSample(Demo));
