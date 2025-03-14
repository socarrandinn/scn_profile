import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { slotProps } from './styles';
import { useToggle } from '@dfl/hook-utils';
import IncidenceCreateModal from '../../containers/IncidenceCreateModal';

const IncidenceMenu = () => {
  const { t } = useTranslation('incidence');
  const { isOpen, onClose, onOpen } = useToggle(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
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
      <IncidenceCreateModal open={isOpen} onClose={onClose} title={t('newIncidence')} />
    </>
  );
}

export default memo(IncidenceMenu);
