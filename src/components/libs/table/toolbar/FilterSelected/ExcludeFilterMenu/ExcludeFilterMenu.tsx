import { FilterList } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { memo, useState } from 'react';
import ExcluderFilterContent from './ExcluderFilterContent';
import { useTranslation } from 'react-i18next';

const ExcludeFilterMenu = () => {
  const { t } = useTranslation('common');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='exclude-filter-button'
        aria-controls={open ? 'exclude-filter-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='outlined'
        startIcon={<FilterList />}
      >
        {t('filters')}
      </Button>
      <Menu
        id='exclude-filter-menu'
        aria-labelledby='exclude-filter-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <ExcluderFilterContent />
      </Menu>
    </div>
  );
};

export default memo(ExcludeFilterMenu);
