import { memo, useState } from 'react';
import { FlexBox, ToggleButtonGroup } from '@dfl/mui-react-common';
import { ToggleButton } from '@mui/lab';
import { withCodeSample } from 'hocs/withCodeSample';
import { code } from './code';
import { DemoProps } from '../../../../../types';

const sizes = ['small', 'medium', 'large'];

const Demo = (props: DemoProps) => {
  const [size, setSize] = useState(sizes[1]);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <ToggleButtonGroup
        color={'success'}
        value={size}
        exclusive
        onChange={(event: any) => {
          setSize(event?.target?.value);
        }}
      >
        {sizes.map((currentSize: any) => (
          <ToggleButton key={currentSize} value={currentSize}>
            {currentSize}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </FlexBox>
  );
};

Demo.defaultProps = {
  code,
};

export default memo(withCodeSample(Demo));
