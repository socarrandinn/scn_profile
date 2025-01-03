import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { CATEGORY_VISIBILITY } from 'modules/inventory/settings/category/constants';
import useDistributionCenterUpdateVisible from '../../hooks/useDistributionCenterUpdateVisible';
import { useTranslation } from 'react-i18next';
import { useVisibilityStatus } from 'modules/inventory/common/hooks/useVisibilityStatus';
import { DISTRIBUTION_CENTER_PERMISSIONS } from '../../constants';
import { useSecurity } from '@dfl/react-security';
import { Box } from '@mui/material';

type CategoryVisiblePickerProps = {
  value: boolean;
  rowId: string;
  button?: boolean;
};

const DistributionCenterVisiblePicker = ({ value, rowId, button }: CategoryVisiblePickerProps) => {
  const { t } = useTranslation('category');
  const { hasPermission } = useSecurity();
  const { updateVisible, isLoading, value: lastValue } = useDistributionCenterUpdateVisible(rowId);
  const _value = useVisibilityStatus(value, lastValue);

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
        readOnly={!hasPermission(DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_WRITE)}
        options={CATEGORY_VISIBILITY.map((option) => ({ ...option, title: t(option.title) }))}
        name='visible'
        value={_value}
        size={'small'}
        isLoading={isLoading}
        onChange={(status: IStatus) => {
          updateVisible(status?._id === 'true');
        }}
      />
    </Box>
  );
};
export default memo(DistributionCenterVisiblePicker);
