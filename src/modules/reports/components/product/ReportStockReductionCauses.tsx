import { ConditionContainer } from '@dfl/mui-react-common';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import BarCharModal from '../common/ApexChart/bar/BarCharModal';
import { useToggle } from '@dfl/hook-utils';
import { Button } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import useMultiBar from '../common/hooks/useMultiBar';

type Props = {
  categories: string[];
  data: number[];
  title: string;
};
const ReportStockReductionCauses = ({ categories, data, title }: Props) => {
  const { series, options, modal } = useMultiBar({ categories, data });
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('report');

  const content = useMemo(() => {
    // @ts-ignore
    return <Chart options={options} series={series} type='bar' width='100%' height={350} />;
  }, [options, series]);

  return (
    <>
      <FormPaper
        nm
        variant={{ title: 'h1' }}
        title={t(title)}
        actions={
          modal?.height ? (
            <Button variant='outlined' onClick={onOpen}>
              {t('common:showMore')}
            </Button>
          ) : (
            <></>
          )
        }
      >
        <ConditionContainer active={true} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
          {content}
          <BarCharModal onClose={onClose} open={isOpen} title={title} {...modal} />
        </ConditionContainer>
      </FormPaper>
    </>
  );
};

export default memo(ReportStockReductionCauses);
