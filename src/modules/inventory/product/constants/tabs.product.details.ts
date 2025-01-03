import { TabRouteType } from '@dfl/react-security';
import { renderTabLabel } from 'modules/common/components/TabsWithSections/TabLabel/TabLabel';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Public } from '@mui/icons-material';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import { PRODUCT_PERMISSIONS } from './product.permissions';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { CLIENTS_PERMISSIONS } from 'modules/crm/clients/constants';

const path = '/inventory/products';

export const productDetailsTabs: TabRouteType[] = [
  {
    path: `${path}/:id/general`,
    to: '/general',
    label: 'tabs.general',
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.general',
        Icon: InfoOutlinedIcon,
      }),
    translate: true,
  },
  {
    path: `${path}/:id/inventory`,
    to: '/inventory',
    label: 'tabs.inventory',
    permissions: [STOCK_PERMISSIONS.VIEW],
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.inventory',
        Icon: InventoryOutlinedIcon,
      }),
  },
  {
    path: `${path}/:id/price`,
    to: '/price',
    label: 'tabs.price',
    translate: true,
    permissions: PRODUCT_PERMISSIONS.PRODUCT_PRICE,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.price',
        Icon: MonetizationOnOutlinedIcon,
      }),
  },

  {
    path: `${path}/:id/related-product`,
    to: '/related-product',
    label: 'tabs.relatedProduct',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.relatedProduct',
        Icon: ScreenSearchDesktopOutlinedIcon,
      }),
  },
  {
    path: `${path}/:id/seo`,
    to: '/seo',
    label: 'tabs.seo',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.seo',
        Icon: Public,
      }),
  },
  {
    path: `${path}/:id/rate`,
    to: '/rate',
    label: 'tabs.rate',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'product',
        label: 'section.rate.title',
        Icon: StarBorderOutlinedIcon,
      }),
    permissions: [CLIENTS_PERMISSIONS.REVIEW],
  },
  {
    path: `${path}/:id/inventory-report`,
    to: '/inventory-report',
    label: 'tabs.inventoryReport',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'provider',
        label: 'tabs.inventoryReport',
        Icon: MonetizationOnOutlinedIcon,
        disabled: true,
      }),
    disabled: true,
    // permissions: [REPORTS_PERMISSIONS.PRODUCT_ANALYTICS],
  },
  {
    path: `${path}/:id/history_change`,
    to: '/history_change',
    label: 'tabs.activity',
    translate: true,
    render: () =>
      renderTabLabel({
        locale: 'product',
        label: 'section.historyChange.title',
        Icon: ManageSearchOutlinedIcon,
      }),
    permissions: ['ADMIN'],
  },
];
