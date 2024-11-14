import { ConfirmAction } from 'components/ConfirmAction';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type ChangeManyStatusActionProps = {
  onConfirm: () => void;
  open: boolean;
  isLoading: boolean;
  onClose: () => void;
  onOpen: () => void;
  confirmation?: string;
  confirmButtonText?: string;
};

const ChangeManyStatusAction = ({
  open,
  isLoading,
  onClose,
  onOpen,
  onConfirm,
  confirmation,
  confirmButtonText,
}: ChangeManyStatusActionProps) => {
  const { t } = useTranslation('common');
  return (
    <ConfirmAction
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
      isLoading={isLoading}
      title={t('confirmation.title')}
      confirmation={confirmation || t('confirmation.description')}
      confirmButtonText={confirmButtonText || t('confirmation.confirm')}
    />
  );
};

export default memo(ChangeManyStatusAction);
