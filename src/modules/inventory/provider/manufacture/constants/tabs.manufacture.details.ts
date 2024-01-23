import { providersTabs } from '../../common/constants/tabs.details';

const path = '/inventory/settings/manufactures';
const tabs = providersTabs(path);

// Exclude tabs
export const manufacturerTabs = tabs.filter((tab) => {
  return tab.to !== '/conciliations';
});
