import { Button } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useProductDetail } from '../../contexts/ProductDetail';

const ProductEditButton = () => {
  const { t } = useTranslation('common');
  const { id, onAllToggle, allOpen } = useProductDetail();
  const navigate = useNavigate();

  const handleEdit = useCallback(() => {
    navigate(`/inventory/products/${id}/general`);
    onAllToggle?.();
  }, [id, navigate, onAllToggle]);

  return (
    <Button variant='outlined' startIcon={allOpen ? <CloseIcon /> : <EditOutlinedIcon />} onClick={handleEdit}>
      {allOpen ? t('close') : t('edit')}
    </Button>
  );
};

export default memo(ProductEditButton);
