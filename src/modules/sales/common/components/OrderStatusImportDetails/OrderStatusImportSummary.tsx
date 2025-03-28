import { memo, useMemo, useState } from 'react';
import { Box, Collapse, Stack } from '@mui/material';
import CardItem from './CardItem/CardItem';
import { useTranslation } from 'react-i18next';
import { ExpandMoreAction } from './CardItem/styled';
import { ArrowOutward } from '@mui/icons-material';
import { IOrderStatusSuccessData, IOrderStatusSummary } from 'modules/sales/sub-orders/interfaces';
import WarningIcon from 'modules/inventory/product-stock/components/Icons/WarningIcon';
import { ErrorCardItems } from './CardItem/ErrorCardItems';
import CheckIcon from 'modules/inventory/product-stock/components/Icons/CheckIcon';

type OrderStatusImportSummaryProps = {
  summary: IOrderStatusSummary | undefined;
  successData: IOrderStatusSuccessData;
};

const OrderStatusImportSummary = ({ summary, successData }: OrderStatusImportSummaryProps) => {
  const { t } = useTranslation('subOrder');
  const [expanded, setExpanded] = useState<'success' | 'error' | null>(null);

  const openSuccess = useMemo(() => successData?.total > 0, [successData]);
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
          title={t('statusImport.summary.success.title')}
          count={summary?.summary?.total || successData?.total || 0}
          icon={<CheckIcon sx={{ color: '#fff' }}/>}
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
          title={t('statusImport.summary.error.title')}
          count={summary?.summary?.error || successData?.error || 0}
          icon={<WarningIcon sx={{ color: '#fff' }} />}
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
        <ErrorCardItems summary={summary as IOrderStatusSummary} successData={successData} />
      </Collapse>
    </Box>
  );
};

export default memo(OrderStatusImportSummary);
