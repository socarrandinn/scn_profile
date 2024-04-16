import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { LOGISTIC } from 'modules/inventory/constants/entities.style';
import { useLocation } from 'react-router';

const SupplierViewAsLogisticButton = () => {
  const { t } = useTranslation('supplier');
  const { providerProductsId } = useProviderProductsDetail();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = useCallback(() => {
    const lastPart = pathname.substring(pathname.lastIndexOf('/') + 1);
    navigate(`/inventory/settings/logistics/${providerProductsId as string}/${lastPart}`);
  }, [providerProductsId, navigate]);

  return (
    <Button variant='outlined' startIcon={<LOGISTIC.ICON />} onClick={handleClick}>
      {t('viewAsLogistic')}
    </Button>
  );
};

export default memo(SupplierViewAsLogisticButton);
