import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PermissionCheck } from '@dfl/react-security';
import { IOrderOfferItem } from 'modules/sales/common/interfaces/IOrderOfferItem';

const ProductForOfferTable = ({ items }: { items: IOrderOfferItem[] }) => {
  const { t } = useTranslation('product');

  return (
    <TableContainer>
      <Table sx={{ minWidth: 485 }} aria-label='products table' size='small'>
        <TableHead>
          <TableRow>
            <TableCell>{t('item')}</TableCell>

            <PermissionCheck permissions={'ORDER_VIEW'}>
              <TableCell align='right'>{t('order:amount')}</TableCell>
            </PermissionCheck>
          </TableRow>
        </TableHead>

        <TableBody>
          {items?.map((row) => {
            return (
              <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {/* <TableCell component='th' scope='row'>
                  <ProductForOfferItem product={row?.snapShot} />
                </TableCell>
                <PermissionCheck permissions={'ORDER_VIEW'}>
                  <TableCell align='right'>
                    <CurrencyValue value={row.snapShot.price} />
                  </TableCell>
                </PermissionCheck> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default memo(ProductForOfferTable);
