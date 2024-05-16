import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import { reviewsFilters } from 'modules/crm/reviews/constants/reviews.filters';
import ReportByReviewListContainer from '../containers/ReportByReviewListContainer';

const ReportByReviewList = () => {
  const { t } = useTranslation('reviews');

  return (
    <PagePaperLayout title={t('reportList')}>
      <TableProvider id={'reports-review'} filters={reviewsFilters}>
        <ReportByReviewListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ReportByReviewList);
