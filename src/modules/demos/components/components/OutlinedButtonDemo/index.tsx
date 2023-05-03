import { memo } from 'react';
import { ButtonOutlined, FlexBox } from '@dfl/mui-react-common';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const OutlinedButtonCodeDemo = (props: DemoProps) => {
  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <ButtonOutlined>Button</ButtonOutlined>
    </FlexBox>
  );
};

OutlinedButtonCodeDemo.defaultProps = {
  code
}

export default memo(withCodeSample(OutlinedButtonCodeDemo));
