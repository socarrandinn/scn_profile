import { memo } from 'react';
import { FacebookButton, FlexBox, GoogleButton } from '@dfl/mui-react-common';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const SocialButtonCodeDemo = (props: DemoProps) => {
  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <GoogleButton variant={'contained'}>Google</GoogleButton>
      <FacebookButton variant={'outlined'}>Facebook</FacebookButton>
    </FlexBox>
  );
};

SocialButtonCodeDemo.defaultProps = {
  code,
};

export default memo(withCodeSample(SocialButtonCodeDemo));
