import { useToggle } from '@dfl/hook-utils';
import { TablaHeaderOptions, TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';
import { Stack } from '@mui/material';
import { memo, useMemo } from 'react';
// import ProductOfferCreateModal from 'modules/productOffer/containers/ProductOfferCreateModal';
import DeleteButton from 'components/DeleteAction/DeleteButton';
// import { useDeleteManyProductOfferDetails } from 'modules/productOffer/hooks/useDeleteManyProductOfferDetails';
import { PermissionCheck } from '@dfl/react-security';
import { useDeleteManyProductDiscountProducts } from '../../hooks/useDeleteManyProductDiscountProducts';
import { useTranslation } from 'react-i18next';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        createAction: onOpen,
        export: false,
        create: false,
      },
    };
  }, [onOpen]);

  return {
    isOpen,
    onClose,
    settings,
  };
};

const ProductDiscountDetailListToolbar = () => {
  const { t } = useTranslation('productDiscount');
  const { settings } = useToolbarSetting();
  const { mutate, isLoading } = useDeleteManyProductDiscountProducts();
  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <PermissionCheck permissions={'BULK_PRODUCT_DISCOUNT:DELETE'}>
              <DeleteButton
                isLoading={isLoading}
                onDelete={mutate}
                many
                customConfirmation={t('deleteManyConfirmation')}
              />
            </PermissionCheck>
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      {/* <ProductOfferCreateModal open={isOpen} onClose={onClose} /> */}
    </>
  );
};

export default memo(ProductDiscountDetailListToolbar);
