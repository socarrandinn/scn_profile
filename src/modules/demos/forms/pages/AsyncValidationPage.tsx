import { memo } from 'react';
import { Container } from 'components/styled';
import DemoContainer from '../container/AsyncValidationDemoContainer';

const AsyncValidationPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <DemoContainer />
    </Container>
  );
};

export default memo(AsyncValidationPage);
