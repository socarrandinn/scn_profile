import { memo } from 'react';
import { Button, Stack, styled } from '@mui/material';
import { LongText } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';
import { IWarehouseSupplierNoExist } from 'modules/inventory/product-stock/interfaces/IStockSummary';
import { getFieldValue } from 'modules/inventory/product-stock/utils/stock';
type SupplierNoRelationItemProps = {
  item: IWarehouseSupplierNoExist;
  onOpen: () => void;
};

const ItemContent = styled(Stack)(({ theme }) => ({
  gap: 1,
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  height: 47,
  backgroundColor: theme.palette.grey[100],
  borderRadius: 10,
  padding: '4px 12px 4px 24px',
}));

const SupplierNoRelationItem = ({ item, onOpen }: SupplierNoRelationItemProps) => {
  const { t } = useTranslation('stock');

  return (
    <ItemContent>
      <LongText
        lineClamp={2}
        text={getFieldValue((item?.supplier?.name || item?.supplier) as string, t('emptyValue.notName'))}
      />
      <Button onClick={onOpen} startIcon={<Add />}>
        {t('action.addSupplierRelation')}
      </Button>
    </ItemContent>
  );
};

export default memo(SupplierNoRelationItem);
