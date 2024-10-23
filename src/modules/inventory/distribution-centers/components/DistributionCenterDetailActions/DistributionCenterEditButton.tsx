import { Button } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useDistributionCenterDetail } from '../../context/DistributioncentersContext';

const StoreEditButton = () => {
  const { t } = useTranslation('common');
  const { distributionCenterId, onAllToggle, allOpen } = useDistributionCenterDetail();
  const navigate = useNavigate();

  const handleEdit = useCallback(() => {
    navigate(`/inventory/distribution-centers/${distributionCenterId}/general`);
    onAllToggle?.();
  }, [distributionCenterId, navigate, onAllToggle]);

  return (
    <Button variant='outlined' startIcon={allOpen ? <CloseIcon /> : <EditOutlinedIcon />} onClick={handleEdit}>
      {allOpen ? t('close') : t('edit')}
    </Button>
  );
};

export default memo(StoreEditButton);
