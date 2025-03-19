import { memo, useCallback } from 'react';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, styled, Tooltip } from '@mui/material';
import { UseFieldArrayRemove } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import OfferProductListSkeleton from './OfferProductListSkeleton';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { getFullUrl } from 'utils/index';
import { TransTypography } from 'components/TransTypography';

type OfferProductFromItemProps = {
  removeRule: UseFieldArrayRemove;
  index: number;
  ruleProduct: any;
  section: boolean;
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

const OfferProductFromItem = ({ removeRule, index, ruleProduct, section }: OfferProductFromItemProps) => {
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
          <IconButton disabled={!section} color='error' onClick={deleteOneProductRule}>
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
          <TransTypography
            message='offerOrder:operator_item_rule'
            values={{ operator: t(`offerOrder:operator:${ruleProduct?.operator as string}`) }}
          />
        }
      />
      <ListItemText
        primary={<TransTypography message='offerOrder:quantity' values={{ quantity: ruleProduct?.quantity }} />}
      />
    </ListItemCustom>
  );
};

export default memo(OfferProductFromItem);
