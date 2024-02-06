import { LoadingButton } from '@dfl/mui-react-common';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { UpdateHandlingCostModal } from 'modules/inventory/provider/logistics/components/UpdateHandlingCostModal';
import { useToggle } from '@dfl/hook-utils';
import { useFindSelectedLogistics } from '../../hooks/useFindSelectedLogistics';

const LogisticBulkUpdateHandlingCostButton = () => {
  const { t } = useTranslation('logistics');
  const { isOpen, onClose, onOpen } = useToggle();
  const { data, isLoading } = useFindSelectedLogistics();

  return (
    <>
      <LoadingButton
        loading={isLoading}
        onClick={onOpen}
        variant='outlined'
        startIcon={<EditOutlinedIcon />}
        sx={{ minWidth: 215 }}
      >
        {t('editHandlingCost')}
      </LoadingButton>
      <UpdateHandlingCostModal
        open={isOpen}
        onClose={onClose}
        initValues={{ handlingCost: 0, logistics: data?.data }}
        loadingInitValues={isLoading}
      />
    </>
  );
};

export default memo(LogisticBulkUpdateHandlingCostButton);
