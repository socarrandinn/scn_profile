import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useTranslation } from 'react-i18next';
import { useDeleteManufacture } from '../../hooks/useDeleteManufacture';
import { useManufactureDetailContext } from '../../context/ManufactureDetail';
import { useNavigate } from 'react-router';
import { PermissionCheck } from '@dfl/react-security';
import { MANUFACTURE_PERMISSIONS } from '../../constants';
import { memo } from 'react';

const DeleteManufactureAction = () => {
  const { t } = useTranslation('manufacture');
  const { manufacturerId } = useManufactureDetailContext();
  const navigate = useNavigate();

  const { mutate, isLoading } = useDeleteManufacture(manufacturerId as string, () => {
    navigate('/inventory/settings/manufactures/');
  });

  return (
    <PermissionCheck permissions={MANUFACTURE_PERMISSIONS.MANUFACTURE_WRITE}>
      <DeleteButton onDelete={mutate} isLoading={isLoading} customConfirmation={t('deleteActionConfirmation')} />
    </PermissionCheck>
  );
};

export default memo(DeleteManufactureAction);
