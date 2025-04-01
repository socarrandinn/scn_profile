import { providersTabs } from '../../common/constants/tabs.details';

const path = '/inventory/settings/suppliers';

export const supplierTabs = providersTabs(path)?.filter((route) => !route?.to.match(/\/distribution-centers/));
