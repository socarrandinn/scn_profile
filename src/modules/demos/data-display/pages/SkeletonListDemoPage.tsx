import { memo } from 'react';
import { Container } from 'components/styled';
import SkeletonListDemoContainer from '../container/SkeletonListDemoContainer';

const SkeletonListDemoPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <SkeletonListDemoContainer />
    </Container>
  );
};

export default memo(SkeletonListDemoPage);
