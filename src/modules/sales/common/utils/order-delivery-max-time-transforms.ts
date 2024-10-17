import { addDays, startOfDay, subDays } from 'date-fns';
import { DELIVERY_MAX_TIME_ENUM } from '../constants/order-delivery.enum';
import { EmptyFilter, OperatorFilter, RangeFilter } from '@dofleini/query-builder';

type DeliveryTimeTypeProps = { field: string; value: DELIVERY_MAX_TIME_ENUM | DELIVERY_MAX_TIME_ENUM[] };

export const parseRangeFilter = ({ field, value }: DeliveryTimeTypeProps) => {
  switch (value) {
    case DELIVERY_MAX_TIME_ENUM.LATE:
      return new RangeFilter({
        field,
        isDate: true,
        to: subDays(startOfDay(new Date()), 2),
      });
    case DELIVERY_MAX_TIME_ENUM.RISK:
      return new RangeFilter({
        field,
        isDate: true,
        to: addDays(startOfDay(new Date()), 1),
      });
    case DELIVERY_MAX_TIME_ENUM.SEVERE:
      return new RangeFilter({
        field,
        isDate: true,
        to: subDays(startOfDay(new Date()), 4),
        from: subDays(startOfDay(new Date()), 2),
      });
    case DELIVERY_MAX_TIME_ENUM.TIME:
      return new RangeFilter({
        field,
        isDate: true,
        to: addDays(startOfDay(new Date()), 5),
        from: addDays(startOfDay(new Date()), 1),
      });
    case DELIVERY_MAX_TIME_ENUM.CRITICS:
      return new RangeFilter({
        field,
        isDate: true,
        to: subDays(startOfDay(new Date()), 5),
      });
    default:
      return new EmptyFilter();
  }
};

export const deliveryMaxTimeFilterTransform = ({ field, value }: DeliveryTimeTypeProps) => {
  if (Array.isArray(value)) {
    const filters = value.map((deliveryTime) => parseRangeFilter({ field, value: deliveryTime }));
    return new OperatorFilter({
      type: 'OR',
      filters,
    });
  }
  return parseRangeFilter({ field, value });
};

export const d = '';
