import { memo } from 'react';
import { Container } from 'components/styled';
import DemoContainer from '../container/ConditionalValidationDemoContainer';

const ConditionalValidationPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <DemoContainer />
    </Container>
  );
};

export default memo(ConditionalValidationPage);
