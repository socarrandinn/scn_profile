import { memo } from 'react';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { DeleteAction } from 'components/DeleteAction';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDeleteTeam } from 'modules/rrhh/team/hooks/useDeleteTeam';
import { useParamsLink } from '@dfl/react-security';

const TeamDetailsAction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleEdit = useParamsLink({ edit: id });

  const { t } = useTranslation('team');
  const { isOpen: isOpenDelete, onClose: handleOnCloseDelete, onOpen: handleOnOpenDelete } = useToggle();

  const onDelete = () => {
    navigate('/rrhh/teams');
  };

  const { mutate } = useDeleteTeam(id || '', onDelete);

  return (
    <>
      <Stack spacing={2} p={2}>
        <Button variant={'outlined'} onClick={handleEdit}>
          {t('edit')}
        </Button>
        <Button variant={'outlined'} color={'error'} onClick={handleOnOpenDelete}>
          {t('common:delete')}
        </Button>
      </Stack>
      <DeleteAction open={isOpenDelete} onClose={handleOnCloseDelete} onDelete={mutate} />
    </>
  );
};

export default memo(TeamDetailsAction);
