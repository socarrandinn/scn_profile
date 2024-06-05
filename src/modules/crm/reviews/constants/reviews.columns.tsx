import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IReviews } from '../interfaces';
import { REVIEWS_PERMISSIONS } from './reviews.permissions';
import { ReviewsRowActions } from '../components/ReviewsRowActions';
import { ReviewsStatusPicker } from '../components/ReviewsStatusPicker';
import { ADMIN_REVIEW_STATUS_MAP } from './reviews_status';
import { IStatus, LongText } from '@dfl/mui-react-common';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { ReviewReportCountCell } from '../components/ReviewReportCountCell';
import { Rating } from '@mui/material';
import { ProductRateRowActions } from 'modules/inventory/product/components/ProductRateRowActions';
import { createdATColumn } from 'modules/common/constants';

export const userNameColumn: HeadCell = {
  field: 'user',
  headerName: 'rate:fields.user',
  renderCell: (user: IUser, data: any) => (
    <AvatarNameCell
      link={`/security/users/${data?.owner as string}/general`}
      name={user?.fullName}
      variant={'rounded'}
      image={user.avatar}
    />
  ),
};
export const titleColumn: HeadCell = {
  field: 'title',
  headerName: 'rate:fields.title',
  renderCell: (title: string) => title,
};
export const commentColumn: HeadCell = {
  field: 'comment',
  headerName: 'rate:fields.comment',
  renderCell: (comment: string) => <LongText text={comment} lineClamp={2} />,
};

export const reportColumn: HeadCell = {
  field: 'report',
  headerName: 'rate:fields.report',
  renderCell: (report: { count: number }, data: IReviews) => (
    <ReviewReportCountCell count={report?.count} reportId={data?._id as string} />
  ),
  align: CellAlign.CENTER,
};
export const voteColumn: HeadCell = {
  field: 'vote',
  headerName: 'rate:fields.vote',
  renderCell: (vote: number) => (
    <Rating readOnly value={vote} size={'small'} name='star' sx={{ color: (theme) => theme.palette.primary.main }} />
  ),
};

export const rateActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'actions',
  disablePadding: true,
  component: ProductRateRowActions,
};

/* export const deleteCommentColumn: HeadCell = {
  field: 'deleted',
  headerName: 'rate:fields.deleted',
  renderCell: (deleted: boolean, data: any) => (
    <ProductRateDeleteStatusPicker rateId={data?._id} value={PRODUCT_RATE_STATUS_MAP.get(deleted) as IStatus} />
  ),
}; */

export const reviewsActionsColumn: HeadCell<IReviews> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: REVIEWS_PERMISSIONS.REVIEWS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: ReviewsRowActions,
};

export const reviewsStatusColumn: HeadCell = {
  field: 'status',
  headerName: 'common:status',
  renderCell: (status, data) => (
    <ReviewsStatusPicker value={ADMIN_REVIEW_STATUS_MAP.get(status) as IStatus} reviewId={data?._id} />
  ),
};

export const productReviewCommonColumns: HeadCell[] = [
  userNameColumn,
  titleColumn,
  commentColumn,
  reportColumn,
  reviewsStatusColumn,
  voteColumn,
  // deleteCommentColumn,
  createdATColumn,
];

export const reviewsColumns: Array<HeadCell<any>> = [...productReviewCommonColumns, reviewsActionsColumn];
