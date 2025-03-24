import { omit } from 'lodash';
import { IOffer } from '../interfaces';
import { IExtendOffer } from '../interfaces/IExtendOffer';

export const onParseOffer = (offer: IExtendOffer): IOffer => {
  return omit(offer, [
    'rulesAmounts',
    'rulesUsages',
    'rulesQuantityOrders',
    'rulesAddress',
    'rulesProducts',
    'rulesAmountsCategory',
    'rulesOrderCountByTime',
    'rulesAmountSpentByTime',
    'rulesLongevity',
    'rulesSpecificClientList',
    'rulesClientUsage',
    'section'
  ]);
};
