import { PageRowActions } from 'modules/cms/page/components/PageRowActions';
import { CellAlign, HeadCell } from '@dfl/mui-admin-layout';
import { IPage } from 'modules/cms/page/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { PAGE_PERMISSIONS } from 'modules/cms/page/constants/page.permissions';
import { PageStatusPicker } from '../components/PageStatusPicker';
import { PAGE_STATUS_ENUM } from './page-status';
import { LongText } from '@dfl/mui-react-common';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';

export const pageNameColumn: HeadCell<IPage> = {
  field: 'seo.name',
  headerName: 'page:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: IPage) => (
    <AvatarNameCell link={`/cms/pages/${data?._id as string}/general`} name={name} hideImage />
  ),
};

export const pageDescriptionColumn: HeadCell<IPage> = {
  field: 'seo.description',
  headerName: 'page:fields.description',
  renderCell: (description: string) => <LongText text={description} lineClamp={2} />
};

export const pageSlugColumn: HeadCell<IPage> = {
  field: 'slug',
  headerName: 'page:fields.url',
};

export const pageStatusColumn: HeadCell<IPage> = {
  field: 'status',
  headerName: 'page:fields.status',
  align: CellAlign.CENTER,
  renderCell: (status: PAGE_STATUS_ENUM, data: IPage) => (
    <PageStatusPicker value={status} rowId={data?._id as string} readOnly />
  )
};

export const pageActionsColumn: HeadCell<IPage> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: PAGE_PERMISSIONS.PAGE_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: PageRowActions,
};

export const pageColumns: Array<HeadCell<any>> = [
  pageNameColumn,
  pageSlugColumn,
  pageStatusColumn,
  pageDescriptionColumn,
  createdATColumn,
  pageActionsColumn
];
