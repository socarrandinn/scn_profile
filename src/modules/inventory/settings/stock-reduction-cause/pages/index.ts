import { lazy } from 'react';

const loadStockReductionCauseList = () => import('modules/inventory/settings/stock-reduction-cause/pages/StockReductionCauseList');
export const StockReductionCauseList = lazy(loadStockReductionCauseList);
