import { memo } from 'react';
import { List, ListItem, ListItemText, Divider, Stack, styled } from '@mui/material';
import { Trans } from 'react-i18next';
import { PaperSection } from 'components/PaperSection';
import { IListError } from '../../interfaces/IStock';

type ProductOtherStoreStockListProps = {
  listErrors: IListError[];
  title: string;
};

export const ListItemCustom = styled(ListItem)(() => ({
  '& .MuiListItemText-root': {
    flex: 'none',
  },
}));

const ProductOtherStoreStockList = ({ listErrors, title }: ProductOtherStoreStockListProps) => {
  return (
    <PaperSection title={title}>
      <List>
        {listErrors?.map((item: IListError) => (
          <Stack key={item?.record?.code}>
            <ListItemCustom alignItems='center'>
              <ListItemText
                sx={{ width: '50%' }}
                primary={
                  <Trans i18nKey={'product:warehouseStockModal:seeCode'} values={{ stock: item?.record?.code }} />
                }
              />
              <ListItemText
                primary={
                  <Trans i18nKey={'product:warehouseStockModal:seeStock'} values={{ stock: item?.record?.quantity }} />
                }
              />
            </ListItemCustom>
            <Divider />
          </Stack>
        ))}
      </List>
    </PaperSection>
  );
};

export default memo(ProductOtherStoreStockList);
