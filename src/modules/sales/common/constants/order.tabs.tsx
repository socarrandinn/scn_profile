import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import {
  AssessmentOutlined,
  InfoOutlined,
  Inventory2Outlined,
  ManageSearchOutlined,
  ScreenSearchDesktopOutlined,
} from '@mui/icons-material';

export const orderGeneralTab = (path: string) => ({
  path: `${path}/:id/general`,
  to: '/general',
  label: 'tabs.general',
  render: () =>
    renderTabLabel({
      locale: 'order',
      label: 'tabs.general',
      Icon: InfoOutlined,
    }),
  translate: true,
});

export const orderProductTab = (path: string) => ({
  path: `${path}/:id/products`,
  to: '/products',
  label: 'tabs.products',
  render: () =>
    renderTabLabel({
      locale: 'order',
      label: 'tabs.products',
      Icon: Inventory2Outlined,
    }),
  translate: true,
});

export const orderActivityTab = (path: string) => ({
  path: `${path}/:id/activity`,
  to: '/activity',
  label: 'tabs.activity',
  render: () =>
    renderTabLabel({
      locale: 'order',
      label: 'tabs.activity',
      Icon: AssessmentOutlined,
    }),
  translate: true,
});

export const orderSEOTab = (path: string) => ({
  path: `${path}/:id/seo`,
  to: '/seo',
  label: 'tabs.seo',
  render: () =>
    renderTabLabel({
      locale: 'order',
      label: 'tabs.seo',
      Icon: ScreenSearchDesktopOutlined,
    }),
  translate: true,
});

export const orderHistoryChangeTab = (path: string) => ({
  path: `${path}/:id/history_change`,
  to: '/history_change',
  label: 'tabs.history_change',
  render: () =>
    renderTabLabel({
      locale: 'order',
      label: 'tabs.history_change',
      Icon: ManageSearchOutlined,
    }),
  translate: true,
});
