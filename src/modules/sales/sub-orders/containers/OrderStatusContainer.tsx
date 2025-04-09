import { memo } from 'react';
import { IOrderStatusSummary, ORDER_STATUS_SUMMARY_CASE } from '../interfaces';
import ErrorNoExist from '../components/ErrorContents/SuborderNoExist';
import { OrderStatusDataError } from '../components/OrderStatusDataError';
import { OrderWithErrors } from '../components/OrderWithErrors';

type OrderStatusContainerProps = {
  _case: ORDER_STATUS_SUMMARY_CASE;
  summary?: IOrderStatusSummary;
  successDataError?: any[];
  onClose: () => void;
};

const OrderStatusContainer = ({ _case, summary, onClose, successDataError }: OrderStatusContainerProps) => {
  switch (_case) {
    case ORDER_STATUS_SUMMARY_CASE.statusNoExist:
      return (
        <ErrorNoExist
          items={summary?.details?.statusNoExist || []}
          onInitialClose={onClose}
          title='subOrder:statusImport.summary.error.statusNoExist'
          label='subOrder:emptyData.noStatus'
        />
      );
    case ORDER_STATUS_SUMMARY_CASE.suborderNoExist:
      return (
        <ErrorNoExist
          items={summary?.details?.suborderNoExist || []}
          onInitialClose={onClose}
          title='subOrder:statusImport.summary.error.suborderNoExist'
          label='subOrder:emptyData.noCode'
        />
      );

    case ORDER_STATUS_SUMMARY_CASE.dataError:
      return <OrderStatusDataError dataError={successDataError || []} onInitialClose={onClose} />;

    case ORDER_STATUS_SUMMARY_CASE.suborderWithErrors:
      return <OrderWithErrors dataError={summary?.summary?.suborderWithErrors || []} onInitialClose={onClose} />;

    default:
      return <></>;
  }
};

export default memo(OrderStatusContainer);
