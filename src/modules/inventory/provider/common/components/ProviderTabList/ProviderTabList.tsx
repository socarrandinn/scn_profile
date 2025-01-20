import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import UserTableContainer, { UserTableContainerProps } from 'modules/security/users/containers/UserTableContainer';
import { userFilters } from 'modules/security/users/constants/user-filters';
import { userProviderColumns } from 'modules/security/users/constants/user.columns';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { useParams } from 'react-router';

const ProviderTabList = ({ status }: UserTableContainerProps) => {
  const { id } = useParams();

  return (
    <TableProvider id={'user-tab-provider'} filters={userFilters(SPACE_TYPE.PROVIDER)}>
      <UserTableContainer
        type={SPACE_TYPE.PROVIDER}
        status={status}
        columns={userProviderColumns}
        providerId={id}
      />
    </TableProvider>
  );
};

export default memo(ProviderTabList);
