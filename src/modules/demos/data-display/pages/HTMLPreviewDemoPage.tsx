import { memo } from 'react';
import { Container } from 'components/styled';
import HtmlPreviewDemoContainer from '../container/HtmlPreviewDemoContainer';

const HTMLPreviewDemoPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <HtmlPreviewDemoContainer />
    </Container>
  );
};

export default memo(HTMLPreviewDemoPage);
