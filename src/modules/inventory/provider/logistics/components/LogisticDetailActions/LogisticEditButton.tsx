import { Button } from '@mui/material';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';

const LogisticEditButton = () => {
  const { t } = useTranslation('common');
  const { logisticId, onAllToggle, allOpen } = useLogisticsDetailContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleEdit = useCallback(() => {
    navigate(`/inventory/settings/logistics/${logisticId as string}/general`);
    onAllToggle?.();
  }, [logisticId, navigate, onAllToggle]);

  useEffect(() => {
    if (searchParams.get('edit') === 'true') {
      onAllToggle?.();
    }
  }, [onAllToggle, searchParams]);

  return (
    <Button variant='outlined' startIcon={allOpen ? <CloseIcon /> : <EditOutlinedIcon />} onClick={handleEdit}>
      {allOpen ? t('close') : t('edit')}
    </Button>
  );
};

export default memo(LogisticEditButton);
