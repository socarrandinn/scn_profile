import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { useFindSystemRolesTable } from 'modules/security/roles/hooks/useFindRoles';
import { TableProvider } from '@dfl/mui-admin-layout';
import RoleListContainer from 'modules/security/roles/containers/RoleListContainer';
import { roleColumns } from 'modules/security/roles/constants';

const RoleList = () => {
  const { t } = useTranslation('role');
  const { isLoading, error, data } = useFindSystemRolesTable();

  return (
    <PagePaperLayout title={t('roleList')}>
      <TableProvider id={'roles'}>
        <RoleListContainer columns={roleColumns} isLoading={isLoading} error={error} data={data} select />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default RoleList;
