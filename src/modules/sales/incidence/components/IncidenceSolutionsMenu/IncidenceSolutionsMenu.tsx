import { ArrowOutward, } from '@mui/icons-material';
import { Button, MenuItem } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledMenu } from '../IncidenceActions/styled';
import { SolutionsIcon } from 'modules/common/components/icons/SolutionsIcon';
import { INCIDENCE_SOLUTION_ENUM, INCIDENCE_SOLUTIONS_VALUES } from '../../constants/incidence-action.enum';

const IncidenceSolutionsMenu = () => {
  const { t } = useTranslation('incidence');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button
        variant='contained'
        fullWidth
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'incidence-solutions-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        startIcon={<SolutionsIcon />}
        endIcon={<ArrowOutward />}
      >
        {t('addSolution')}
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        id="solutions-menu"
        open={open}
        onClose={handleClose}
      >
        {INCIDENCE_SOLUTIONS_VALUES?.map((type: INCIDENCE_SOLUTION_ENUM) => (
          <MenuItem key={type} value={type}>
            {t(`solutions.${type}`)}
          </MenuItem>
        ))}
      </StyledMenu>

    </>
  );
};

export default memo(IncidenceSolutionsMenu);
