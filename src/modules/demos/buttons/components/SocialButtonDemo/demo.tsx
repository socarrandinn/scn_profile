import { memo } from 'react';
import { FacebookButton, FlexBox, GoogleButton } from '@dfl/mui-react-common';

const SocialButtonCodeDemo = () => {
  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <GoogleButton>Google</GoogleButton>
        <FacebookButton>Facebook</FacebookButton>
    </FlexBox>
  );
};

export default memo(SocialButtonCodeDemo);
