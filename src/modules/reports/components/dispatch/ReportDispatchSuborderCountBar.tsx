import { ConditionContainer } from '@dfl/mui-react-common';
import { ChartSkeleton } from 'components/libs/analytic/ChartSkeleton';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { FormPaper } from 'modules/common/components/FormPaper';
import EmptyChart from '../common/EmptyChart/EmptyChart';
import useSimpleBar from '../common/hooks/useSimpleBar';

type Props = {
  categories: string[];
  data: number[];
  title: string;
  serieName?: string;
  isLoading?: boolean;
  colors?: string[];
};

const ReportDispatchSuborderCountBar = ({ categories, data, title, serieName, isLoading, colors }: Props) => {
  const { t } = useTranslation('report');
  const { series, options } = useSimpleBar({ categories, data, serieName, isHorizontal: false, colors });
  const isEmpty = useMemo(() => series?.every((s) => s.data.length === 0), [series]);
  const emptyData = <EmptyChart variant='bar' isLoading={isLoading} />;

  const content = useMemo(() => {
    // @ts-ignore
    return <Chart options={options} series={series} type='bar' width='100%' height={350} />;
  }, [options, series]);

  return (
    <FormPaper nm variant={{ title: 'h1' }} title={t(title)}>
      <ConditionContainer active={true} alternative={<ChartSkeleton icon={<SignalCellularAltOutlinedIcon />} />}>
        {isEmpty ? emptyData : content}
      </ConditionContainer>
    </FormPaper>
  );
};

export default memo(ReportDispatchSuborderCountBar);
