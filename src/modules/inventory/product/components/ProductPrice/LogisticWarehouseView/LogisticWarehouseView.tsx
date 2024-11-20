import { memo, useState } from 'react';
import { IProductPriceDetails, WarehouseCostConfigDto } from '../../../interfaces/IProductPriceDetails';
import { Box, Button, ClickAwayListener, useMediaQuery, useTheme } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { CommissionLogisticIcon } from 'modules/inventory/common/components/Icons/CommissionLogisticIcon';
import { ArrowOutward } from '@mui/icons-material';
import WarehouseList from './WarehouseList';
import { LongText } from '@dfl/mui-react-common';
import { CustomTooltip } from './styled';
type LogisticWarehouseViewProps = {
  warehouses: WarehouseCostConfigDto[] | undefined;
  title?: string;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  price?: IProductPriceDetails;
};

const LogisticWarehouseView = ({
  warehouses,
  size = 'small',
  title,
  fullWidth = false,
  price,
}: LogisticWarehouseViewProps) => {
  const { isOpen, onOpen, onClose } = useToggle(false);
  const theme = useTheme();
  const isResp = useMediaQuery(theme.breakpoints.down('sm'));
  const [disableFocus, setDisableFocus] = useState(true);

  const handleClickAway = () => {
    setDisableFocus(false);
  };
  const handleOpen = () => {
    onOpen();
    setDisableFocus(true);
  };

  if (!warehouses) return <></>;

  return (
    <ClickAwayListener onClickAway={handleClickAway} mouseEvent='onMouseDown' touchEvent='onTouchStart'>
      <Box sx={fullWidth ? { width: '100%' } : {}}>
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
          title={<WarehouseList warehouses={warehouses} price={price} />}
        >
          <Button
            startIcon={<CommissionLogisticIcon fontSize='inherit' />}
            endIcon={
              <ArrowOutward
                fontSize='small'
                sx={{
                  transform: 'rotate(90deg)',
                  fontSize: 16,
                  position: 'absolute',
                  bottom: 4,
                  right: 4,
                }}
              />
            }
            variant='contained'
            size={size}
            onClick={handleOpen}
            fullWidth={fullWidth}
            sx={{ minWidth: 45, height: '100%', position: 'relative', textAlign: 'left' }}
          >
            <LongText lineClamp={1} text={title} />
          </Button>
        </CustomTooltip>
      </Box>
    </ClickAwayListener>
  );
};

export default memo(LogisticWarehouseView);
