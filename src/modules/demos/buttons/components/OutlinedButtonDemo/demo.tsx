import { memo } from 'react';
import { ButtonOutlined, FlexBox } from '@dfl/mui-react-common';

const OutlinedButtonCodeDemo = () => {
  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <ButtonOutlined>Button</ButtonOutlined>
    </FlexBox>
  );
};

export default memo(OutlinedButtonCodeDemo);
