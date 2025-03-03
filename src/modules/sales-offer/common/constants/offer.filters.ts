import { Filter, FilterType } from '@dfl/mui-admin-layout';
import { OFFER_TYPE } from '../../offer/interfaces/offer.type.enum';

export const fromDateFilter: Filter = {
  filter: 'offerOrder:fields.fromDate',
  translate: true,
  type: FilterType.DATE,
  key: 'fromDate',
  field: 'fromDate',
};

export const toDateFilter: Filter = {
  filter: 'offerOrder:fields.toDate',
  translate: true,
  type: FilterType.DATE,
  key: 'toDate',
  field: 'toDate',
};

export const typeFilter: Filter = {
  filter: 'offerOrder:offerType',
  type: FilterType.FIXED_LIST,
  translate: true,
  key: 'type',
  field: 'type',

  options: Object.keys(OFFER_TYPE).map((key) => ({
    value: OFFER_TYPE[key as OFFER_TYPE],
    translate: true,
    label: `offerOrder:types.${key}`,
  })),
};

export const offerFilters = [typeFilter, fromDateFilter, toDateFilter];
