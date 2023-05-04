import { memo } from 'react';
import { Container } from 'components/styled';
import SkeletonFormDemoContainer from '../container/SkeletonsDemoContainer';

const SkeletonsDemoPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <SkeletonFormDemoContainer />
    </Container>
  );
};

export default memo(SkeletonsDemoPage);
