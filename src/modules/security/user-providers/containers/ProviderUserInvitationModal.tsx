import UserInvitationModal from 'modules/security/users/containers/UserInvitationModal';
import { userInvitationSchema } from 'modules/security/users/schemas/user.schema';
import { Grid } from '@mui/material';
import { SelectRole } from 'modules/security/roles/components/SelectRole';
import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { useTranslation } from 'react-i18next';

type UserCreateModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ProviderUserInvitationModal = ({
  open,
  onClose,
}: UserCreateModalProps) => {
  const { t } = useTranslation(['users', 'supplier']);
  return (<UserInvitationModal open={open} onClose={onClose} apiPath={'/admin/invite'}
                               validationScheme={userInvitationSchema} queryKey={''}
                               redirect={'/security/system-users/user'}>
      <Grid item xs={12}>
        <SelectRole name='security.roles' multiple label={t('roles')} placeholder={t('selectRoles')} required
                    type={ROLE_TYPE_ENUM.ROOT} />
      </Grid>
    </UserInvitationModal>
  );
};
