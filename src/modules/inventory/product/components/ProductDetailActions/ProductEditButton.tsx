import { Button } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import { useProductDetail } from '../../contexts/ProductDetail';
import { Edit } from '@mui/icons-material';

const ProductEditButton = () => {
  const { t } = useTranslation('common');
  const { onAllToggle, allOpen } = useProductDetail();

  const handleEdit = useCallback(() => {
    onAllToggle?.();
  }, [onAllToggle]);

  return (
    <Button variant='outlined' startIcon={allOpen ? <CloseIcon /> : <Edit />} onClick={handleEdit}>
      {allOpen ? t('close') : t('edit')}
    </Button>
  );
};

export default memo(ProductEditButton);
