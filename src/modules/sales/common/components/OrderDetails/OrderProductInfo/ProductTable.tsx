import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { memo, useMemo } from 'react';
import { CurrencyValue } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { PermissionCheck } from '@dfl/react-security';
import { ApplyRate } from 'utils/math';
import { IOrderProductItem } from 'modules/sales/common/interfaces/IOrderProductItem';
import OrderUnitPrice from './OrderUnitPrice';
import { IOrderInvoice } from 'modules/sales/common/interfaces/IOrderInvoice';
import { AvatarNameCell } from 'modules/common/components/AvatarNameCell';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { ORDER_TYPE_ENUM } from 'modules/sales/common/constants/order.enum';

const ProductTable = ({ items, invoice }: { items: IOrderProductItem[]; invoice?: IOrderInvoice }) => {
  const { t } = useTranslation('product');
  const { orderType } = useOrderContext();
  const isSubOrder = useMemo(() => orderType === ORDER_TYPE_ENUM.SUB_ORDER, [orderType]);

  return (
    <TableContainer>
      <Table sx={{ minWidth: 485 }} aria-label='products table' size='small'>
        <TableHead>
          <TableRow>
            <TableCell width={50}>{t('fields.image')}</TableCell>
            <TableCell>{t('fields.name')}</TableCell>
            <TableCell align='right'>{t('unitPrice')}</TableCell>
            <TableCell align='right'>{t('quantity')}</TableCell>
            {!isSubOrder && (
              <PermissionCheck permissions={'ORDER_VIEW'}>
                <TableCell align='right'>{t('subOrder:details.total')}</TableCell>
              </PermissionCheck>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((row, key) => {
            return (
              <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  <AvatarNameCell
                    link={`/inventory/products/${row?.productSnapShot?._id}/general`}
                    variant={'rounded'}
                    image={row?.productSnapShot?.media?.[0]}
                  />
                </TableCell>
                <TableCell component='th' scope='row'>
                  <AvatarNameCell
                    link={`/inventory/products/${row?.productSnapShot?._id}/general`}
                    hideImage
                    // @ts-ignore
                    name={row?.productSnapShot?.name?.es || row?.productSnapShot?.name}
                    secondary={row?.productSnapShot?.code}
                  />
                </TableCell>
                <TableCell align='right'>
                  <OrderUnitPrice
                    unitPrice={row?.unitPrice}
                    product={row?.productSnapShot}
                    rate={invoice?.changeRate || 1}
                    currencyClient={invoice?.currency || 'USD'}
                  />
                </TableCell>

                <TableCell align='right'>{row.quantity}</TableCell>

                {!isSubOrder && (
                  <PermissionCheck permissions={'ORDER_VIEW'}>
                    <TableCell align='right'>
                      <CurrencyValue
                        value={ApplyRate(row.price, invoice?.changeRate || 1)}
                        currency={invoice?.currency || 'USD'}
                      />
                    </TableCell>
                  </PermissionCheck>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default memo(ProductTable);
