import { memo } from 'react';
import { Container } from 'components/styled';
import LongTextDemoContainer from '../container/LongTextDemoContainer';

const LongTextDemoPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <LongTextDemoContainer />
    </Container>
  );
};

export default memo(LongTextDemoPage);
