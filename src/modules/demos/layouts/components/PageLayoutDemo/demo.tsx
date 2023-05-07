import { memo } from 'react';
import PageLayout from 'layouts/PageLayouts/PageLayout';
import ContentMock from 'modules/demos/layouts/components/ContentMock';

const Demo = () => {
  return (
    <PageLayout>
      <ContentMock />
    </PageLayout>
  );
};

export default memo(Demo);
