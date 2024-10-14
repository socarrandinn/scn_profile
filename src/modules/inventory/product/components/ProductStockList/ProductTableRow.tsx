import { memo, useCallback, useEffect } from 'react';
import { TableCell, TableRow, MenuItem, Tooltip, IconButton, Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProductStockNameSkeleton from './ProductStockNameSkeleton';
import ProductStockName from './ProductStockName';
import { FormSelectField, FormTextField } from '@dfl/mui-react-common';
import { map } from 'lodash';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { UseFormSetError, UseFieldArrayUpdate, FieldValues } from 'react-hook-form';
import { CAUSE_TYPE, IAddProductStock } from '../../interfaces/IStock';
import { useFindOneCodeProducts } from '../../hooks/useFindOneCodeProducts';
import { PRODUCT_STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import { IProduct } from '../../interfaces/IProduct';

type ProductTableRowProps = {
  remove: any;
  update: UseFieldArrayUpdate<FieldValues, 'products'>;
  item: any;
  index: number;
  setError: UseFormSetError<IAddProductStock>;
  stores: string;
};

const LoadingSkeleton = <Skeleton variant='text' sx={{ fontSize: '1rem', width: '100%' }} />;

const ProductTableRow = ({ remove, update, item, index, setError, stores }: ProductTableRowProps) => {
  const { t } = useTranslation('product');
  const { data, isLoading, error } = useFindOneCodeProducts(item?.item as string, stores);

  const onDeleteProductStock = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  const updateOperation = useCallback(
    (ev: any) => {
      update(index, {
        ...item,
        operation: ev.target.value,
      });
    },
    [index, item, update],
  );

  const onErrorProduct = useCallback(
    (error: any) => {
      onDeleteProductStock(index);
      if (error?.error === 'NOT_FOUNT') {
        setError('errorProduct', { type: 'required', message: 'product:warehouseStockModal:error:notFound' });
      }
      if (error?.error === 'BAD_REQUEST') {
        setError('errorProduct', { type: 'required', message: 'product:warehouseStockModal:error:badRequest' });
      }
    },
    [onDeleteProductStock, index, setError],
  );

  useEffect(() => {
    if (error) {
      onErrorProduct(error);
    }
    if (data?.data) {
      update(index, {
        item: data?.data?.product,
        stock: data?.data?.stock,
        quantity: item?.quantity,
        operation: item?.operation,
        cause: item?.cause,
      });
    }
  }, [onErrorProduct, error, update, index, data, item]);

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        {isLoading ? <ProductStockNameSkeleton /> : <ProductStockName product={item?.item as IProduct} />}
      </TableCell>
      <TableCell align='center'>{isLoading ? LoadingSkeleton : item?.stock}</TableCell>
      <TableCell width={200} align='left'>
        {isLoading ? (
          LoadingSkeleton
        ) : (
          <FormSelectField
            name={`items.${index}.operation`}
            placeholder={t('selectOperation')}
            onChange={(ev) => {
              updateOperation(ev);
            }}
            required
            // eslint-disable-next-line react/no-children-prop
            children={map(PRODUCT_STOCK_OPERATIONS, (value, key) => (
              <MenuItem key={key} value={value}>
                <>{t(`product.stock.${value}`)}</>
              </MenuItem>
            ))}
          />
        )}
      </TableCell>
      <TableCell width={200} align='left'>
        {isLoading ? (
          LoadingSkeleton
        ) : item?.operation === PRODUCT_STOCK_OPERATIONS.DISCOUNTED ? (
          <FormSelectField
            name={`items.${index}.cause`}
            placeholder={t('cause:title')}
            required
            // eslint-disable-next-line react/no-children-prop
            children={map(CAUSE_TYPE, (value, key) => (
              <MenuItem key={key} value={value}>
                <>{t(`product:cause.${value}`)}</>
              </MenuItem>
            ))}
          />
        ) : (
          <>-</>
        )}
      </TableCell>
      <TableCell align='right'>
        {isLoading ? (
          LoadingSkeleton
        ) : (
          <FormTextField name={`items.${index}.quantity`} placeholder={t('quantity')} type='number' />
        )}
      </TableCell>

      <TableCell width={40} align='right'>
        {isLoading ? (
          <Skeleton variant='circular' sx={{ width: 30, height: 30 }} />
        ) : (
          <Tooltip title={t('warehouseStockModal.deleteProduct')}>
            <IconButton
              onClick={() => {
                onDeleteProductStock(index);
              }}
            >
              <DeleteOutlineOutlinedIcon color='error' fontSize='small' />
            </IconButton>
          </Tooltip>
        )}
      </TableCell>
    </TableRow>
  );
};

export default memo(ProductTableRow);
