import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { LoadingButton, Paragraph } from '@dfl/mui-react-common';

interface ModifyCommissionMessageProps {
  isLoading: boolean;
  confirmOpen: boolean;

  // Methods
  handleConfirmClose: () => void;
  handleConfirmSubmit: () => void;
}

const ModifyCommissionConfirmationMessage = ({
  isLoading,
  confirmOpen,
  handleConfirmClose,
  handleConfirmSubmit,
}: ModifyCommissionMessageProps) => {
  const { t } = useTranslation('supplier');

  return (
    <Dialog open={confirmOpen}>
      <DialogTitle>{t('commissionModifyConfirmTitle')}</DialogTitle>
      <DialogContent>
        <Paragraph>{t('commissionModifyConfirmMessage')}</Paragraph>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirmClose}>{t('common:cancel')}</Button>
        <LoadingButton
          variant='contained'
          onClick={handleConfirmSubmit}
          loading={isLoading}
          form='supplier-commission-form'
        >
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModifyCommissionConfirmationMessage;
