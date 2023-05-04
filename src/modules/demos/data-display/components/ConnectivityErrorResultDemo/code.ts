import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { FlexBox, NotConnectionResult } from '@dfl/mui-react-common';

const ConnectivityErrorResultDemo = () => {
  return (
    <FlexBox alignItems={'center'} justifyContent={'center'}>
      <NotConnectionResult vertical={false} imageWidth={120} imageHeight={120} />
    </FlexBox>
  );
};

export default ConnectivityErrorResultDemo;

`,
  },
];
