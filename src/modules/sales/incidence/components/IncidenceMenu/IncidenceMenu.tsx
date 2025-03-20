import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { slotProps } from './styles';
import { useToggle } from '@dfl/hook-utils';
import IncidenceCreateModal from '../../containers/IncidenceCreateModal';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { emptyIncidence } from '../../hooks/useIncidenceCreateForm';

const IncidenceMenu = () => {
  const { t } = useTranslation('incidence');
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { orderId } = useOrderContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return (
    <>
      <IconButton
        onClick={handleClick}
        size='small'
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={onOpen}
        slotProps={slotProps}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>{t('create')}</MenuItem>
      </Menu>
      <IncidenceCreateModal
        open={isOpen}
        onClose={onClose}
        title={t('newIncidence')}
        initValue={{ ...emptyIncidence, orderReference: orderId }}
      />
    </>
  );
};

export default memo(IncidenceMenu);
