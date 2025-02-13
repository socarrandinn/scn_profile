import { memo, useMemo, useState } from 'react';
import { Box, Collapse, Stack } from '@mui/material';
import CardItem from './CardItem/CardItem';
import ProductStockIcon from '../Icons/ProductStockIcon';
import { useTranslation } from 'react-i18next';
import { ErrorCardItems } from './CardItem/ErrorCardItems';
import { ExpandMoreAction } from './CardItem/styled';
import { ArrowOutward } from '@mui/icons-material';
import { SuccessCardItems } from './CardItem/SuccessCardItems';
import { IStockSuccessData, IStockSummary } from '../../interfaces/IStockSummary';
import WarningIcon from '../Icons/WarningIcon';
type StockImportSummaryProps = {
  summary: IStockSummary | undefined;
  successData: IStockSuccessData;
};

const StockImportSummary = ({ summary, successData }: StockImportSummaryProps) => {
  const { t } = useTranslation('stock');
  const [expanded, setExpanded] = useState<'success' | 'error' | null>(null);

  const openSuccess = useMemo(() => successData?.totalAddition > 0 || successData?.totalReduction > 0, [successData]);
  const openError = useMemo(
    () => successData?.error > 0 || (summary?.summary?.error ?? 0) > 0,
    [successData?.error, summary?.summary?.error],
  );

  const handleExpandClick = (section: 'success' | 'error') => {
    setExpanded((prevSection) => (prevSection === section ? null : section));
  };

  if (!summary && !successData) return <></>;

  return (
    <Box>
      <Stack mt={1} gap={1} flexDirection={{ xs: 'column', sm: 'row' }}>
        <CardItem
          color='success'
          title={t('warehouse.import.summary.success.title')}
          count={successData?.total || 0}
          icon={<ProductStockIcon />}
          action={
            openSuccess && (
              // @ts-ignore
              <ExpandMoreAction
                size='small'
                expand={expanded === 'success'}
                onClick={() => {
                  handleExpandClick('success');
                }}
                aria-expanded={expanded}
                aria-label='show success'
              >
                <ArrowOutward fontSize='small' sx={{ color: '#fff' }} />
              </ExpandMoreAction>
            )
          }
        />
        <CardItem
          color='error'
          title={t('warehouse.import.summary.error.title')}
          count={summary?.summary?.error || successData?.error || 0}
          icon={<WarningIcon />}
          action={
            openError && (
              // @ts-ignore
              <ExpandMoreAction
                size='small'
                expand={expanded === 'error' || !!summary?.showDetail}
                onClick={() => {
                  handleExpandClick('error');
                }}
                aria-expanded={expanded}
                aria-label='show error'
              >
                <ArrowOutward fontSize='small' sx={{ color: '#fff' }} />
              </ExpandMoreAction>
            )
          }
        />
      </Stack>

      <Collapse in={expanded === 'error' || summary?.showDetail} timeout='auto' unmountOnExit>
        <ErrorCardItems summary={summary} successData={successData} />
      </Collapse>
      <Collapse in={expanded === 'success'} timeout='auto' unmountOnExit>
        <SuccessCardItems successData={successData} />
      </Collapse>
    </Box>
  );
};

export default memo(StockImportSummary);
