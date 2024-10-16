// type DeliveryTimeTypeProps = { field: string; value: DELIVERY_TIME_TYPE_ENUM | DELIVERY_TIME_TYPE_ENUM[] };
/*
export const parseRangeFilter = ({ field, value }: DeliveryTimeTypeProps) => {
  switch (value) {
    case DELIVERY_TIME_TYPE_ENUM.LATE:
      return new RangeFilter({
        field,
        isDate: true,
        to: subDays(startOfDay(new Date()), 2),
      });
    case DELIVERY_TIME_TYPE_ENUM.RISK:
      return new RangeFilter({
        field,
        isDate: true,
        to: addDays(startOfDay(new Date()), 1),
      });
    case DELIVERY_TIME_TYPE_ENUM.SEVERE:
      return new RangeFilter({
        field,
        isDate: true,
        to: subDays(startOfDay(new Date()), 4),
        from: subDays(startOfDay(new Date()), 2),
      });
    case DELIVERY_TIME_TYPE_ENUM.TIME:
      return new RangeFilter({
        field,
        isDate: true,
        to: addDays(startOfDay(new Date()), 5),
        from: addDays(startOfDay(new Date()), 1),
      });
    case DELIVERY_TIME_TYPE_ENUM.CRITICS:
      return new RangeFilter({
        field,
        isDate: true,
        to: subDays(startOfDay(new Date()), 5),
      });
    default:
      return new EmptyFilter();
  }
};

export const deliveryTimeFilterTransform = ({ field, value }: DeliveryTimeTypeProps) => {
  if (Array.isArray(value)) {
    const filters = value.map((deliveryTime) => parseRangeFilter({ field, value: deliveryTime }));
    return new OperatorFilter({
      type: 'OR',
      filters,
    });
  }
  return parseRangeFilter({ field, value });
}; */

export const d = '';
