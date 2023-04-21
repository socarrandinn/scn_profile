import { memo } from 'react';
import { Container } from 'modules/demos/buttons/components/styled';
import ScrollPageLayoutDemoContainer from 'modules/demos/layouts/container/ScrollPageLayoutDemoContainer';

const CenterPageLayoutPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <ScrollPageLayoutDemoContainer />
    </Container>
  );
};

export default memo(CenterPageLayoutPage);
