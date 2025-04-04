import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { PageSeo } from '../components/PageSeo';
import { ContentText } from '../components/ContentSection';
import PageDates from '../components/PageDates/PageDates';

const PageGeneralContainer = () => {
  return (
    <DetailLayout mb={4}>
      <DetailContent ghost>
        <ContentText />
      </DetailContent>

      <DetailSummary ghost width={{ md: 400, lg: 450, xl: 500 }}>
        <PageSeo />
        <PageDates />
      </DetailSummary>
    </DetailLayout>
  );
};

export default memo(PageGeneralContainer);
