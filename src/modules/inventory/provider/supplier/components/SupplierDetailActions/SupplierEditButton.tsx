import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';

const SupplierEditButton = () => {
  const { t } = useTranslation('common');
  const { providerProductsId, onAllToggle, allOpen } = useProviderProductsDetail();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleEdit = useCallback(() => {
    navigate(`/inventory/settings/suppliers/${providerProductsId as string}/general`);
    onAllToggle?.();
  }, [providerProductsId, navigate, onAllToggle]);

  useEffect(() => {
    if (searchParams.get('edit') === 'true') {
      onAllToggle?.();
    }
  }, [searchParams]);

  return (
    <Button variant='outlined' startIcon={allOpen ? <CloseIcon /> : <EditOutlinedIcon />} onClick={handleEdit}>
      {allOpen ? t('close') : t('edit')}
    </Button>
  );
};

export default memo(SupplierEditButton);
