import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ConditionContainer, FlexBox, HandlerError, IconButton } from '@dfl/mui-react-common';
import { isEmpty } from 'lodash';
import { IPartialStock } from 'modules/inventory/product/interfaces/IStock';
import { PRODUCT_STOCK_OPERATIONS } from 'modules/inventory/product/constants/stock-operations.constants';
import ExportingState from './ExportingState';
import ProductStockInfo from 'modules/inventory/product/components/StoreProductStockForm/ProductStockInfo';

type ImporterProductCodeAlertProps = {
  title: string;
  warehouse: string;
  confirmation?: string;
  isOpen: boolean;
  onClose: () => void;
  reset: () => void;
  disabled?: boolean;
  error: any;
  control: any;
  watch: any;
  append: any;
  setValue: any;
  selected?: readonly string[] | undefined;
};

const ImporterProductCodeAlert = ({ isOpen, title, watch, append, onClose, error }: ImporterProductCodeAlertProps) => {
  const { t } = useTranslation('common');

  const items = watch('listErrorFile')?.items;

  const addProduct = useCallback(() => {
    items?.map((item: IPartialStock, index: number) => {
      return append({
        item: item?.item?.code,
        quantity: item?.quantity,
        stock: item?.stock,
        operation: PRODUCT_STOCK_OPERATIONS.ADDED,
      });
    });
    onClose?.();
  }, [append, onClose, items]);

  return (
    <Dialog
      maxWidth={'md'}
      fullWidth
      open={isOpen}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle>
        <Typography variant={'h2'} mb={3} fontSize={24}>
          {t(title)}
        </Typography>
        <IconButton
          tooltip={t('close')}
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <ConditionContainer active={true} alternative={<ExportingState error={error} />}>
        <DialogContent>
          <HandlerError error={error} />
          <FlexBox flexDirection={'column'} gap={2} mt={1}>
            <ProductStockInfo response={watch('listErrorFile')} />
          </FlexBox>
        </DialogContent>
      </ConditionContainer>
      <DialogActions>
        <Button variant='grey' onClick={onClose}>
          {t('common:cancel')}
        </Button>
        <Button variant='contained' disabled={isEmpty(items)} type={'submit'} onClick={addProduct}>
          {t('add')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(ImporterProductCodeAlert);
