import { memo, useCallback } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { UseFieldArrayRemove } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useFindOneCategory } from 'modules/inventory/settings/category/hooks/useFindOneCategory';
import { getFullUrl } from 'utils/index';
import OfferProductListSkeleton from '../OfferProductFrom/OfferProductListSkeleton';

type OfferCategoryFromItemProps = {
  removeRule: UseFieldArrayRemove;
  index: number;
  rule: any;
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

const Boxs = {
  bold: <Box component={'span'} fontWeight={600} />,
};

const OfferCategoryFromItem = ({ removeRule, index, rule, section }: OfferCategoryFromItemProps) => {
  const { t } = useTranslation('offerOrder');
  const { data: category, error, isLoading } = useFindOneCategory(rule?.category as string);
  const deleteOneCategoryRule = useCallback(() => {
    removeRule(index);
  }, [removeRule, index]);

  if (error || isLoading) return <OfferProductListSkeleton />;

  return (
    <ListItemCustom
      alignItems='center'
      secondaryAction={
        <Tooltip title={t('sections.category.deleteRuleItem')}>
          <IconButton disabled={!section} color='error' onClick={deleteOneCategoryRule}>
            <DeleteOutlineOutlinedIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemAvatar>
        <ProductMedia variant='rounded' alt={category?.name} src={getFullUrl(category?.image?.thumb as string)}>
          <ShoppingBagOutlinedIcon />
        </ProductMedia>
      </ListItemAvatar>
      <ListItemText sx={{ width: '50%' }} primary={<Typography fontWeight={600}>{category?.name}</Typography>} />
      <ListItemText
        sx={{ width: 200 }}
        primary={
          <Trans
            i18nKey={'offerOrder:operator_item_rule'}
            components={Boxs}
            values={{ operator: t(`offerOrder:operator:${rule?.operator as string}`) }}
          />
        }
      />
      <ListItemText
        primary={<Trans i18nKey={'offerOrder:quantity'} components={Boxs} values={{ quantity: rule?.amount }} />}
      />
    </ListItemCustom>
  );
};

export default memo(OfferCategoryFromItem);
