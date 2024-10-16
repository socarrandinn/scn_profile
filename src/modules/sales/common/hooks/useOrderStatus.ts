import { useQuery } from '@tanstack/react-query';
import { ORDER_STATUSES_LIST_KEY } from 'modules/sales/settings/order-status/constants';
import { IOrderStatus, ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/interfaces';
import { OrderStatusService } from 'modules/sales/settings/order-status/services';
import { useTranslation } from 'react-i18next';
import { STATUS_ORDER_FLOW, SYSTEM_STATUS_TYPE } from '../constants/order-status.flow';

const filterUserStatus = (
  data: IOrderStatus[] | undefined,
  type: ORDER_STATUS_TYPE_ENUM,
  excludeTypes?: ORDER_STATUS_TYPE_ENUM[] | string[],
) => {
  if (!data || !data?.length || !type) return [];
  return data
    ?.filter((status) => {
      return STATUS_ORDER_FLOW[type]?.[status.type as string] && !SYSTEM_STATUS_TYPE[status.type as string];
    })
    ?.filter((status) => {
      if (!excludeTypes) return true;
      return !excludeTypes.includes(status.type as ORDER_STATUS_TYPE_ENUM);
    })
    ?.filter((status) => !status.isSystem);
};

export const useFindAllOrderStatus = () => {
  const { i18n } = useTranslation();
  return useQuery<IOrderStatus[]>([ORDER_STATUSES_LIST_KEY, i18n.language], OrderStatusService.searchAll, {
    staleTime: 60000,
  });
};

export const useFindOneOrderFromCache = (statusId?: any) => {
  const { data, isLoading, error } = useFindAllOrderStatus();
  const status = data?.find((item) => item._id === statusId);

  return {
    status,
    isLoading,
    error,
  };
};

export const useFindOrderStatusForUser = ({
  currentType,
  excludeTypes,
}: {
  currentType: ORDER_STATUS_TYPE_ENUM;
  excludeTypes?: ORDER_STATUS_TYPE_ENUM[] | string[];
}) => {
  const query = useFindAllOrderStatus();
  return {
    userStatus: filterUserStatus(query.data, currentType, excludeTypes),
    ...query,
  };
};
