import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { STATE, STATE_MAP } from 'modules/common/constants/status.references';
import useUpdateStatusProducts from 'modules/inventory/provider/supplier/hooks/UpdateStatusProducts';

type ProductStatusTableProps = {
  value: boolean;
  rowId: string;
};

const ProductStatusTable = ({ value, rowId }: ProductStatusTableProps) => {
  const { isLoading, updateState } = useUpdateStatusProducts(rowId);

  return (
    <StatusPicker
      options={STATE}
      name='active'
      size={'small'}
      value={STATE_MAP.get(value) as IStatus}
      isLoading={isLoading}
      onChange={() => {
        updateState(!value);
      }}
    />
  );
};
export default memo(ProductStatusTable);
