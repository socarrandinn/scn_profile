import { TagsRowActions } from 'modules/inventory/settings/tags/components/TagsRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ITags } from 'modules/inventory/settings/tags/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { TAGS_PERMISSIONS } from 'modules/inventory/settings/tags/constants/tags.permissions';

export const tagsNameColumn: HeadCell<ITags> = {
  field: 'name',
  headerName: 'tags:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: ITags) => (<EditLink entityId={data?._id as string}>{name}</EditLink>),
};

export const tagsDescriptionColumn: HeadCell<ITags> = {
  field: 'description',
  headerName: 'tags:fields.description',
};

export const tagsActionsColumn: HeadCell<ITags> = {
  field: 'actions',
  sortable: false,
  width: 100,
  permissions: TAGS_PERMISSIONS.TAGS_WRITE,
  headerName: 'common:actions',
  disablePadding: true,
  component: TagsRowActions,
};

export const tagsColumns: Array<HeadCell<any>> = [
  tagsNameColumn,
  tagsDescriptionColumn,
  createdATColumn,
  tagsActionsColumn
];
