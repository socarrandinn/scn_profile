import { TagsRowActions } from 'modules/inventory/settings/tags/components/TagsRowActions';
import { EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ITags } from 'modules/inventory/settings/tags/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { TAGS_PERMISSIONS } from 'modules/inventory/settings/tags/constants/tags.permissions';
import TagsListValueCell from '../components/TagsListValueCell/TagsListValueCell';
import { TagTypeNameCell } from '../components/TagTypeNameCell';
import TagRequiredProductStatusPicker from '../components/TagRequiredProductStatusPicker/TagRequiredProductStatusPicker';
import { TAG_STATUS_MAP } from './tags-status';
import { IStatus } from '@dfl/mui-react-common';
import TagsListProviderCell from '../components/TagsListValueCell/TagsListProviderCell';

export const tagsNameColumn: HeadCell<ITags> = {
  field: 'name',
  headerName: 'tags:fields.name',
  disablePadding: false,
  renderCell: (name: string, data?: ITags) => <EditLink entityId={data?._id as string}>{name}</EditLink>,
};

export const tagsDescriptionColumn: HeadCell<ITags> = {
  field: 'description',
  headerName: 'tags:fields.description',
};

export const tagsTypeColumn: HeadCell<ITags> = {
  field: 'type',
  headerName: 'tags:fields.type',
  renderCell: (type: string) => <TagTypeNameCell type={type} />,
};

export const tagsValueColumn: HeadCell<ITags> = {
  field: 'values',
  headerName: 'tags:fields.values',
  renderCell: (values: string[]) => <TagsListValueCell tags={values} />,
};

export const tagsIsRequiredForProvidersColumn: HeadCell<ITags> = {
  field: 'isRequiredForProviders',
  headerName: 'tags:fields.isRequiredForProviders',
  renderCell: (isRequiredForProviders: string[]) => <TagsListProviderCell tags={isRequiredForProviders} />,
};

export const tagsIsRequiredForProductsColumn: HeadCell<ITags> = {
  field: 'isRequiredForProducts',
  headerName: 'tags:fields.isRequiredForProducts',
  renderCell: (isRequiredForProducts, data) => (
    <TagRequiredProductStatusPicker
      value={TAG_STATUS_MAP.get(isRequiredForProducts) as IStatus}
      tagId={data?._id as string}
    />
  ),
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
  tagsTypeColumn,
  tagsValueColumn,
  tagsIsRequiredForProvidersColumn,
  tagsIsRequiredForProductsColumn,
  createdATColumn,
  tagsActionsColumn,
];
