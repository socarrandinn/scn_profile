import { DialogForm } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ImportStockContainer from './ImportStockContainer';
import { STOCK_SUMMARY_CASE } from '../interfaces/IStockSummary';

type ImportStockDetailModalProps = {
  open: boolean;
  onClose: () => void;
  summaryCase: STOCK_SUMMARY_CASE;
};
const ImportStockDetailModal = ({ open, summaryCase, onClose }: ImportStockDetailModalProps) => {
  const { t } = useTranslation('stock');
  // const { isLoading, reset } = useStockWarehouseImportCreateForm(onClose, initValue);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <DialogForm open={open} aria-labelledby={'stock-creation-title'} onClose={handleClose} maxWidth={'md'}>
      <DialogContent>
        <ImportStockContainer summary={undefined} _case={summaryCase} onClose={onClose} />
      </DialogContent>
      <DialogActions sx={{ mt: 2 }}>
        <Button variant='outlined' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        <LoadingButton variant='contained' type={'submit'} loading={false} form='form'>
          {t('common:save')}
        </LoadingButton>
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ImportStockDetailModal);
