import { memo } from 'react';
import { Container } from 'components/styled';
import PaperPageLayoutDemoContainer from 'modules/demos/layouts/container/PaperPageLayoutDemoContainer';

const PaperPageLayoutPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <PaperPageLayoutDemoContainer />
    </Container>
  );
};

export default memo(PaperPageLayoutPage);
