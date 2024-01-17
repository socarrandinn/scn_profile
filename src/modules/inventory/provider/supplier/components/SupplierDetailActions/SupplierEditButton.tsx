import { Button } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';

const SupplierEditButton = () => {
  const { t } = useTranslation('common');
  const { providerProductsId, onAllToggle, allOpen } = useProviderProductsDetail();
  const navigate = useNavigate();

  const handleEdit = useCallback(() => {
    navigate(`/inventory/settings/suppliers/${providerProductsId as string}/general`);
    onAllToggle?.();
  }, [providerProductsId, navigate, onAllToggle]);

  return (
    <Button variant='outlined' startIcon={allOpen ? <CloseIcon /> : <EditOutlinedIcon />} onClick={handleEdit}>
      {allOpen ? t('close') : t('edit')}
    </Button>
  );
};

export default memo(SupplierEditButton);
