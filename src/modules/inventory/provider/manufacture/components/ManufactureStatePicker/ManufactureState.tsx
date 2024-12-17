import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import useUpdateStateManufacture from 'modules/inventory/provider/manufacture/hooks/useUpdateStateManufacture';
import { STATE, STATE_MAP } from 'modules/common/constants/status.references';
import { useTranslation } from 'react-i18next';
import { useSecurity } from '@dfl/react-security';
import { MANUFACTURE_PERMISSIONS } from '../../constants';

type ManufactureStatePickerProps = {
  value: boolean;
  rowId: string;
};

const ManufactureStatePicker = ({ value, rowId }: ManufactureStatePickerProps) => {
  const { t } = useTranslation('common');
  const { hasPermission } = useSecurity();
  const { isLoading, updateState } = useUpdateStateManufacture(rowId);

  return (
    <StatusPicker
      readOnly={!hasPermission(MANUFACTURE_PERMISSIONS.MANUFACTURE_WRITE)}
      options={STATE.map((option) => ({ ...option, title: t(option.title) }))}
      name='active'
      size={'small'}
      value={{
        ...(STATE_MAP.get(value) as IStatus),
        title: t(STATE_MAP.get(value)?.title as string),
      }}
      isLoading={isLoading}
      onChange={() => { updateState(!value); }}
    />
  );
};
export default memo(ManufactureStatePicker);
