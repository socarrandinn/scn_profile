import { memo } from 'react';
import { Container } from 'components/styled';
import TagListDemoContainer from '../container/TagListDemoContainer';

const CenterPageLayoutPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <TagListDemoContainer />
    </Container>
  );
};

export default memo(CenterPageLayoutPage);
