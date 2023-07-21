import PageTabPaperLayout from 'layouts/PageLayouts/PageTabPaperLayout';
import { IconButton } from '@mui/material';
import { Email, Send } from '@mui/icons-material';
import { GeneralActions } from 'layouts/portals';
import { RouteLoader } from '@dfl/react-security';
import tabActionRoutes from '../routes/tabActionRoutes';
import { rolesTabs } from '../constants/tabs.details';

function Actions() {
    return (
        <GeneralActions>
            <IconButton><Send /></IconButton>
            <IconButton><Email /></IconButton>
        </GeneralActions>
    );
}

export default function RoleTabContianer() {

  return (
    <PageTabPaperLayout prefix={'/security/roles'} tabs={rolesTabs}>
    <Actions />
    <RouteLoader
        routes={tabActionRoutes}
        notfoundRedirect={'/security/roles/system'}
      />
    </PageTabPaperLayout>
  );
}
