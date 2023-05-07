import { memo, useState } from 'react';
import { FlexBox, LoadingButton, SwitchField } from '@dfl/mui-react-common';
import SendIcon from '@mui/icons-material/Send';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const LoadingButtonsDemo = (props: DemoProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <SwitchField
        label={'Loading'}
        checked={loading}
        onChange={(evt, checked) => {
          setLoading(checked);
        }}
      />
      <LoadingButton variant={'contained'} loading={loading} loadingPosition='start' startIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={'contained'} loading={loading} loadingIndicator='Loading…'>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={'contained'} loading={loading} loadingPosition='start' startIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={'contained'} loading={loading} loadingPosition='end' endIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
      <LoadingButton variant={'contained'} loading={loading} loadingPosition='end' endIcon={<SendIcon />}>
        <span>Submit</span>
      </LoadingButton>
    </FlexBox>
  );
};

LoadingButtonsDemo.defaultProps = {
  code,
};

export default memo(withCodeSample(LoadingButtonsDemo));
