import { Table, TableCell, TableHead, TableRow, TableBody } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ProductTableRow from './ProductTableRow';

type ProductStockListProps = {
  items?: any;
  remove: any;
  setError: any;
  update: any;
  stores: string;
};

const ProductStockList = ({ items, remove, update, setError, stores }: ProductStockListProps) => {
  const { t } = useTranslation('product');

  return (
    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
      <TableHead>
        <TableRow>
          <TableCell>{t('storeStockModal.product')}</TableCell>
          <TableCell align='left'>{t('storeStockModal.stock')}</TableCell>
          <TableCell align='left'>{t('storeStockModal.operation')}</TableCell>
          <TableCell align='left'>{t('storeStockModal.cause')}</TableCell>
          <TableCell align='left'>{t('storeStockModal.quantity')}</TableCell>
          <TableCell align='left'></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items?.map((row: any, index: number) => (
          <ProductTableRow index={index} item={row} key={row?.id} {...{ remove, update, setError, stores }} />
        ))}
      </TableBody>
    </Table>
  );
};

export default memo(ProductStockList);
