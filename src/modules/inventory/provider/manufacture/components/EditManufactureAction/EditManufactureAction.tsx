import { Button } from '@mui/material';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { PermissionCheck } from '@dfl/react-security';
import { useManufactureDetailContext } from '../../context/ManufactureDetail';
import { MANUFACTURE_PERMISSIONS } from '../../constants';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const EditManufactureAction = () => {
  const { t } = useTranslation('common');
  const { allOpen, manufacturerId, onAllToggle } = useManufactureDetailContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleEdit = useCallback(() => {
    navigate(`/inventory/settings/manufactures/${manufacturerId as string}/general`);
    onAllToggle?.();
  }, [manufacturerId, navigate, onAllToggle]);

  useEffect(() => {
    if (searchParams.get('edit') === 'true') {
      onAllToggle?.();
    }
  }, [onAllToggle, searchParams]);

  return (
    <PermissionCheck permissions={MANUFACTURE_PERMISSIONS.MANUFACTURE_WRITE}>
      <Button variant='outlined' startIcon={allOpen ? <CloseIcon /> : <EditOutlinedIcon />} onClick={handleEdit}>
        {allOpen ? t('close') : t('edit')}
      </Button>
    </PermissionCheck>
  );
};

export default memo(EditManufactureAction);
