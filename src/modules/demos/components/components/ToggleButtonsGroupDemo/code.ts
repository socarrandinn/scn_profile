import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { useState } from 'react';
import { FlexBox, ToggleButtonGroup } from '@dfl/mui-react-common';
import { ToggleButton } from '@mui/lab';

const sizes = ['small', 'medium', 'large'];

const Demo = () => {
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

export default Demo;

`,
  },
];
