import { PriceType, WarehouseCostConfigDto } from 'modules/inventory/product/interfaces/IProductPriceDetails';

export const warehouseCostConfigData: WarehouseCostConfigDto[] = [
  {
    warehouse: 'W1',
    warehouseName: 'Central Warehouse',
    type: PriceType.FIXED,
    value: 1200.5,
  },
  {
    warehouse: 'W2',
    warehouseName: 'East Warehouse',
    type: PriceType.PERCENT,
    value: 15.0,
  },
  {
    warehouse: 'W7',
    warehouseName: 'Suburban Warehouse',
    type: PriceType.FIXED,
    value: -1350.75,
  },
  {
    warehouse: 'W8',
    warehouseName: 'Industrial Area Warehouse',
    type: PriceType.PERCENT,
    value: -12.0,
  },
  {
    warehouse: 'W9',
    warehouseName: 'Port Warehouse',
    type: PriceType.FIXED,
    value: 1250.0,
  },
  {
    warehouse: 'W10',
    warehouseName: 'Mountain Warehouse',
    type: PriceType.PERCENT,
    value: 8.25,
  },
];
