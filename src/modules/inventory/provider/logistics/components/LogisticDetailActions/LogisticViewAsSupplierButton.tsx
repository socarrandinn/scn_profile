import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';

const SupplierViewAsSupplierButton = () => {
  const { t } = useTranslation('logistics');
  const { logisticId } = useLogisticsDetailContext();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/inventory/settings/suppliers/${logisticId as string}/general`);
  }, [logisticId, navigate]);

  return (
    <Button variant='outlined' startIcon={<VisibilityOutlinedIcon />} onClick={handleClick}>
      {t('viewAsSupplier')}
    </Button>
  );
};

export default memo(SupplierViewAsSupplierButton);
