import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import UserTableContainer, { UserTableContainerProps } from 'modules/security/users/containers/UserTableContainer';
import { userFilters } from 'modules/security/users/constants/user-filters';
import { userSystemColumns } from 'modules/security/users/constants/user.columns';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { useParams } from 'react-router';

const SystemUsers = ({ status }: UserTableContainerProps) => {
  const { id } = useParams();

  return (
    <TableProvider id={'user-tab-list'} filters={userFilters(SPACE_TYPE.ROOT)}>
      <UserTableContainer
        type={SPACE_TYPE.ROOT}
        status={status}
        columns={userSystemColumns}
        space={id}
      />
    </TableProvider>
  );
};

export default memo(SystemUsers);
