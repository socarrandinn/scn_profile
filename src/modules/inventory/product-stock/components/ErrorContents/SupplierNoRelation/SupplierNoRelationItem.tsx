import { memo, useEffect, useState } from 'react';
import { Button, Stack, styled } from '@mui/material';
import { LongText } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';
import { useSupplierRelationContext } from './hooks/useSupplierNotRelationContext';
import { IWarehouseSupplierNoExist } from 'modules/inventory/product-stock/interfaces/IStockSummary';
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
  const { selected } = useSupplierRelationContext();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (item) {
      const hazExist = selected.some((rel) => rel.supplier === item.supplier.supplierId && item.warehouse.warehouseId);
      setDisabled(hazExist);
    }
  }, [item, selected]);

  return (
    <ItemContent>
      <LongText lineClamp={2} text={item?.supplier?.name || item?.supplier} />
      <Button disabled={disabled} onClick={onOpen} startIcon={<Add />}>
        {t('action.addSupplierRelation')}
      </Button>
    </ItemContent>
  );
};

export default memo(SupplierNoRelationItem);
