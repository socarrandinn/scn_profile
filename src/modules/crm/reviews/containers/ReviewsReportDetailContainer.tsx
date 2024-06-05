import { memo } from 'react';
import { ReviewsReportDetailProvider } from '../contexts/ReviewsReportDetail';
import { ReviewHeaderDetails } from '../components/ReviewHeaderDetails';
import ReportByReviewList from '../pages/ReportByReviewList';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { ReviewGeneralData } from '../components/ReviewGeneralData';
import ReviewUserDetailData from '../components/ReviewUserDetail/ReviewUserDetailData';

const ReviewsReportDetailContainer = () => (
  <ReviewsReportDetailProvider>
    <ReviewHeaderDetails />
    <DetailLayout>
      <DetailContent ghost sx={{ order: { xs: 2, md: 1 } }}>
        <ReviewGeneralData />
        <ReportByReviewList />
      </DetailContent>
      <DetailSummary ghost width={{ md: 320, lg: 320, xl: 350 }} sx={{ order: { xs: 1, md: 2 } }}>
        <ReviewUserDetailData />
      </DetailSummary>
    </DetailLayout>
    {/*  <PageLayout m={0}></PageLayout> */}
  </ReviewsReportDetailProvider>
);

export default memo(ReviewsReportDetailContainer);
