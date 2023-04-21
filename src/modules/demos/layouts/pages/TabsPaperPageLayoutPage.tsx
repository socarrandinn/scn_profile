import { memo } from 'react';
import { Container } from 'modules/demos/buttons/components/styled';
import TabsPaperPageLayoutDemoContainer from 'modules/demos/layouts/container/TabsPaperPageLayoutDemoContainer';

const PaperPageLayoutPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <TabsPaperPageLayoutDemoContainer />
    </Container>
  );
};

export default memo(PaperPageLayoutPage);
