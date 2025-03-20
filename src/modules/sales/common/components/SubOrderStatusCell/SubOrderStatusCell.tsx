import { memo, useMemo, useState } from 'react';
import { IOrder } from '../../interfaces/IOrder';
import { Box, Button, ClickAwayListener, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';
import { useToggle } from '@dfl/hook-utils';
import { CustomTooltip } from 'modules/inventory/product/components/ProductPrice/LogisticWarehouseView/styled';
import { SubOrderIcon } from '../icons';
import { Scrollbar } from '@dfl/mui-admin-layout';
import { ReactLink } from '@dfl/react-security';
import { useTranslation } from 'react-i18next';
import { OrderStatusCell } from '../OrderStatusCell';

type Props = {
  value: IOrder[];
};

const SubOrderStatusCell = ({ value }: Props) => {
  const { isOpen, onOpen, onClose } = useToggle(false);
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('sm'));
  const [disableFocus, setDisableFocus] = useState(true);

  const totalComplete = useMemo(() => {
    let total = 0;
    value?.forEach((item) => {
      if (item?.status?.type === ORDER_STATUS_TYPE_ENUM.COMPLETED) total += 1;
    });

    return `${total}/${value?.length}`;
  }, [value]);

  const handleClickAway = () => {
    setDisableFocus(false);
  };
  const handleOpen = () => {
    onOpen();
    setDisableFocus(true);
  };

  if (value?.length === 0) return <div>-</div>;

  // return <Chip label={totalComplete} sx={{ borderRadius: 1 }} />;

  return (
    <ClickAwayListener onClickAway={handleClickAway} mouseEvent='onMouseDown' touchEvent='onTouchStart'>
      <Box>
        <CustomTooltip
          PopperProps={{
            disablePortal: true,
          }}
          placement={isResp ? 'bottom' : 'bottom-start'}
          arrow
          onClose={onClose}
          open={isOpen}
          disableHoverListener
          disableTouchListener
          disableFocusListener={disableFocus}
          title={<SubOrderList subOrders={value} />}
        >
          <Button
            startIcon={<SubOrderIcon fontSize='inherit' />}
            variant='contained'
            size={'small'}
            onClick={handleOpen}
            sx={{ minWidth: 45, height: '100%', position: 'relative', textAlign: 'left' }}
          >
            {totalComplete}
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
            <OrderStatusCell value={subOrder?.status} record={subOrder} rowId={subOrder._id as string} />
          </Stack>
        ))}
      </Stack>
    </Scrollbar>
  );
};
