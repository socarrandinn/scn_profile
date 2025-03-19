import { memo, useCallback } from 'react';
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { UseFieldArrayRemove } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { getFullUrl } from 'utils/index';
import OfferProductListSkeleton from '../OfferProductFrom/OfferProductListSkeleton';

import { ITwoForOneOffer } from '../../interfaces';
import { useFindOneProduct } from 'modules/inventory/product/hooks/useFindOneProduct';
import { TransTypography } from 'components/TransTypography';
import { LongText } from '@dfl/mui-react-common';

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

type Props = {
  removeRule: UseFieldArrayRemove;
  index: number;
  rule: ITwoForOneOffer;
};

const OfferTwoForOneFromItem = ({ removeRule, index, rule }: Props) => {
  const { t } = useTranslation('offerOrder');
  const { data: buyProduct, isLoading } = useFindOneProduct(rule.buyProduct);
  const { data: getProduct, isLoading: isGetLoading } = useFindOneProduct(rule.getProduct);

  const deleteOneCategoryRule = useCallback(() => {
    removeRule(index);
  }, [removeRule, index]);

  if (isLoading || isGetLoading) return <OfferProductListSkeleton />;

  return (
    <ListItemCustom
      alignItems='center'
      secondaryAction={
        <Tooltip title={t('sections.twoForOne.delete')}>
          <IconButton color='error' onClick={deleteOneCategoryRule}>
            <DeleteOutlineOutlinedIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemText
        primary={<Typography sx={{ fontWeight: 600, width: 80 }}>{t(`twoForOneOperator.${rule?.type}`)}</Typography>}
      />
      <ListItemAvatar>
        <ProductMedia
          variant='rounded'
          alt={buyProduct?.name}
          src={getFullUrl(buyProduct?.media?.[0]?.thumb as string)}
        >
          <ShoppingBagOutlinedIcon />
        </ProductMedia>
      </ListItemAvatar>
      <ListItemText
        sx={{
          width: 140,
        }}
        primary={<LongText fontWeight={600} lineClamp={1} maxCharacters={20} text={buyProduct?.name} />}
        secondary={<TransTypography message='offerOrder:product' values={{ count: rule?.buyValue }} />}
      />

      <Divider
        flexItem
        orientation='horizontal'
        sx={{
          width: 150,
          m: 'auto',
          fontWeight: 600,
          ':before, :after': {
            borderTopStyle: 'dashed',
          },
        }}
      >
        {t('sections.twoForOne.recibe')}
      </Divider>

      {/* get product */}
      <ListItemAvatar>
        <ProductMedia
          variant='rounded'
          alt={getProduct?.name}
          src={getFullUrl(getProduct?.media?.[0]?.thumb as string)}
        >
          <ShoppingBagOutlinedIcon />
        </ProductMedia>
      </ListItemAvatar>
      <ListItemText
        sx={{
          width: 140,
          mr: 2,
        }}
        primary={<LongText fontWeight={600} lineClamp={1} maxCharacters={20} text={getProduct?.name} />}
        secondary={<TransTypography message='offerOrder:product' values={{ count: rule?.getValue }} />}
      />
    </ListItemCustom>
  );
};

export default memo(OfferTwoForOneFromItem);
