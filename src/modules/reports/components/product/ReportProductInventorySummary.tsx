import { BarChart, InsertChartOutlinedSharp } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { WarehouseIcon } from 'modules/inventory/common/components/Icons/WarehouseIcon';
import { IProductStockItem, IProductStockResponse } from 'modules/inventory/product-stock/interfaces/IStockResponse';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useInventoryStockSummary } from 'modules/reports/hooks/product/useInventoryStock';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ReportProductInventorySummary = () => {
  const { t } = useTranslation('report');
  const { product } = useProductDetail();
  const { data, isLoading } = useInventoryStockSummary(product?._id as string);
  const stock = data as IProductStockResponse;

  return (
    <Stack gap={{ xs: 1, md: 2 }} mb={{ xs: 1, md: 2 }}>
      <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap'>
        <CounterBox
          title={t('report.inventory.stockResume.allStock')}
          value={stock?.stockResume?.allStock}
          flexGrow={1}
          currency={false}
          icon={BarChart}
          color='primary'
          loading={isLoading}
          variant='contented'
          sx={{ maxWidth: 300, width: '100%' }}
        />
        <CounterBox
          title={t('report.inventory.stockResume.allSold')}
          value={stock?.stockResume?.allSold}
          flexGrow={1}
          currency={false}
          icon={BarChart}
          color='info'
          variant='contented'
        />
        <CounterBox
          title={t('report.inventory.stockResume.reservation')}
          value={stock?.stockResume?.reservation}
          flexGrow={1}
          currency={false}
          icon={BarChart}
          color='warning'
          variant='contented'
        />

        <CounterBox
          title={t('report.inventory.stockResume.available')}
          value={stock?.stockResume?.available}
          flexGrow={1}
          currency={false}
          icon={InsertChartOutlinedSharp}
          color='warning'
          variant='contented'
        />
        <CounterBox
          title={t('report.inventory.stockResume.stock')}
          value={stock?.stockResume?.stock}
          flexGrow={1}
          currency={false}
          icon={InsertChartOutlinedSharp}
          color='primary'
          variant='contented'
        />
      </Stack>
      {stock?.data?.length > 0 && (
        <Stack gap={2} flexDirection={{ xs: 'column' }}>
          {stock?.data.map((item) => (
            <SummaryWarehouse key={item._id} item={item} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default memo(ReportProductInventorySummary);

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
