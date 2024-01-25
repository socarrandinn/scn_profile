import { Button } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { PermissionCheck } from '@dfl/react-security';
import { ManufactureDetail } from '../../context/ManufactureDetail';
import { MANUFACTURE_PERMISSIONS } from '../../constants';

const EditManufactureAction = () => {
  const { t } = useTranslation('common');
  const { editIsOpen, closeEdit, openEdit } = ManufactureDetail();

  return (
    <PermissionCheck permissions={MANUFACTURE_PERMISSIONS.MANUFACTURE_WRITE}>
      <Button
        variant='outlined'
        startIcon={editIsOpen ? <CloseIcon /> : <EditOutlinedIcon />}
        onClick={editIsOpen ? closeEdit : openEdit}
      >
        {t(editIsOpen ? 'close' : 'edit')}
      </Button>
    </PermissionCheck>
  );
};

export default memo(EditManufactureAction);
