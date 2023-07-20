import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import RoleListContainer from 'modules/security/roles/containers/RoleListContainer';
import { createdATFilter } from 'modules/common/constants/common.filters';
import RoleProviderListContainer from '../containers/RoleProviderListContainer';

const RoleList = () => {
  const { t } = useTranslation('role');

  return (
    // <PagePaperLayout title={t('roleList')}>
      <TableProvider id={'roles'} filters={[createdATFilter]}>
        <RoleProviderListContainer />
      </TableProvider>
    // </PagePaperLayout>
  );
};

export default RoleList;
