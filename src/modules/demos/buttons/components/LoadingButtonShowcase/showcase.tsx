import { memo, useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { FlexBox, LoadingButton } from '@dfl/mui-react-common';
import SendIcon from '@mui/icons-material/Send';

const CodeShowCase = () => {
  const [loading, setLoading] = useState(true);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            onChange={(evt) => {
              setLoading(evt.target.checked);
            }}
          />
        }
        label='Loading'
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

export default memo(CodeShowCase);
