import { memo } from 'react';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { DeleteAction } from 'components/DeleteAction';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDeleteTeam } from 'modules/store/employee/team/hooks/useDeleteTeam';
import { useParamsLink } from '@dfl/react-security';
import { useTeamDetail } from 'modules/store/employee/team/contexts/TeamDetailsContext';

const TeamDetailsAction = () => {
  const navigate = useNavigate();
  const { teamId } = useTeamDetail()
  const handleEdit = useParamsLink({ edit: teamId });

  const { t } = useTranslation('team');
  const { isOpen: isOpenDelete, onClose: handleOnCloseDelete, onOpen: handleOnOpenDelete } = useToggle();

  const onDelete = () => {
    navigate('/store/employee/teams');
  };

  const { mutate } = useDeleteTeam(teamId || '', onDelete);

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
            <DeleteAction open={isOpenDelete} onClose={handleOnCloseDelete} onDelete={mutate}/>
        </>
  );
};

export default memo(TeamDetailsAction);
