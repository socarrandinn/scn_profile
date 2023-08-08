import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { STATE, STATE_MAP } from 'modules/common/constants/status.references';
import useUpdateStatusLogistics from 'modules/store/provider/logistics/hooks/UpdateStatusLogistics';

type LogisticStatusTableProps = {
  value: boolean;
  rowId: string;
};

const LogisticStatusTable = ({ value, rowId }: LogisticStatusTableProps) => {
  const { isLoading, updateState } = useUpdateStatusLogistics(rowId);

  return (
    <StatusPicker
      options={STATE}
      name='active'
      size={'small'}
      value={STATE_MAP.get(value) as IStatus}
      isLoading={isLoading}
      onChange={() => { updateState(!value); }}
    />
  );
};
export default memo(LogisticStatusTable);
