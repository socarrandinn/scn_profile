import { memo, useCallback } from 'react';
import { Box, IconButton, ListItem, Tooltip, styled, ListItemText, ListItemAvatar } from '@mui/material';
import { UseFieldArrayRemove } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ProductMedia } from '../OfferProductFrom/OfferProductFromItem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import OfferProductToIncludeListSkeleton from './OfferProductToIncludeListSkeleton';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';

export const ListItemCustom = styled(ListItem)(() => ({
  '& .MuiListItemText-root': {
    flex: 'none',
  },
}));

type productToIncludeProps = {
  removeRule: UseFieldArrayRemove;
  index: number;
  productToInclude: any;
};

const Boxs = {
  bold: <Box component={'span'} fontWeight={600} />,
};

const OfferProductToIncludeFromItem = ({ index, productToInclude, removeRule }: productToIncludeProps) => {
  const { t } = useTranslation('offerOrder');
  const { data, isLoading, error } = useFindOneProduct(productToInclude?.product);
  const deleteOneProductRule = useCallback(() => {
    removeRule(index);
  }, [removeRule, index]);
  if (isLoading || error) return <OfferProductToIncludeListSkeleton />;
  return (
    <ListItemCustom
      alignItems='center'
      secondaryAction={
        <Tooltip title={t('sections.product.deleteRuleItem')}>
          <IconButton color='error' onClick={deleteOneProductRule}>
            <DeleteOutlineOutlinedIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemAvatar>
        <ProductMedia variant='rounded' alt={data?.name} src={data?.media?.[0]?.thumb}>
          <ShoppingBagOutlinedIcon />
        </ProductMedia>
      </ListItemAvatar>
      {/*  <ListItemText sx={{ width: '50%' }} primary={<RenderAttribute item={data} />} /> */}
      <ListItemText
        primary={
          <Trans i18nKey={'offerOrder:quantity'} components={Boxs} values={{ quantity: productToInclude?.quantity }} />
        }
      />
    </ListItemCustom>
  );
};

export default memo(OfferProductToIncludeFromItem);
