import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import UserInviteCreateModal from 'modules/security/users-invite/containers/UserInviteCreateModal';
import { ICreateUserInvite, USER_INVITE_TYPE_ENUM } from 'modules/security/users-invite/interfaces';
import { initUserInviteValue } from 'modules/security/users-invite/hooks/useUsersInviteCreateForm';
import { warehouseInvitationSchema } from 'modules/security/users-invite/schemas/users-invite.schema';
import { useWarehouseDetail } from '../context/WarehouseContext';
import { DistributionCenterUserInviteForm } from 'modules/inventory/distribution-centers/components/DistributionCenterUserInviteForm';

type WarehouseAddUserInviteModalProps = {
  open: boolean;
  onClose: () => void;
};

const WarehouseAddUserInviteModal = ({ onClose, open }: WarehouseAddUserInviteModalProps) => {
  const { warehouse, warehouseId, isLoading, error } = useWarehouseDetail();
  const { t } = useTranslation('warehouse');

  const dataInit: ICreateUserInvite = {
    ...initUserInviteValue,
    warehouse: warehouseId,
    inviteType: USER_INVITE_TYPE_ENUM.WAREHOUSE,
  };

  return (
    <UserInviteCreateModal
      title={'edit'}
      subtitle={t('form.subtitle', { name: warehouse?.name })}
      open={open}
      onClose={onClose}
      initValue={dataInit}
      loadingInitData={isLoading}
      dataError={error}
      Form={DistributionCenterUserInviteForm}
      schema={warehouseInvitationSchema}
    />
  );
};

export default memo(WarehouseAddUserInviteModal);
