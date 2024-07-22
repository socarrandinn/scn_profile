import { memo } from 'react';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import RoleDetailEditModal from 'modules/security/roles/containers/RoleDetailEditModal';
import { useToggle } from '@dfl/hook-utils';
import { DeleteAction } from 'modules/security/roles/components/DeleteAction';
import { useParams } from 'react-router';
import { useDeleteRole } from 'modules/security/roles/hooks/useDeleteRole';
import { useNavigate } from 'react-router-dom';
import { useRoleDetail } from 'modules/security/roles/contexts';

const RoleDetailActions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: role } = useRoleDetail();

  const { t } = useTranslation('role');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { isOpen: isOpenDelete, onClose: handleOnCloseDelete, onOpen: handleOnOpenDelete } = useToggle();

  const onDelete = () => {
    navigate('/security/roles/system');
  };

  const { mutate } = useDeleteRole(id || '', onDelete);
  return (
    <>
      <Stack gap={2} flexDirection={'row'} flexWrap={'wrap'} alignItems={'start'}>
        <Button variant={'outlined'} onClick={onOpen} disabled={role?.isSystemRole}>
          {t('edit')}
        </Button>
        <Button variant={'outlined'} color={'error'} onClick={handleOnOpenDelete} disabled={role?.isSystemRole}>
          {t('delete')}
        </Button>
      </Stack>
      <RoleDetailEditModal isOpen={isOpen} onClose={onClose} />
      <DeleteAction open={isOpenDelete} onClose={handleOnCloseDelete} onDelete={mutate} />
    </>
  );
};

export default memo(RoleDetailActions);
