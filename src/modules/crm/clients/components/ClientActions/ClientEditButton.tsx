import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';
import { useNavigate } from 'react-router';

const ClientEditButton = () => {
  const { t } = useTranslation('common');
  const { clientId, onAllToggle, allOpen } = useClientDetails();

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/crm/clients/${clientId as string}/general`);
    onAllToggle?.();
  }, [navigate, clientId, onAllToggle]);

  return (
    <>
      <Button onClick={handleClick} variant='outlined' startIcon={allOpen ? <CloseIcon /> : <EditOutlinedIcon />}>
        {allOpen ? t('close') : t('edit')}
      </Button>
    </>
  );
};

export default memo(ClientEditButton);
