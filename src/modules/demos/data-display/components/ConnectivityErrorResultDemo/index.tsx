import { memo } from 'react';
import { FlexBox, NotConnectionResult } from '@dfl/mui-react-common';
import { DemoProps } from '../../../../../types';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';

const ConnectivityErrorResultDemo = (props: DemoProps) => {
  return (
    <FlexBox alignItems={'center'} justifyContent={'center'}>
      <NotConnectionResult vertical={false} imageWidth={120} imageHeight={120} />
    </FlexBox>
  );
};

ConnectivityErrorResultDemo.defaultProps = {
  code,
};

export default memo(withCodeSample(ConnectivityErrorResultDemo));
