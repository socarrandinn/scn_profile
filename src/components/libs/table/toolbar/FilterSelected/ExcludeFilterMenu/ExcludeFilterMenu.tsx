import { FilterList } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { memo, useMemo, useState } from 'react';
import ExcluderFilterContent from './ExcluderFilterContent';
import { useTranslation } from 'react-i18next';
import { Badge } from '@mui/material';
import { useFilterStore } from '../context/filtersStore';
import { useSearchParams } from 'react-router-dom';

const ExcludeFilterMenu = () => {
  const { t } = useTranslation('common');
  const _filters = useFilterStore((state) => state.filters);
  const [searchParams] = useSearchParams();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const _countExclude = useMemo(
    () => _filters.filter((f) => searchParams.get(f.key) !== null).length,
    [_filters, searchParams],
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Badge badgeContent={_countExclude} color='primary'>
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
      </Badge>
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
