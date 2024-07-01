import { DetailStackItemRecord } from '@dfl/mui-react-common';
import { renderProviderByTypeCell } from 'modules/inventory/provider/common/components/ProviderByTypeCell/ProviderByTypeCell';
import { renderProviderTypeStatus } from 'modules/inventory/provider/common/components/ProviderTypeStatus/ProviderTypeStatus';
import { renderStoreCellContainer } from 'modules/inventory/store/components/StoreCell/StoreCellContainer';

export const USER_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'phone',
    render: (user) => user?.phone,
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'firstName',
    render: (user) => user?.firstName,
    translate: true,
  },
  {
    label: 'lastName',
    render: (user) => user?.lastName,
    translate: true,
  },
];

export const USER_PROVIDER_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: 'common:provider:type',
    render: (provider) => provider?.type && renderProviderTypeStatus(provider?.type),
    hideEmpty: true,
    translate: true,
  },
  {
    label: 'common:provider:title',
    render: (provider) =>
      provider?.provider && renderProviderByTypeCell({ providerId: provider?.provider, type: provider?.type }),
    translate: true,
    hideEmpty: true,
  },
  {
    label: 'store',
    render: (provider) => provider?.store && renderStoreCellContainer(provider?.store),
    translate: true,
    hideEmpty: true,
  },
];
