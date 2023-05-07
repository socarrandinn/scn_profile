import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { FlexBox } from '@dfl/mui-react-common';
import { PhoneInput } from 'components/libs/PhoneInput';

const Demo = () => {
  return (
      <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
        <PhoneInput />
      </FlexBox>
  );
};

export default Demo;

`,
  },
];
