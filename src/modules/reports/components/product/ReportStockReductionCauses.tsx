import { ConditionContainer } from '@dfl/mui-react-common';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import useBarStockReductionCauses from 'modules/reports/containers/product/useBarStockReductionCauses';
import BarCharModal from '../common/ApexChart/bar/BarCharModal';
import { useToggle } from '@dfl/hook-utils';
import { Button } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';

const ReportStockReductionCauses = () => {
  const { series, options, modal } = useBarStockReductionCauses();
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('report');

  const content = useMemo(() => {
    // @ts-ignore
    return <Chart options={options} series={series} type='bar' width='100%' height={400} />;
  }, [options, series]);

  return (
    <>
      <FormPaper
        title={t('report.inventory.charts.stockReductionCauses')}
        actions={
          <Button variant='outlined' onClick={onOpen}>
            {t('common:showMore')}
          </Button>
        }
      >
        <ConditionContainer active={true} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
          {content}
          <BarCharModal
            onClose={onClose}
            open={isOpen}
            title='report:report.inventory.charts.stockReductionCauses'
            {...modal}
          />
        </ConditionContainer>
      </FormPaper>
    </>
  );
};

export default memo(ReportStockReductionCauses);
