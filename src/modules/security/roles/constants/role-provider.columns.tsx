import { HeadCell } from '@dfl/mui-admin-layout';
import { OwnChipProps, renderTagList } from '@dfl/mui-react-common';
import PermissionItem from 'modules/security/roles/components/PermissionList/PermissionItem';
import { RoleCell } from 'modules/security/roles/components/RoleCell';
import { IRole, IRoleProvider } from 'modules/security/roles/interfaces';
import { createdATColumn } from 'modules/common/constants/common.columns';
import RoleProviderRowActions from 'modules/security/roles/components/RoleProviderRowActions/RoleProviderRowActions';
import RoleTypeCell from 'modules/security/roles/components/RoleTypeCell';

const Text = ({ text }: OwnChipProps) => {
  return <PermissionItem label={text} inline />;
};

export const roleProviderNameColumn: HeadCell = {
  field: 'name',
  headerName: 'role:name',
  renderCell: (name: string, data: IRole) => <RoleCell role={data} bgColor='warning' />,
};

export const roleProviderDescriptionColumn: HeadCell = {
  field: 'description',
  headerName: 'common:description',
};

export const roleProviderTypeColumn: HeadCell = {
  field: 'type',
  headerName: 'role:rolType',
  renderCell: (type: string) => <RoleTypeCell type={type} />,
};

export const roleProviderPermissionsColumn: HeadCell = {
  field: 'permissions',
  headerName: 'role:permissions',
  disablePadding: true,
  renderCell: (permissions: string[]) => renderTagList(permissions, 3, Text),
};
export const roleProviderActionsColumn: HeadCell = {
  field: 'actions',
  sortable: false,
  width: 100,
  headerName: 'common:actions',
  disablePadding: true,
  renderCell: (_, row: IRoleProvider) => <RoleProviderRowActions {...row} />,
};

export const roleProviderColumns: HeadCell[] = [
  roleProviderNameColumn,
  roleProviderDescriptionColumn,
  roleProviderTypeColumn,
  roleProviderPermissionsColumn,
  createdATColumn,
  roleProviderActionsColumn,
];
