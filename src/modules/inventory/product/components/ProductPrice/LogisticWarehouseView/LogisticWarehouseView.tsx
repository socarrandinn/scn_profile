import { memo } from 'react';
import { WarehouseCostConfigDto } from '../../../interfaces/IProductPriceDetails';
import { Button, tooltipClasses, useMediaQuery, useTheme } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { Tooltip } from 'modules/notification/components/NotificationList/tooltip.styled';
import { CommissionLogisticIcon } from 'modules/inventory/common/components/Icons/CommissionLogisticIcon';
import { ArrowOutward } from '@mui/icons-material';
import WarehouseList from './WarehouseList';
type LogisticWarehouseViewProps = {
  warehouses: WarehouseCostConfigDto[] | undefined;
};

const LogisticWarehouseView = ({ warehouses }: LogisticWarehouseViewProps) => {
  const { isOpen, onOpen, onClose } = useToggle(false);
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('sm'));

  if (!warehouses) return <></>;

  return (
    <Tooltip
      sx={{
        '.MuiTooltip-arrow': {
          color: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.background.paper),
        },
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: theme.shadows[1],
          padding: 0,
          borderRadius: '10px',
          minWidth: 450,
          top: -8,
          width: '100%',

          [theme.breakpoints.down('sm')]: {
            padding: 0,
            minWidth: '360px !important;',
            right: 8,
          },
        },
      }}
      PopperProps={{
        disablePortal: true,
      }}
      placement={isResp ? 'bottom' : 'bottom-start'}
      arrow
      onClose={onClose}
      open={isOpen}
      disableHoverListener
      disableTouchListener
      title={<WarehouseList warehouses={warehouses} />}
    >
      <Button variant='contained' size='small' onClick={onOpen}>
        <CommissionLogisticIcon sx={{ fontSize: 17 }} />
        <ArrowOutward fontSize='small' sx={{ transform: 'rotate(90deg)' }} />
      </Button>
    </Tooltip>
  );
};

export default memo(LogisticWarehouseView);
