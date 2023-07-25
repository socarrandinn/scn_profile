import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import useUpdateStateManufacture from 'modules/provider/manufacture/hooks/useUpdateStateManufacture';
import { STATE, STATE_MAP } from 'modules/common/constants/status.references';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const ManufactureStatePicker = ({ value, rowId }: CategoryVisiblePickerProps) => {
  const { isLoading, updateState } = useUpdateStateManufacture(rowId);

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
export default memo(ManufactureStatePicker);
