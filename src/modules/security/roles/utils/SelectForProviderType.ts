import { Filter, HeadCell } from '@dfl/mui-admin-layout';
import { logisticsColumns, logisticsFilters } from 'modules/provider/logistics/constants';
import { manufactureColumns, manufactureFilters } from 'modules/provider/manufacture/constants';
import { ProductProvidersService } from '../services';
import { LogisticsService } from 'modules/provider/logistics/services';

export const selectFilterForProviderType = (providerType: string | undefined): Filter[] => {
  if (providerType) {
    switch (providerType) {
      case 'PRODUCT':
        return logisticsFilters;
      case 'CARRIER':
        return logisticsFilters;
      case 'MANUFACTURE':
        return manufactureFilters;
    }
  }
  return logisticsFilters;
};

export const selectColumnsForProviderType = (providerType: string | undefined): HeadCell[] => {
  if (providerType) {
    switch (providerType) {
      case 'PRODUCT':
        return logisticsColumns;
      case 'CARRIER':
        return logisticsColumns;
      case 'MANUFACTURE':
        return manufactureColumns;
    }
  }
  return logisticsColumns;
};

export const selectServiceForProviderType = (providerType: string | undefined) => {
  if (providerType) {
    switch (providerType) {
      case 'PRODUCT':
        return ProductProvidersService;
      case 'CARRIER':
        return ProductProvidersService;
      case 'MANUFACTURE':
        return ProductProvidersService;
    }
  }
  return LogisticsService;
};
