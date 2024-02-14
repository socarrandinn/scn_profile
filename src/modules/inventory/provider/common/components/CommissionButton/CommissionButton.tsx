import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useToggle } from '@dfl/hook-utils';
import { LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { CommissionModalActions } from 'modules/inventory/provider/supplier/components/CommissionModalActions';
import { useFindSelectedSuppliers } from 'modules/inventory/provider/supplier/hooks/useFindSelectedSuppliers';
import { LogisticProvider } from 'modules/inventory/provider/common/constants';
import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

const CommissionButton = () => {
  const { t } = useTranslation('supplier');

  const { isOpen, onClose, onOpen } = useToggle();
  const { data, isLoading } = useFindSelectedSuppliers();

  const isThereLogisitcs = useMemo(() => data?.data.some((provider) => provider.type === LogisticProvider), [data]);

  const handleLogisticsProhibition = useCallback(() => {
    toast.error(t('disabledCommission'));
  }, []);

  return (
    <>
      <LoadingButton
        variant='outlined'
        onClick={isThereLogisitcs ? handleLogisticsProhibition : onOpen}
        loading={isLoading}
        startIcon={<EditOutlinedIcon />}
      >
        {t('commission')}
      </LoadingButton>

      <CommissionModalActions
        open={isOpen}
        onClose={onClose}
        title={t('commissionModify')}
        initValue={{ commission: '', suppliers: data?.data as ISupplier[] }}
        loadingInitData={isLoading}
      />
    </>
  );
};

export default CommissionButton;
