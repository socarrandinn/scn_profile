import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { memo, useState } from 'react';
import { ButtonOutlined, CheckBoxField, FlexBox } from '@dfl/mui-react-common';

const Demo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <ButtonOutlined
        onClick={() => {
          setChecked(true);
        }}
      >
        Select
      </ButtonOutlined>
      <ButtonOutlined
        onClick={() => {
          setChecked(false);
        }}
      >
        Unselect
      </ButtonOutlined>
      <CheckBoxField
        label={'Required*'}
        checked={checked}
        onChange={(event) => {
          setChecked(event?.target?.checked);
        }}
      />
    </FlexBox>
  );
};

export default Demo;

`,
  },
];
