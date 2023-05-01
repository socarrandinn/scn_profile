import { memo } from 'react';
import { Container } from 'components/styled';
import DemoContainer from '../container/ValidationDemoContainer';

const ValidationPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <DemoContainer />
    </Container>
  );
};

export default memo(ValidationPage);
