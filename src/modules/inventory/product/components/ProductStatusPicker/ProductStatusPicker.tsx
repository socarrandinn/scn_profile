import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import useUpdateProductStatus from 'modules/inventory/product/hooks/useUpdateProductStatus';
import { PRODUCT_STATUS, PRODUCT_STATUS_MAP } from 'modules/inventory/product/constants/product_status';
import { Box } from '@mui/material';

type ProductStatusPickerProps = {
  value: boolean;
  productId: string;
  statusColor?: string;
  isLoading?: boolean;
  isError?: boolean;
  readOnly?: boolean;
  button?: boolean;
};

const ProductStatusPicker = ({ value, productId, readOnly = false, button = false }: ProductStatusPickerProps) => {
  const { t } = useTranslation('product');
  const { hasPermission } = useSecurity();
  const { updateStatus: updateVisible, isLoading } = useUpdateProductStatus(productId);
  console.log("loading", isLoading)
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
        readOnly={readOnly || !hasPermission('PRODUCT_STATUS')}
        options={PRODUCT_STATUS.map((option) => ({ ...option, title: t(option.title) }))}
        name='active'
        size={'small'}
        isLoading={isLoading}
        value={{
          ...(PRODUCT_STATUS_MAP.get(value) as IStatus),
          title: t(PRODUCT_STATUS_MAP.get(value)?.title as string),
        }}
        onChange={() => updateVisible(!value)}
      />
    </Box>
  );
};

export default memo(ProductStatusPicker);
