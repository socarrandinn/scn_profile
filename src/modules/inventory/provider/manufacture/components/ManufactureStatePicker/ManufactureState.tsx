import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import useUpdateStateManufacture from 'modules/inventory/provider/manufacture/hooks/useUpdateStateManufacture';
import { STATE, STATE_MAP } from 'modules/common/constants/status.references';
import { useTranslation } from 'react-i18next';
import { useSecurity } from '@dfl/react-security';
import { MANUFACTURE_PERMISSIONS } from '../../constants';
import { Box } from '@mui/material';

type ManufactureStatePickerProps = {
  value: boolean;
  rowId: string;
  button?: boolean;
};

const ManufactureStatePicker = ({ value, rowId, button }: ManufactureStatePickerProps) => {
  const { t } = useTranslation('common');
  const { hasPermission } = useSecurity();
  const { isLoading, updateState } = useUpdateStateManufacture(rowId);

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
        readOnly={!hasPermission(MANUFACTURE_PERMISSIONS.MANUFACTURE_WRITE)}
        options={STATE.map((option) => ({ ...option, title: t(option.title) }))}
        name='active'
        size={'small'}
        value={{
          ...(STATE_MAP.get(value) as IStatus),
          title: t(STATE_MAP.get(value)?.title as string),
        }}
        isLoading={isLoading}
        onChange={() => {
          updateState(!value);
        }}
      />
    </Box>
  );
};
export default memo(ManufactureStatePicker);
