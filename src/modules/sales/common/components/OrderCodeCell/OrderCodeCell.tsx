import { ReactLink } from '@dfl/react-security';
import { FolderCopyOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { IOrder } from '../../interfaces/IOrder';
import { IconButton } from '@dfl/mui-react-common';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
type OrderCodeCellProps = {
  link: string;
  value: string;
  isSubOrder?: boolean;
  record: IOrder;
};

const OrderCodeCell = ({ link, value, isSubOrder, record }: OrderCodeCellProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation('dispatch');
  const idDispatch = useMemo(() => [record?.dispatch, isSubOrder].every(Boolean), [record?.dispatch, isSubOrder]);

  const onDispatch = useCallback(() => {
    navigate(`/sales/dispatches/${record?.dispatch as string}`);
  }, [navigate, record?.dispatch]);

  return (
    <Stack maxWidth={300} alignItems={'center'} flexDirection={'row'} gap={1}>
      <ReactLink to={link} underline={'hover'}>
        <Typography noWrap lineHeight={1} title={value}>
          {value}
        </Typography>
      </ReactLink>

      {/* suborder by dispatch */}
      {idDispatch && (
        <IconButton color='primary' onClick={onDispatch} tooltip={t('goDispatch')}>
          <FolderCopyOutlined />
        </IconButton>
      )}
    </Stack>
  );
};

export default memo(OrderCodeCell);
