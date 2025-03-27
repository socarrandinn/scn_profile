import { memo, useMemo } from 'react';
import { IOrder } from '../../interfaces/IOrder';
import { Box, Button, ClickAwayListener, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';
import { useToggle } from '@dfl/hook-utils';
import { CustomTooltip } from 'modules/inventory/product/components/ProductPrice/LogisticWarehouseView/styled';
import { SubOrderIcon } from '../icons';
import { Scrollbar } from '@dfl/mui-admin-layout';
import { ReactLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { OrderStatusPicker } from '../OrderStatusPicker';

type Props = {
  value: IOrder[];
};

const SubOrderStatusCell = ({ value }: Props) => {
  const { isOpen, onOpen, onClose } = useToggle(false);
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('sm'));

  const { label, isComplete } = useMemo(() => {
    let total = 0;
    value?.forEach((item) => {
      if (item?.status?.type === ORDER_STATUS_TYPE_ENUM.COMPLETED) total += 1;
    });

    return {
      label: `${total}/${value?.length}`,
      isComplete: value?.length === total,
    };
  }, [value]);

  if (value?.length === 0) return <div>-</div>;

  return (
    <ClickAwayListener onClickAway={onClose} mouseEvent='onMouseDown' touchEvent='onTouchStart'>
      <Box>
        <CustomTooltip
          placement={isResp ? 'bottom' : 'bottom-start'}
          arrow
          open={isOpen}
          title={<SubOrderList subOrders={value} />}
        >
          <Button
            startIcon={<SubOrderIcon fontSize='inherit' />}
            variant='contained'
            size={'small'}
            onClick={onOpen}
            sx={{
              minWidth: 45,
              height: '100%',
              position: 'relative',
              textAlign: 'left',
              backgroundColor: isComplete ? 'primary.main' : '#5EC91277',
            }}
          >
            {label}
          </Button>
        </CustomTooltip>
      </Box>
    </ClickAwayListener>
  );
};

export default memo(SubOrderStatusCell);

const SubOrderList = ({ subOrders }: { subOrders: IOrder[] }) => {
  const { t } = useTranslation('subOrder');

  return (
    <Scrollbar
      sx={{
        maxHeight: 300,
        '& .simplebar-content': {
          maxHeight: 300,
        },
      }}
    >
      <Stack flex={1} divider={<Divider flexItem orientation='horizontal' />}>
        {subOrders?.map((subOrder: IOrder, index) => (
          <Stack
            sx={{
              p: 2,
            }}
            key={subOrder?._id}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography fontWeight={600} lineHeight={1}>
              {index + 1}- {t('name')}:
              <ReactLink sx={{ ml: 1 }} to={`/sales/orders/${subOrder._id as string}`}>
                {subOrder.code}
              </ReactLink>
            </Typography>
            <OrderStatusPicker value={subOrder?.status} record={subOrder} rowId={subOrder._id as string} readOnly/>
          </Stack>
        ))}
      </Stack>
    </Scrollbar>
  );
};
