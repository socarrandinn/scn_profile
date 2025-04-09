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
        color='success'
        fullWidth
        onClick={handleClick}
        sx={{ borderRadius: 2, minHeight: '44px', mt: 2, boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px', '&:hover': { backgroundColor: 'primary.main' } }}
        size='large'
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
        {INCIDENCE_SOLUTIONS_VALUES?.map((solution: INCIDENCE_SOLUTION_ENUM) => (
          <MenuItem key={solution} value={solution}>
            {t(`solutions.${solution}`)}
          </MenuItem>
        ))}
      </StyledMenu>

    </>
  );
};

export default memo(IncidenceSolutionsMenu);
