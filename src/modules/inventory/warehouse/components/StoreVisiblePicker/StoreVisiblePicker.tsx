import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import useStoreUpdateVisible from 'modules/inventory/warehouse/hooks/useStoreUpdateVisible';
import { useTranslation } from 'react-i18next';
import { useVisibilityStatus } from 'modules/inventory/common/hooks/useVisibilityStatus';
import { VISIBILITY_STATUS } from 'modules/inventory/common/constants/visibility-status';
import { useSecurity } from '@dfl/react-security';
import { WAREHOUSE_PERMISSIONS } from '../../constants';
import { Box } from '@mui/material';

type CategoryVisiblePickerProps = {
  value?: boolean;
  rowId: string;
  button?: boolean;
};

const StoreVisiblePicker = ({ value, rowId, button }: CategoryVisiblePickerProps) => {
  const { t } = useTranslation('warehouse');
  const { hasPermission } = useSecurity();
  const { updateVisible, isLoading, value: lastValue } = useStoreUpdateVisible(rowId);

  const _value = useVisibilityStatus(value as boolean, lastValue);

  return (
    <Box
      sx={{
        '.MuiButton-root': {
          borderRadius: button ? '5px !important' : undefined,
        },
        button: {
          minWidth: 90,
          minHeight: button ? 36.5 : 'auto',
          alignItems: 'center',
          justifyContent: 'space-around',
          'MuiButton-endIcon': {
            marginLeft: '2px !important',
          },
        },
      }}
    >
      <StatusPicker
        readOnly={!hasPermission(WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE)}
        options={VISIBILITY_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
        name='visible'
        value={_value}
        isLoading={isLoading}
        onChange={(status: IStatus) => {
          updateVisible(status?._id === 'true');
        }}
      />
    </Box>
  );
};
export default memo(StoreVisiblePicker);
