import { BarChart, InsertChartOutlinedSharp } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { WarehouseIcon } from 'modules/inventory/common/components/Icons/WarehouseIcon';
import { IProductStockItem, IProductStockResponse } from 'modules/inventory/product-stock/interfaces/IStockResponse';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useInventoryStockSummary } from 'modules/reports/hooks/product/useInventoryStock';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ReportProductInventorySummaryWarehouses = () => {
  const { product } = useProductDetail();
  const { data, isLoading } = useInventoryStockSummary(product?._id as string);
  const stock = data as IProductStockResponse;

  if (isLoading) return <> </>;
  if (stock?.data?.length === 0) return <></>;

  return (
    <Stack gap={2} flexDirection={{ xs: 'column' }}>
      {stock?.data.map((item) => (
        <SummaryWarehouse key={item._id} item={item} />
      ))}
    </Stack>
  );
};

export default memo(ReportProductInventorySummaryWarehouses);

type Props = {
  item: IProductStockItem;
};
const SummaryWarehouse = ({ item }: Props) => {
  const { t } = useTranslation('report');
  return (
    <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap'>
      <CounterBox
        title={item?.warehouseName ?? 'Almacén'}
        value={item?.allStock}
        flexGrow={1}
        currency={false}
        // @ts-ignore
        icon={WarehouseIcon}
        color='primary'
        sx={{ maxWidth: 300, width: '100%' }}
      />
      <CounterBox
        title={t('report.inventory.stockResume.allSold')}
        value={item?.allSold}
        flexGrow={1}
        currency={false}
        icon={BarChart}
        color='info'
      />
      <CounterBox
        title={t('report.inventory.stockResume.reservation')}
        value={item?.reservation}
        flexGrow={1}
        currency={false}
        icon={BarChart}
        color='warning'
      />

      <CounterBox
        title={t('report.inventory.stockResume.available')}
        value={item?.available}
        flexGrow={1}
        currency={false}
        icon={InsertChartOutlinedSharp}
        color='warning'
      />
      <CounterBox
        title={t('report.inventory.stockResume.stock')}
        value={item?.stock}
        flexGrow={1}
        currency={false}
        icon={InsertChartOutlinedSharp}
        color='primary'
      />
    </Stack>
  );
};
