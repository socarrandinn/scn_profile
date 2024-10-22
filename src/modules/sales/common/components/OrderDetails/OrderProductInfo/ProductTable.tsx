import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { memo } from 'react';
import { CurrencyValue } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { PermissionCheck } from '@dfl/react-security';
import { ApplyRate } from 'utils/math';
import { IOrderProductItem } from 'modules/sales/common/interfaces/IOrderProductItem';
import { ProductItem } from 'modules/inventory/product/components/ProductItem';
import OrderUnitPrice from './OrderUnitPrice';
import { IOrderInvoice } from 'modules/sales/common/interfaces/IOrderInvoice';

const ProductTable = ({ items, invoice }: { items: IOrderProductItem[]; invoice?: IOrderInvoice }) => {
  const { t } = useTranslation('product');

  return (
    <TableContainer>
      <Table sx={{ minWidth: 485 }} aria-label='products table' size='small'>
        <TableHead>
          <TableRow>
            <TableCell>{t('item')}</TableCell>
            <TableCell align='right'>{t('unitPrice')}</TableCell>
            <TableCell align='right'>{t('quantity')}</TableCell>
            <PermissionCheck permissions={'ORDER_VIEW'}>
              <TableCell align='right'>{t('order:amount')}</TableCell>
            </PermissionCheck>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((row, key) => {
            // todo - reimbursement
            /* const fullReimbursed = row?.quantity === row?.reimbursed;
            const partialReimbursed = !!row?.reimbursed && !fullReimbursed; */
            return (
              <TableRow
                // className={classNames({ 'line-through': fullReimbursed })}
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <ProductItem product={row?.productSnapShot} />
                </TableCell>
                <TableCell align='right'>
                  <OrderUnitPrice
                    unitPrice={row?.unitPrice}
                    product={row?.productSnapShot}
                    rate={invoice?.changeRate || 1}
                    currencyClient={invoice?.currency || 'USD'}
                  />
                </TableCell>
                {/* {partialReimbursed && (
                  <TableCell align='center'>
                    <FlexBox gap={1} justifyContent={'center'}>
                      <Typography className='line-through'>{row.quantity}</Typography>
                      {row.quantity - (row.reimbursed || 0)}
                    </FlexBox>
                  </TableCell>
                )} */}
                <TableCell align='right'>{row.quantity}</TableCell>

                <PermissionCheck permissions={'ORDER_VIEW'}>
                  <TableCell align='right'>
                    <CurrencyValue
                      value={ApplyRate(row.price, invoice?.changeRate || 1)}
                      currency={invoice?.currency || 'USD'}
                    />
                  </TableCell>
                </PermissionCheck>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default memo(ProductTable);
