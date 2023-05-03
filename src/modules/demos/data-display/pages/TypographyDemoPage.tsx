import { memo } from 'react';
import { Container } from 'components/styled';
import TypographyDemoContainer from '../container/TypographyDemoContainer';

const TypographyDemoPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <TypographyDemoContainer />
    </Container>
  );
};

export default memo(TypographyDemoPage);
