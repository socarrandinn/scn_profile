import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import RoleListContainer from 'modules/security/roles/containers/RoleListContainer';
import { createdATFilter } from 'modules/common/constants/common.filters';

const RoleList = () => {
  const { t } = useTranslation('role');

  return (
    <PagePaperLayout title={t('roleList')}>
      <TableProvider id={'roles'} filters={[createdATFilter]}>
        <RoleListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default RoleList;
