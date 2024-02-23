import { memo } from 'react';
import { List, ListItem, ListItemText, Divider, Stack, styled } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { PaperSection } from 'components/PaperSection';
import { IItems } from '../../interfaces/IStock';
import ProductStockName from '../ProductStockList/ProductStockName';

export const ListItemCustom = styled(ListItem)(() => ({
  '& .MuiListItemText-root': {
    flex: 'none',
  },
}));

type ProductSuccessStockListProps = {
  items: IItems[];
};

const ProductSuccessStockList = ({ items }: ProductSuccessStockListProps) => {
  const { t } = useTranslation('product');

  return (
    <PaperSection title={t('productList')}>
      <List dense>
        {items?.map((item: IItems) => (
          <Stack key={item?.item?.name}>
            <ListItemCustom>
              <ProductStockName sx={{ width: '50%' }} product={item?.item} />
              <ListItemText
                primary={<Trans i18nKey={'product:storeStockModal:seeStock'} values={{ stock: item?.stock }} />}
              />
            </ListItemCustom>
            <Divider variant='inset' component='li' />
          </Stack>
        ))}
      </List>
    </PaperSection>
  );
};

export default memo(ProductSuccessStockList);
