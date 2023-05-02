import { memo } from 'react';
import { Container } from 'components/styled';
import ProcessTimeLineDemoContainer from '../container/ProcessTimeLineDemoContainer';

const ProcessTimeLineDemoPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <ProcessTimeLineDemoContainer />
    </Container>
  );
};

export default memo(ProcessTimeLineDemoPage);
