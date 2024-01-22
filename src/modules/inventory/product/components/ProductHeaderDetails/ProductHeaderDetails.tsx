import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { PermissionCheck, RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useProductDetail } from '../../contexts/ProductDetail';

import { useNavigate } from 'react-router';
// import { useQueryClient } from 'react-query';

import { productDetailsTabs } from '../../constants/tabs.product.details';
import { FlexBox } from '@dfl/mui-react-common';
import { PRODUCTS_LIST_KEY, PRODUCT_PERMISSIONS } from '../../constants';
import { useTranslation } from 'react-i18next';
import { useDeleteProduct } from '../../hooks/useDeleteProduct';
import { useToggle } from '@dfl/hook-utils';
import { useQueryClient } from '@tanstack/react-query';

const ProductHeaderDetails = () => {
  const { id, product, isLoading, error } = useProductDetail();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={product?.name || ''}
      subtitle={product?.code || ''}
      logo={product?.media?.[0]?.url}
      actions={<Actions />}
    >
      <RouterTab
        tabs={productDetailsTabs}
        prefix={`/inventory/products/${id}`}
        translationNs={'provider'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ProductHeaderDetails);

export const Actions = () => {
  const { t } = useTranslation('product');
  const { id } = useProductDetail();
  const { isOpen, onClose, onOpen } = useToggle();
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
      <FlexBox gap={1} mt={1} mb={2}>
        <Button variant={'outlined'} size={'small'} disabled >
          {t('inventoryReport')}
        </Button>
        <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
          <Button variant={'outlined'} size={'small'} color={'error'} onClick={onOpen}>
            {t('delete')}
          </Button>
        </PermissionCheck>
      </FlexBox>
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
