import { memo, useState } from 'react';
import { IStockSummary } from '../../interfaces/IStock';
import { Box, Collapse, Stack } from '@mui/material';
import CardItem from './CardItem/CardItem';
import ProductStockIcon from '../Icons/ProductStockIcon';
import { useTranslation } from 'react-i18next';
import { ErrorCardItems } from './CardItem/ErrorCardItems';
import { ExpandMoreAction } from './CardItem/styled';
import { ArrowOutward } from '@mui/icons-material';
import { SuccessCardItems } from './CardItem/SuccessCardItems';
type StockImportSummaryProps = {
  summary: IStockSummary | undefined;
};

const StockImportSummary = ({ summary }: StockImportSummaryProps) => {
  const { t } = useTranslation('stock');
  const [expanded, setExpanded] = useState<'success' | 'error' | null>(null);

  const handleExpandClick = (section: 'success' | 'error') => {
    setExpanded((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <Box>
      <Stack mt={1} gap={1} flexDirection={{ xs: 'column', sm: 'row' }}>
        <CardItem
          color='primary'
          title={t('warehouse.import.summary.success.title')}
          count={266}
          icon={<ProductStockIcon />}
          action={
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
          }
        />
        <CardItem
          color='error'
          title={t('warehouse.import.summary.error.title')}
          count={25}
          icon={<ProductStockIcon />}
          action={
            // @ts-ignore
            <ExpandMoreAction
              size='small'
              expand={expanded === 'error'}
              onClick={() => {
                handleExpandClick('error');
              }}
              aria-expanded={expanded}
              aria-label='show error'
            >
              <ArrowOutward fontSize='small' sx={{ color: '#fff' }} />
            </ExpandMoreAction>
          }
        />
      </Stack>

      <Collapse in={expanded === 'error'} timeout='auto' unmountOnExit>
        <ErrorCardItems />
      </Collapse>
      <Collapse in={expanded === 'success'} timeout='auto' unmountOnExit>
        <SuccessCardItems />
      </Collapse>
    </Box>
  );
};

export default memo(StockImportSummary);
