import { memo } from 'react';
import { FlexBox, ErrorResult } from '@dfl/mui-react-common';
import { DemoProps } from '../../../../../types';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';

const ErrorResultDemo = (props: DemoProps) => {
  return (
    <FlexBox alignItems={'center'} justifyContent={'center'}>
      <ErrorResult
        title={'Access Denied'}
        subtext={'You do not have access to access the requested information.'}
        suggest={'Notes'}
        suggest1={'If you think that this in incorrect.'}
        suggest2={'Please contact the system administrator.'}
        vertical={false}
        imageWidth={120}
        imageHeight={120}
      />
    </FlexBox>
  );
};

ErrorResultDemo.defaultProps = {
  code,
};

export default memo(withCodeSample(ErrorResultDemo));
