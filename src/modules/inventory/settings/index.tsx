import { RouteLoader } from '@dfl/react-security';
import { StoreSettingMenuPage } from 'modules/inventory/settings/setting-menu';
import CategoryModule from 'modules/inventory/settings/category';
import ManufactureModule from 'modules/inventory/provider/manufacture';
import StoreAreaModule from 'modules/inventory/settings/store-area';
import SupplierProviderModule from 'modules/inventory/provider/supplier';
import LogisticsProviderModule from 'modules/inventory/provider/logistics';
import TagsModule from 'modules/inventory/settings/tags';
import StockReductionCauseModule from 'modules/inventory/settings/stock-reduction-cause';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

const routes = {
  settings: {
    path: '/',
    component: StoreSettingMenuPage,
  },
  ManufactureAreaList: {
    path: '/manufactures/*',
    component: ManufactureModule,
  },
  SupplierAreaList: {
    path: '/suppliers/*',
    component: SupplierProviderModule,
  },
  LogisticList: {
    path: '/logistics/*',
    component: LogisticsProviderModule,
  },
  StoreAreaList: {
    path: '/store-areas/*',
    component: StoreAreaModule,
  },
  CategoryList: {
    path: '/categories/*',
    component: CategoryModule,
  },
  TagsList: {
    path: '/tags/*',
    component: TagsModule,
  },
  StockReductionCauseList: {
    path: '/stock-reduction-causes/*',
    component: StockReductionCauseModule,
  },
};

const SettingsModule = () => {
  return (
    <Suspense fallback={<ContentLoader className='min-h-[85vh]' />}>
      <RouteLoader routes={routes} notfoundRedirect={'/inventory/settings'} memory />
    </Suspense>
  );
};

export default SettingsModule;
