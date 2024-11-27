import { TagsRowActions } from 'modules/inventory/settings/tags/components/TagsRowActions';
import { CellAlign, EditLink, HeadCell } from '@dfl/mui-admin-layout';
import { ITags } from 'modules/inventory/settings/tags/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import { TAGS_PERMISSIONS } from 'modules/inventory/settings/tags/constants/tags.permissions';
import TagsListValueCell from '../components/TagsListValueCell/TagsListValueCell';
import { TagTypeNameCell } from '../components/TagTypeNameCell';
import TagRequiredProductStatusPicker from '../components/TagRequiredProductStatusPicker/TagRequiredProductStatusPicker';
import { TAG_RULES_ENUM, TAG_STATUS_MAP } from './tags-status';
import { IStatus } from '@dfl/mui-react-common';

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

export const tagRuleProductColumn: HeadCell<ITags> = {
  field: 'rules.product.required',
  headerName: 'tags:fields.rules.product',
  align: CellAlign.CENTER,
  renderCell: (isRequiredForProducts, data) => (
    <TagRequiredProductStatusPicker
      value={TAG_STATUS_MAP.get(isRequiredForProducts) as IStatus}
      tagId={data?._id as string}
      rule={TAG_RULES_ENUM.PRODUCT}
      readOnly
    />
  ),
};
export const tagRuleSupplierColumn: HeadCell<ITags> = {
  field: 'rules.supplier.required',
  headerName: 'tags:fields.rules.supplier',
  align: CellAlign.CENTER,
  renderCell: (isRequiredForProducts, data) => (
    <TagRequiredProductStatusPicker
      value={TAG_STATUS_MAP.get(isRequiredForProducts) as IStatus}
      tagId={data?._id as string}
      rule={TAG_RULES_ENUM.SUPPLIER}
      readOnly
    />
  ),
};
export const tagRuleLogisticColumn: HeadCell<ITags> = {
  field: 'rules.logistic.required',
  headerName: 'tags:fields.rules.logistic',
  align: CellAlign.CENTER,
  renderCell: (isRequiredForProducts, data) => (
    <TagRequiredProductStatusPicker
      value={TAG_STATUS_MAP.get(isRequiredForProducts) as IStatus}
      tagId={data?._id as string}
      rule={TAG_RULES_ENUM.LOGISTIC}
      readOnly
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
  tagRuleProductColumn,
  tagRuleSupplierColumn,
  tagRuleLogisticColumn,
  createdATColumn,
  tagsActionsColumn,
];
