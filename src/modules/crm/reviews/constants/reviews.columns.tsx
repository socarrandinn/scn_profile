import { HeadCell } from '@dfl/mui-admin-layout';
import { IReviews } from '../interfaces';
import { REVIEWS_PERMISSIONS } from './reviews.permissions';
import { ReviewsRowActions } from '../components/ReviewsRowActions';
import { productReviewCommonColumns } from 'modules/inventory/product/constants/product-rate.columns';

export const reviewsActionsColumn: HeadCell<IReviews> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: REVIEWS_PERMISSIONS.REVIEWS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ReviewsRowActions,
};

export const reviewsColumns: Array<HeadCell<any>> = [...productReviewCommonColumns, reviewsActionsColumn];
