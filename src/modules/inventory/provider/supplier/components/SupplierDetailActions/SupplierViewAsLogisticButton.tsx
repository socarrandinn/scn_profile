import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const SupplierViewAsLogisticButton = () => {
  const { t } = useTranslation('supplier');
  const { providerProductsId } = useProviderProductsDetail();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/inventory/settings/logistics/${providerProductsId as string}/general`);
  }, [providerProductsId, navigate]);

  return (
    <Button variant='outlined' startIcon={<VisibilityOutlinedIcon />} onClick={handleClick}>
      {t('viewAsLogistic')}
    </Button>
  );
};

export default memo(SupplierViewAsLogisticButton);
