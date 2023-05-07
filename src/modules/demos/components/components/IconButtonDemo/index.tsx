import { memo, useState } from 'react';
import { FlexBox, IconButton, SwitchField } from '@dfl/mui-react-common';
import withCodeSample from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';
import { DoneOutlined } from '@mui/icons-material';

const LoadingButtonsDemo = (props: DemoProps) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <IconButton tooltip={'Button tooltip'} disabled={disabled} color={'primary'}>
        <DoneOutlined />
      </IconButton>
      <SwitchField
        label={'Disabled'}
        checked={disabled}
        onChange={(evt, checked) => {
          setDisabled(checked);
        }}
      />
    </FlexBox>
  );
};

LoadingButtonsDemo.defaultProps = {
  code,
};

export default memo(withCodeSample(LoadingButtonsDemo));
