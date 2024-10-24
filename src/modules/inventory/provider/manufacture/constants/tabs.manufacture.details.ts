import { providersTabs } from '../../common/constants/tabs.details';

const path = '/inventory/settings/manufactures';
const tabs = providersTabs(path);

// Exclude tabs
const excludedTabs = ['/settings', '/conciliations', '/inventory', '/distribution-centers',];
export const manufacturerTabs = tabs.filter((tab) => {
  return !excludedTabs.includes(tab.to);
});
