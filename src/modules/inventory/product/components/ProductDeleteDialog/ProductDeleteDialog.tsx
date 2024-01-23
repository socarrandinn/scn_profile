import { useNavigate } from 'react-router';
import { memo } from 'react';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteProduct } from 'modules/inventory/product/hooks/useDeleteProduct';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';
import { useTranslation } from 'react-i18next';

type ProductDeleteDialogProps = {
  onClose: () => void;
  isOpen: boolean;
};

const ProductDeleteDialog = ({ onClose, isOpen }: ProductDeleteDialogProps) => {
  const { t } = useTranslation('product');
  const { id } = useProductDetail();

  const { mutate, isLoading } = useDeleteProduct(id || '', onClose);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handelDelete = () => {
    mutate?.();
    if (!isLoading) {
      navigate('/inventory/products');
      queryClient.invalidateQueries([PRODUCTS_LIST_KEY]);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title'>{t('common:deleteConfirmation.title')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('common:deleteConfirmation.confirmation')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            {t('common:cancel')}
          </Button>
          <Button variant={'contained'} color={'error'} className={'ml-2'} onClick={handelDelete}>
            {t('common:delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(ProductDeleteDialog);
