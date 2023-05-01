import { memo } from 'react';
import { Container } from 'components/styled';
import SidebarDemoContainer from 'modules/demos/layouts/container/SidebarDemoContainer';

const SidebarPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <SidebarDemoContainer />
    </Container>
  );
};

export default memo(SidebarPage);
