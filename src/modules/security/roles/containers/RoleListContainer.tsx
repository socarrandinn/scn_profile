import { memo } from 'react';
import { HeadCell, Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { RoleListToolbar } from 'modules/security/roles/components/RoleListToolbar';
import RoleEditModal from 'modules/security/roles/containers/RoleEditModal';
import AddPermissionToRoleModalWithData from 'modules/security/roles/containers/AddPermissionToRoleModalWithData';
import { RoleRowPermissionProvider } from 'modules/security/roles/contexts/RoleRowPermissionContext';
import { IRole } from '../interfaces';
import { SearchResponseType } from '@dfl/react-security';

type RoleListContainerProps = {
  data: SearchResponseType<IRole[]>;
  columns: HeadCell[];
  select?: boolean;
  isLoading?: boolean;
  error?: any;
};

const RoleListContainer = ({ columns, data, isLoading, error, select }: RoleListContainerProps) => {
  return (
    <Box>
      <RoleRowPermissionProvider>
        <RoleListToolbar />
        <Table
          columns={columns}
          data={data?.data}
          total={data?.total}
          isLoading={isLoading}
          error={error}
          select={select}
        />
        <RoleEditModal />
        <AddPermissionToRoleModalWithData />
      </RoleRowPermissionProvider>
    </Box>
  );
};

export default memo(RoleListContainer);
