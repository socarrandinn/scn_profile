import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useVisibilityStatus } from 'modules/inventory/common/hooks/useVisibilityStatus';
import { VISIBILITY_STATUS } from 'modules/inventory/common/constants/visibility-status';
import { useSecurity } from '@dfl/react-security';
import { Box } from '@mui/material';
import { STOCK_PERMISSIONS } from '../constants/stock.permissions';

type Props = {
  value?: boolean;
  button?: boolean;
  lastValue?: boolean;
  updateVisible: (visible: boolean) => void;
  isLoading?: boolean;
};

const StockVisiblePickerContainer = ({ value, lastValue, updateVisible, isLoading, button }: Props) => {
  const { t } = useTranslation('warehouse');
  const { hasPermission } = useSecurity();
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
        readOnly={!hasPermission(STOCK_PERMISSIONS.WRITE)}
        options={VISIBILITY_STATUS?.map((option) => ({ ...option, title: t(option?.title) }))}
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
export default memo(StockVisiblePickerContainer);
