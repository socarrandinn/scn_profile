import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { useState } from 'react';
import { FlexBox, IconButton, SwitchField } from '@dfl/mui-react-common';
import { DoneOutlined } from '@mui/icons-material';

const LoadingButtonsDemo = () => {
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

export default LoadingButtonsDemo;

`,
  },
];
