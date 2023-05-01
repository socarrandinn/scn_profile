import { memo } from 'react';
import { Container } from 'components/styled';
import CenterPageLayoutDemoContainer from 'modules/demos/layouts/container/CenterPageLayoutDemoContainer';

const CenterPageLayoutPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <CenterPageLayoutDemoContainer />
    </Container>
  );
};

export default memo(CenterPageLayoutPage);
