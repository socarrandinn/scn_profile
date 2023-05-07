import { memo } from 'react';
import ContentMock from 'modules/demos/layouts/components/ContentMock';
import ScrollPaperLayout from 'layouts/PageLayouts/ScrollPaperLayout';

const Demo = () => {
  return (
    <ScrollPaperLayout restMaxHeight={500}>
      <ContentMock count={30} />
    </ScrollPaperLayout>
  );
};

export default memo(Demo);
