import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import UserInviteCreateModal from 'modules/security/users-invite/containers/UserInviteCreateModal';
import { ICreateUserInvite, USER_INVITE_TYPE_ENUM } from 'modules/security/users-invite/interfaces';
import { initUserInviteValue } from 'modules/security/users-invite/hooks/useUsersInviteCreateForm';
import { distributionCenterInvitationSchema } from 'modules/security/users-invite/schemas/users-invite.schema';
import { useDistributionCenterDetail } from '../context/DistributioncentersContext';
import { DistributionCenterUserInviteForm } from '../components/DistributionCenterUserInviteForm';

type DistributionCenterAddUserInviteModalProps = {
  open: boolean;
  onClose: () => void;
};

const DistributionCenterAddUserInviteModal = ({ onClose, open }: DistributionCenterAddUserInviteModalProps) => {
  const { distributionCenterId, distributionCenter, isLoading, error } = useDistributionCenterDetail();
  const { t } = useTranslation('supplier');

  const dataInit: ICreateUserInvite = {
    ...initUserInviteValue,
    distributionCenter: distributionCenterId,
    inviteType: USER_INVITE_TYPE_ENUM.DISTRIBUTION_CENTER,
  };

  return (
    <UserInviteCreateModal
      title={'edit'}
      subtitle={t('form.subtitle', { supplierName: distributionCenter?.name })}
      open={open}
      onClose={onClose}
      initValue={dataInit}
      loadingInitData={isLoading}
      dataError={error}
      Form={DistributionCenterUserInviteForm}
      schema={distributionCenterInvitationSchema}
    />
  );
};

export default memo(DistributionCenterAddUserInviteModal);
