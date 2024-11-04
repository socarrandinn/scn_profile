import { Table, TableCell, TableHead, TableRow, TableBody } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ProductTableRow from './ProductTableRow';

type ProductStockListProps = {
  items?: any;
  remove: any;
  setError: any;
  update: any;
  warehouse: string;
};

const ProductStockList = ({ items, remove, update, setError, warehouse }: ProductStockListProps) => {
  const { t } = useTranslation('product');

  console.log(items, 'items')

  return (
    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
      <TableHead>
        <TableRow>
          <TableCell>{t('warehouseStockModal.product')}</TableCell>
          <TableCell align='left'>{t('warehouseStockModal.stock')}</TableCell>
          <TableCell align='left'>{t('warehouseStockModal.operation')}</TableCell>
          <TableCell align='left'>{t('warehouseStockModal.cause')}</TableCell>
          <TableCell align='left'>{t('warehouseStockModal.quantity')}</TableCell>
          <TableCell align='left'></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items?.map((row: any, index: number) => (
          <ProductTableRow index={index} item={row} key={row?.id} {...{ remove, update, setError, warehouse }} />
        ))}
      </TableBody>
    </Table>
  );
};

export default memo(ProductStockList);
