import { memo } from 'react';
import { Container } from 'components/styled';
import OthersDemosContainer from '../container/OthersDemosContainer';

const OthersDemosPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <OthersDemosContainer />
    </Container>
  );
};

export default memo(OthersDemosPage);
