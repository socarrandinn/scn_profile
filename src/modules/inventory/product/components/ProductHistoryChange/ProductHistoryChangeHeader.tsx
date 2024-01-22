import { memo } from 'react';
import { ProductHistoryChangeBoardHeader } from 'modules/inventory/product/components/ProductHistoryChangeBoardHeader';
import { Stack, Typography, Avatar, styled } from '@mui/material';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useTranslation } from 'react-i18next';

const ProductMedia = styled(Avatar)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
}));

const ProductHistoryChangeHeader = () => {
  const { product, isLoading } = useProductDetail();
  const { t } = useTranslation('product');

  const Product = (
    <Stack direction={'row'} gap={1} alignItems={'center'}>
      <ProductMedia variant='rounded' src={product?.media?.[0]?.url as string} alt='P' />
      <Stack>
        <Typography>{product?.name}</Typography>
        <Typography>{product?.code || '-'}</Typography>
      </Stack>
    </Stack>
  );
  return <ProductHistoryChangeBoardHeader
    title={t('section.historyChange.title')}
    /* @ts-ignore */
    subtitle={Product} isLoading={isLoading} />;
};

export default memo(ProductHistoryChangeHeader);
