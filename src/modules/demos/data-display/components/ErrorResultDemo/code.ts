import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import { FlexBox, ErrorResult } from '@dfl/mui-react-common';

const ErrorResultDemo = () => {
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

export default ErrorResultDemo;

`,
  },
];
