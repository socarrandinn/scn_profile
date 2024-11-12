import { FlexBox, NumberValue } from '@dfl/mui-react-common';
import { Stack, Typography, Checkbox, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IDistributionPrice,
  IPriceValue,
  PriceType,
  WarehouseCostConfigDto,
} from '../../interfaces/IProductPriceDetails';
import { ReactLink } from '@dfl/react-security';
import { ExpandMore } from '@mui/icons-material';

const costOptions = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };

interface LogisticViewModeProps {
  data?: IDistributionPrice;
  isLoading?: boolean;
}

const LogisticViewMode = ({ data }: LogisticViewModeProps) => {
  const { t } = useTranslation('warehouse');

  const isChecked = (warehouse: WarehouseCostConfigDto, logistic?: IPriceValue) => {
    return warehouse?.value === logistic?.value;
  };

  return (
    <Stack direction='column' spacing={1}>
      <Typography sx={{ fontWeight: 700 }}>{data?.logistic?.value}</Typography>
      {data?.warehouses?.length ? (
        <Accordion disableGutters elevation={0} sx={{ '&:before': { display: 'none' }, maxWidth: 400, padding: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              padding: 0,
              minHeight: 'auto',
              justifyContent: 'start',
              '& .MuiAccordionSummary-content': {
                margin: 0,
                flexGrow: 0,
              },
              '& .MuiAccordionSummary-expandIconWrapper': {
                marginLeft: '4px',
              },
            }}
          >
            <Typography sx={{ fontWeight: 500 }}>{t('common:warehouses')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction='column' spacing={1}>
              {data?.warehouses?.map((warehouse: WarehouseCostConfigDto, index) => {
                const checked = isChecked(warehouse, data?.logistic);
                return (
                  <FlexBox
                    key={index}
                    maxWidth={400}
                    gap={2}
                    alignItems='center'
                    sx={{
                      border: '0.5px solid',
                      padding: 1,
                      borderRadius: '4px',
                      borderColor: 'divider',
                    }}
                  >
                    <Checkbox checked={checked} sx={{ padding: 0 }} />
                    <ReactLink to={`/inventory/warehouses/${warehouse?.warehouse}/general`}>
                      {warehouse?.warehouseName}
                    </ReactLink>
                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 500 }}>
                      {warehouse?.type === PriceType.FIXED && '$'}
                      <NumberValue value={warehouse?.value} options={costOptions} />
                      {warehouse?.type === PriceType.PERCENT && '%'}
                    </Typography>
                  </FlexBox>
                );
              })}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ) : null}
    </Stack>
  );
};

export default memo(LogisticViewMode);
