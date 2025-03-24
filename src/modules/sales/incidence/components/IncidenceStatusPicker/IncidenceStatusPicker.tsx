import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { INCIDENCE_STATUS, INCIDENCE_STATUS_ENUM, INCIDENCE_STATUS_MAP } from '../../constants/incidence-status';
import useUpdateIncidenceStatus from '../../hooks/useUpdateIncidenceStatus';
import { useSecurity } from '@dfl/react-security';
import { INCIDENCE_PERMISSIONS } from '../../constants';

type Props = {
  value: INCIDENCE_STATUS_ENUM;
  rowId?: string;
  readOnly?: boolean;
  button?: boolean;
};

const IncidenceStatusPicker = ({ value, rowId, button, readOnly }: Props) => {
  const { t } = useTranslation('incidence');
  const { hasPermission } = useSecurity();
  const { updateStatus, isLoading } = useUpdateIncidenceStatus(rowId as string);

  return (
    <Box
      sx={{
        '.MuiButton-root': {
          borderRadius: button ? '5px !important' : '30px',
        },
        '.MuiChip-root': {
          padding: '15px 15px',
        },
        button: {
          minWidth: 110,
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
        readOnly={readOnly || !hasPermission(INCIDENCE_PERMISSIONS.INCIDENCE_WRITE)}
        options={INCIDENCE_STATUS?.map((option) => ({
          ...option,
          title: t(option.title),
        }))}
        name='status'
        size={'small'}
        value={{
          ...(INCIDENCE_STATUS_MAP?.get(value) as IStatus),
          title: t(INCIDENCE_STATUS_MAP?.get(value)?.title as string),
        }}
        isLoading={isLoading}
        onChange={(status: any) => {
          updateStatus(status?._id);
        }}
      />
    </Box>
  );
};
export default memo(IncidenceStatusPicker);
