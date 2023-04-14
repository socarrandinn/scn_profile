import { RoleRowActions } from 'modules/security/roles/components/RoleRowActions';
import { HeadCell } from '@dfl/mui-admin-layout';
import { OwnChipProps, renderTagList } from '@dfl/mui-react-common';
import PermissionItem from 'modules/security/roles/components/PermissionList/PermissionItem';
import { RoleCell } from 'modules/security/roles/components/RoleCell';
import { IRole } from 'modules/security/roles/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';

const Text = ({ text }: OwnChipProps) => {
  return <PermissionItem label={text} inline />;
};

export const roleNameColumn: HeadCell = {
  field: 'name',
  headerName: 'role:name',
  disablePadding: true,
  renderCell: (name: string, data: IRole) => <RoleCell role={data} />,
};

export const roleDescriptionColumn: HeadCell = {
  field: 'description',
  headerName: 'common:description',
};

export const rolePermissionsColumn: HeadCell = {
  field: 'permissions',
  headerName: 'role:permissions',
  disablePadding: true,
  renderCell: (permissions: string[]) => renderTagList(permissions, 3, Text),
};
export const roleActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (_, row: IRole) => <RoleRowActions {...row} />,
};

export const roleColumns: HeadCell[] = [
  roleNameColumn,
  roleDescriptionColumn,
  rolePermissionsColumn,
  createdATColumn,
  roleActionsColumn,
];
