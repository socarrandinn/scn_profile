import { memo } from 'react';
import { FacebookButton, FlexBox, GoogleButton } from '@dfl/mui-react-common';

const SocialButtonCodeDemo = () => {
  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <GoogleButton variant={'contained'}>Google</GoogleButton>
        <FacebookButton variant={'outlined'}>Facebook</FacebookButton>
    </FlexBox>
  );
};

export default memo(SocialButtonCodeDemo);
