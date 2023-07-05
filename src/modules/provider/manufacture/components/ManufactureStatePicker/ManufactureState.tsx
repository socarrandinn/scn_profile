import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { MANUFACTURE_STATE, MANUFACTURE_STATE_MAP } from 'modules/provider/manufacture/constants/Manufacture.state';
import useUpdateStateManufacture from 'modules/provider/manufacture/hooks/useUpdateStateManufacture';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
};

const ManufactureStatePicker = ({ value, rowId }: CategoryVisiblePickerProps) => {
  const { isLoading, updateState } = useUpdateStateManufacture(rowId);

  return (
        <StatusPicker
            options={MANUFACTURE_STATE}
            name='active'
            size={'small'}
            value={MANUFACTURE_STATE_MAP.get(value) as IStatus}
            isLoading={isLoading}
            onChange={() => { updateState(!value); }}
        />
  );
};
export default memo(ManufactureStatePicker);
