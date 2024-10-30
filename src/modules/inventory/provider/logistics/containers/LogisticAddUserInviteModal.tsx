import { memo } from 'react';
import { useLogisticsDetailContext } from '../context/LogisticDetail';
import { LogisticUserInviteForm } from '../components/LogisticUserInviteForm';
import { useTranslation } from 'react-i18next';
import UserInviteCreateModal from 'modules/security/users-invite/containers/UserInviteCreateModal';
import { ICreateUserInvite, USER_INVITE_TYPE_ENUM } from 'modules/security/users-invite/interfaces';
import { initUserInviteValue } from 'modules/security/users-invite/hooks/useUsersInviteCreateForm';
import { providerInvitationSchema } from 'modules/security/users-invite/schemas/users-invite.schema';

type LogisticAddUserInviteModalProps = {
  open: boolean;
  onClose: () => void;
};

const LogisticAddUserInviteModal = ({ onClose, open }: LogisticAddUserInviteModalProps) => {
  const { logisticId, logistic, isLoading, error } = useLogisticsDetailContext();
  const { t } = useTranslation('supplier');

  const dataInit: ICreateUserInvite = {
    ...initUserInviteValue,
    provider: logisticId as string,
    inviteType: USER_INVITE_TYPE_ENUM.PROVIDER,
  };

  return (
    <UserInviteCreateModal
      title={'edit'}
      subtitle={t('form.subtitle', { supplierName: logistic?.name })}
      open={open}
      onClose={onClose}
      initValue={dataInit}
      loadingInitData={isLoading}
      dataError={error}
      Form={LogisticUserInviteForm}
      schema={providerInvitationSchema}
    />
  );
};

export default memo(LogisticAddUserInviteModal);
