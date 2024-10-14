import { Button } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useStoreDetail } from '../../context/StoreContext';

const StoreEditButton = () => {
  const { t } = useTranslation('common');
  const { storeId, onAllToggle, allOpen } = useStoreDetail();
  const navigate = useNavigate();

  const handleEdit = useCallback(() => {
    navigate(`/inventory/warehouses/${storeId}/general`);
    onAllToggle?.();
  }, [storeId, navigate, onAllToggle]);

  return (
    <Button variant='outlined' startIcon={allOpen ? <CloseIcon /> : <EditOutlinedIcon />} onClick={handleEdit}>
      {allOpen ? t('close') : t('edit')}
    </Button>
  );
};

export default memo(StoreEditButton);
