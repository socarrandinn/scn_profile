import { CellAlign, CellType, HeadCell } from '@dfl/mui-admin-layout';
import { Rating } from '@mui/material';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { createdATColumn } from 'modules/common/constants';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { ProductRateRowActions } from '../components/ProductRateRowActions';
import { ProductRateDeleteStatusPicker } from '../components/ProductRateDeleteStatusPicker';
import { PRODUCT_RATE_STATUS_MAP } from './product-rate-status';
import { IStatus } from '@dfl/mui-react-common';

export const userNameColumn: HeadCell = {
  field: 'user',
  headerName: 'rate:fields.user',
  renderCell: (user: IUser) => (
    <AvatarNameCell
      link={`/security/users/${user?._id as string}/general`}
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
  renderCell: (comment: string) => comment,
};

export const reportColumn: HeadCell = {
  field: 'report',
  headerName: 'rate:fields.report',
  renderCell: (report: { count: number }) => report?.count,
  type: CellType.NUMBER,
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

export const deleteCommentColumn: HeadCell = {
  field: 'deleted',
  headerName: 'rate:fields.deleted',
  renderCell: (deleted: boolean, data: any) => (
    <ProductRateDeleteStatusPicker rateId={data?._id} value={PRODUCT_RATE_STATUS_MAP.get(deleted) as IStatus} />
  ),
};

export const productReviewColumns: HeadCell[] = [
  userNameColumn,
  titleColumn,
  commentColumn,
  reportColumn,
  voteColumn,
  deleteCommentColumn,
  createdATColumn,
  rateActionsColumn,
];
