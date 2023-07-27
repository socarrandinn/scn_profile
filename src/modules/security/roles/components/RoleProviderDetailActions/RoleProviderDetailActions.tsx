import { memo } from 'react';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { DeleteAction } from 'modules/security/roles/components/DeleteAction';
import { useParams } from 'react-router';
import { useDeleteRole } from 'modules/security/roles/hooks/useDeleteRole';
import { useNavigate } from 'react-router-dom';
import { useRoleProviderDetail } from '../../contexts/RoleProviderDetailContext';
import RoleProviderDetailEditModal from '../../containers/RoleProviderDetailEditModal';
import { useDeleteRoleProvider } from '../../hooks/useDeleteRoleProvider';

const RoleProviderDetailActions = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: role } = useRoleProviderDetail();

    const { t } = useTranslation('role');
    const { isOpen, onOpen, onClose } = useToggle(false);
    const { isOpen: isOpenDelete, onClose: handleOnCloseDelete, onOpen: handleOnOpenDelete } = useToggle();

    const onDelete = () => {
        navigate('/security/roles/providers');
    };

    const { mutate } = useDeleteRoleProvider(id || '', onDelete);

    return (
        <>
            <Stack spacing={2} p={2}>
                <Button variant={'outlined'} onClick={onOpen} disabled={role?.isSystemRole}>
                    {t('edit')}
                </Button>
                <Button variant={'outlined'} color={'error'} onClick={handleOnOpenDelete} disabled={role?.isSystemRole}>
                    {t('delete')}
                </Button>
            </Stack>
            <RoleProviderDetailEditModal isOpen={isOpen} onClose={onClose} />
            <DeleteAction open={isOpenDelete} onClose={handleOnCloseDelete} onDelete={mutate} />
        </>
    );
};

export default memo(RoleProviderDetailActions);
