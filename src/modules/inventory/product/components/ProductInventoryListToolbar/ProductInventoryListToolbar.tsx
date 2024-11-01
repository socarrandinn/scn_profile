import { memo } from 'react';
import { Typography } from '@mui/material';
import { FlexBox, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { Add } from '@mui/icons-material/';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindProductStock } from 'modules/inventory/product/hooks/useFindProductStock';
import AvailableProductCreateModal from '../../containers/ProductTabs/AvailableProductCreateModal';

const ProductInventoryListToolbar = () => {
  const { t } = useTranslation('product');
  const { isOpen, onClose, onOpen } = useToggle();
  const { product } = useProductDetail();
  const { data } = useFindProductStock(product?._id);

  return (
    <>
      <Typography variant='subtitle2'>{t('section.inventory.title')}</Typography>
      <FlexBox my={2} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='subtitle2'>
          {t('section.inventory.total')}: {data?.data?.stock}
        </Typography>
        <LoadingButton startIcon={<Add />} onClick={onOpen} variant='contained'>
          {t('section.inventory.add')}
        </LoadingButton>
      </FlexBox>
      <AvailableProductCreateModal open={isOpen} onClose={onClose} productId={product?._id as string} />
    </>
  );
};

export default memo(ProductInventoryListToolbar);
