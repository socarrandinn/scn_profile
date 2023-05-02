import { memo } from 'react';
import { Container } from 'components/styled';
import SkeletonFormDemoContainer from '../container/SkeletonFormDemoContainer';

const SkeletonFormDemoPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <SkeletonFormDemoContainer />
    </Container>
  );
};

export default memo(SkeletonFormDemoPage);
