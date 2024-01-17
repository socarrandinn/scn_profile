import { Button } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';

const LogisticEditButton = () => {
  const { t } = useTranslation('common');
  const { logisticId, onAllToggle, state } = useLogisticsDetailContext();
  const navigate = useNavigate();

  const isEdit = useMemo(
    () => Object.values(state as Record<string, boolean>).every((st: boolean) => st),
    [state],
  );

  const handleEdit = useCallback(() => {
    navigate(`/inventory/settings/logistics/${logisticId as string}/general`);
    onAllToggle?.();
  }, [logisticId, navigate, onAllToggle]);

  return (
    <Button variant='outlined' startIcon={isEdit ? <CloseIcon /> : <EditOutlinedIcon />} onClick={handleEdit}>
      {isEdit ? t('close') : t('edit')}
    </Button>
  );
};

export default memo(LogisticEditButton);
