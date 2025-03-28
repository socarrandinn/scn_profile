import { memo } from 'react';
import { IOrderStatusDetailCallback, ORDER_STATUS_SUMMARY_CASE } from '../interfaces';
import ErrorNoExist from '../components/ErrorContents/SuborderNoExist';

type OrderStatusContainerProps = {
  _case: ORDER_STATUS_SUMMARY_CASE;
  details?: IOrderStatusDetailCallback;
  successDataError?: any[];
  onClose: () => void;
};

const OrderStatusContainer = ({ _case, details, onClose, successDataError }: OrderStatusContainerProps) => {
  switch (_case) {
    case ORDER_STATUS_SUMMARY_CASE.statusNoExist:
      return (
        <ErrorNoExist
          items={details?.statusNoExist || []}
          onInitialClose={onClose}
          title='subOrder:statusImport.summary.error.statusNoExist'
        />
      );
    case ORDER_STATUS_SUMMARY_CASE.suborderNoExist:
      return (
        <ErrorNoExist
          items={details?.suborderNoExist || []}
          onInitialClose={onClose}
          title='subOrder:statusImport.summary.error.suborderNoExist'
        />
      );

    case ORDER_STATUS_SUMMARY_CASE.dataError:
      return <>dataError</>; // <OrderStatusDataError dataError={successDataError || []} onInitialClose={onClose} />;
    default:
      return <></>;
  }
};

export default memo(OrderStatusContainer);
