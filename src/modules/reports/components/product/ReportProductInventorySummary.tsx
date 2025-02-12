import { BarChart, InsertChartOutlinedSharp } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { CounterBox } from 'components/libs/analytic/CounterBox';
import { IProductStockResponse } from 'modules/inventory/product-stock/interfaces/IStockResponse';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { useFindWarehouseStockByProductId } from 'modules/inventory/warehouse/hooks/useFindWarehouseStockByProductId';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ReportProductInventorySummary = () => {
  const { t } = useTranslation('report');
  const { product } = useProductDetail();
  const { data, isLoading } = useFindWarehouseStockByProductId(product?._id as string);
  const stock = data as IProductStockResponse;

  return (
    <Stack gap={2} flexDirection={{ xs: 'column', md: 'row' }} flexWrap='wrap'>
      <CounterBox
        title={t('report.inventory.stockResume.allStock')}
        value={stock?.stockResume?.allStock}
        flexGrow={1}
        currency={false}
        icon={BarChart}
        color='primary'
        isLoading={isLoading}
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
  );
};

export default memo(ReportProductInventorySummary);
