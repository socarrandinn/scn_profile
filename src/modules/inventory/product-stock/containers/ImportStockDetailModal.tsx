import { DialogForm } from '@dfl/mui-react-common';
import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ImportStockContainer from './ImportStockContainer';
import { IStockDetailCallback, STOCK_SUMMARY_CASE } from '../interfaces/IStockSummary';

type ImportStockDetailModalProps = {
  open: boolean;
  onClose: () => void;
  summaryCase: STOCK_SUMMARY_CASE;
  details: IStockDetailCallback | undefined;
};
const ImportStockDetailModal = ({ open, summaryCase, details, onClose }: ImportStockDetailModalProps) => {
  const { t } = useTranslation('stock');
  const _disableAction = useMemo(() => Object.keys(STOCK_SUMMARY_CASE).includes(summaryCase), [summaryCase]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <DialogForm open={open} aria-labelledby={'stock-creation-title'} onClose={handleClose} maxWidth={'sm'}>
      <DialogContent>
        <ImportStockContainer details={details} _case={summaryCase} onClose={onClose} />
      </DialogContent>
      <DialogActions sx={{ mt: 2 }}>
        <Button variant='grey' onClick={handleClose}>
          {t('common:cancel')}
        </Button>
        {!_disableAction && (
          <LoadingButton variant='contained' type={'submit'} loading={false} form='error-list-form'>
            {t('common:save')}
          </LoadingButton>
        )}
      </DialogActions>
    </DialogForm>
  );
};

export default memo(ImportStockDetailModal);
