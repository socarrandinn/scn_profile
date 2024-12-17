import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import ReviewsListContainer from 'modules/crm/reviews/containers/ReviewsListContainer';
import { reviewsFilters } from 'modules/crm/reviews/constants/reviews.filters';
import { reviewsTabs } from '../constants/reviews-tabs';

const ReviewsList = () => {
  const { t } = useTranslation('reviews');

  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'reviews'} filters={reviewsFilters}>
        <FilterViewProvider views={reviewsTabs}>
          <ReviewsListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ReviewsList);
