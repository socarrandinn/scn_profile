import { TestimonyRowActions } from 'modules/cms/testimony/components/TestimonyRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ITestimony } from 'modules/cms/testimony/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { TESTIMONY_PERMISSIONS } from 'modules/cms/testimony/constants/testimony.permissions';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { LongText } from 'modules/common/components/LongText';

export const testimonyNameColumn: HeadCell<ITestimony> = {
  field: 'personName',
  headerName: 'testimony:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: ITestimony) => (
    <AvatarNameCell hideLink image={data?.image} name={name} />
  ),
};

export const testimonyTitleColumn: HeadCell<ITestimony> = {
  field: 'title',
  headerName: 'testimony:fields.title',
};

export const testimonyCommentColumn: HeadCell<ITestimony> = {
  field: 'comment',
  headerName: 'testimony:fields.comment',
  renderCell: (comment: string) => <LongText lineClamp={3} text={comment} />
};

export const testimonyActionsColumn: HeadCell<ITestimony> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: TESTIMONY_PERMISSIONS.TESTIMONY_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: TestimonyRowActions,
};

export const testimonyColumns: Array<HeadCell<any>> = [
  testimonyNameColumn,
  testimonyTitleColumn,
  testimonyCommentColumn,
  createdATColumn,
  testimonyActionsColumn
];
