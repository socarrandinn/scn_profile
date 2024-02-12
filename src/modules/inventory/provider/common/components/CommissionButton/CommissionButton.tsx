import { PaidOutlined } from '@mui/icons-material';
import { useToggle } from '@dfl/hook-utils';
import { LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { CommissionModalActions } from 'modules/inventory/provider/supplier/components/CommissionModalActions';
import { useFindSelectedSuppliers } from 'modules/inventory/provider/supplier/hooks/useFindSelectedSuppliers';
import { LogisticProvider } from 'modules/inventory/provider/common/constants';
import { useCallback, useMemo } from 'react';
import { IProvider } from 'modules/inventory/provider/common/interfaces';
import toast from 'react-hot-toast';

const CommissionButton = () => {
  const { t } = useTranslation('supplier');

  const { isOpen, onClose, onOpen } = useToggle();
  const { data, isLoading } = useFindSelectedSuppliers();

  const isThereLogisitcs = useMemo(
    () => data?.data.some((provider: IProvider) => provider.type === LogisticProvider),
    [data],
  );

  const handleLogisticsProhibition = useCallback(() => {
    toast.error(t('disabledCommission'));
  }, []);

  return (
    <>
      <LoadingButton
        variant='outlined'
        onClick={isThereLogisitcs ? handleLogisticsProhibition : onOpen}
        loading={isLoading}
        sx={{ minWidth: 215 }}
        startIcon={<PaidOutlined />}
      >
        {t('commissionModify')}
      </LoadingButton>

      <CommissionModalActions
        open={isOpen}
        onClose={onClose}
        title={t('commissionModify')}
        initValue={{ commission: '', suppliers: data?.data }}
        loadingInitData={isLoading}
      />
    </>
  );
};

export default CommissionButton;
