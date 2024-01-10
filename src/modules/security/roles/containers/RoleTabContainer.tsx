import PageTabPaperLayout from 'layouts/PageLayouts/PageTabPaperLayout';
import { RouteLoader } from '@dfl/react-security';
import tabActionRoutes from '../routes/tabActionRoutes';
import { rolesTabs } from '../constants/tabs.details';

export default function RoleTabContianer () {
  return (
    <PageTabPaperLayout prefix={'/security/roles'} tabs={rolesTabs}>
    <RouteLoader
        routes={tabActionRoutes}
        notfoundRedirect={'/security/roles/system'}
      />
    </PageTabPaperLayout>
  );
}
