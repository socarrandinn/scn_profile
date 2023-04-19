import { memo } from 'react';
import { Container } from 'modules/demos/buttons/components/styled';
import PageLayoutDemoContainer from 'modules/demos/layouts/container/PageLayoutDemoContainer';

const PageLayoutPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <PageLayoutDemoContainer />
    </Container>
  );
};

export default memo(PageLayoutPage);
