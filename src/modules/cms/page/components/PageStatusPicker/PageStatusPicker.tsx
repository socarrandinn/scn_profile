import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { PAGE_STATUS, PAGE_STATUS_ENUM, PAGE_STATUS_MAP } from '../../constants/page-status';
import { useSecurity } from '@dfl/react-security';
import { PAGE_PERMISSIONS } from '../../constants';
import useUpdatePageStatus from '../../hooks/useUpdatePageStatus';

type Props = {
  value: PAGE_STATUS_ENUM;
  rowId: string;
  readOnly?: boolean;
  button?: boolean;
};

const PageStatusPicker = ({ value, rowId, button, readOnly }: Props) => {
  const { t } = useTranslation('page');
  const { hasPermission } = useSecurity();
  const { updateStatus, isLoading } = useUpdatePageStatus(rowId);

  return (
    <Box
      sx={{
        '.MuiButton-root': {
          borderRadius: button ? '5px !important' : '30px',
        },
        '.MuiChip-root': {
          padding: '14px 10px',
          borderRadius: '50px',
        },
        button: {
          minWidth: 100,
          minHeight: button ? 36 : 'auto',
          alignItems: 'center',
          justifyContent: 'space-around',
          'MuiButton-endIcon': {
            marginLeft: '2px !important',
          },
        },
      }}
    >
      <StatusPicker
        readOnly={readOnly || !hasPermission(PAGE_PERMISSIONS.PAGE_WRITE)}
        options={PAGE_STATUS?.map((option) => ({
          ...option,
          title: t(option.title),
        }))}
        name='status'
        size={'small'}
        value={{
          ...(PAGE_STATUS_MAP?.get(value) as IStatus),
          title: t(PAGE_STATUS_MAP?.get(value)?.title as string),
        }}
        isLoading={isLoading}
        onChange={(status: any) => {
          updateStatus(status?._id);
        }}
      />
    </Box>
  );
};
export default memo(PageStatusPicker);
