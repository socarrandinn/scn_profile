import { memo, useCallback } from 'react';
import { Avatar, Box, IconButton, ListItem, ListItemAvatar, ListItemText, styled, Tooltip } from '@mui/material';
import { UseFieldArrayRemove } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import OfferProductListSkeleton from './OfferProductListSkeleton';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { getFullUrl } from 'utils/index';

type OfferProductFromItemProps = {
  removeRule: UseFieldArrayRemove;
  index: number;
  ruleProduct: any;
  productSection: boolean;
};

export const ProductMedia = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  height: 45,
  width: 45,
}));

export const ListItemCustom = styled(ListItem)(() => ({
  '& .MuiListItemText-root': {
    flex: 'none',
  },
}));

const Boxs = {
  bold: <Box component={'span'} fontWeight={600} />,
};

const OfferProductFromItem = ({ removeRule, index, ruleProduct, productSection }: OfferProductFromItemProps) => {
  const { t } = useTranslation('offerOrder');

  const { data, isLoading, error } = useFindOneProduct(ruleProduct?.product);

  const deleteOneProductRule = useCallback(() => {
    removeRule(index);
  }, [removeRule, index]);

  if (isLoading || error) return <OfferProductListSkeleton />;

  return (
    <ListItemCustom
      alignItems='center'
      secondaryAction={
        <Tooltip title={t('sections.product.deleteRuleItem')}>
          <IconButton disabled={!productSection} color='error' onClick={deleteOneProductRule}>
            <DeleteOutlineOutlinedIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemAvatar>
        <ProductMedia variant='rounded' alt={data?.name} src={getFullUrl(data?.media?.[0]?.thumb as string)}>
          <ShoppingBagOutlinedIcon />
        </ProductMedia>
      </ListItemAvatar>
      <ListItemText sx={{ width: '40%' }} primary={data?.name} />
      <ListItemText
        sx={{ width: 200 }}
        primary={
          <Trans
            i18nKey={'offerOrder:operator_item_rule'}
            components={Boxs}
            values={{ operator: t(`offerOrder:operator:${ruleProduct?.operator as string}`) }}
          />
        }
      />
      <ListItemText
        primary={
          <Trans i18nKey={'offerOrder:quantity'} components={Boxs} values={{ quantity: ruleProduct?.quantity }} />
        }
      />
    </ListItemCustom>
  );
};

export default memo(OfferProductFromItem);
