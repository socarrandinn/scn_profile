import { Fragment, memo } from 'react';
import { IOtherCost, PriceType } from '../../interfaces/IProductPriceDetails';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionDetails, AccordionSummary, Divider, ListItemText, Stack, Typography } from '@mui/material';
import { FlexBox, NumberValue } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { OWNERSHIP_TYPES_MAP } from '../../constants/product-other-cost.enum';
import { ExpandMore } from '@mui/icons-material';

const costOptions = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };

const OtherCostViewMode = ({ otherCosts }: { otherCosts: IOtherCost[] }) => {
  const { t } = useTranslation('provider');

  return (
    <Stack direction='column' spacing={1}>
      <Accordion
        disableGutters
        elevation={0}
        sx={{
          '&:before': { display: 'none' },
          maxWidth: 400,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            justifyContent: 'start',
            padding: '0 !important',
            minHeight: 'auto',
            '& .MuiAccordionSummary-content': {
              margin: 0,
              flexGrow: 0,
            },
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>{t('common:otherCosts')}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: '0 16px',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: '10px',
          }}
        >
          {otherCosts?.map((otherCost: IOtherCost, index) => {
            const type = OWNERSHIP_TYPES_MAP[otherCost?.ownershipType];
            return (
              <Fragment key={index}>
                <FlexBox gap={2} justifyContent={'space-between'}>
                  <ListItemText
                    primary={otherCost?.ownershipType}
                    secondary={
                      <ReactLink to={`/inventory/settings/${type}/${otherCost?.ownership}/general`}>
                        {otherCost?.ownershipName}
                      </ReactLink>
                    }
                  />

                  <Typography sx={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {otherCost?.type === PriceType.FIXED && '$'}
                    <NumberValue value={otherCost?.value} options={costOptions} />
                    {otherCost?.type === PriceType.PERCENT && '%'}
                  </Typography>
                </FlexBox>
                {index < otherCosts.length - 1 && <Divider sx={{ marginT: 1 }} />}
              </Fragment>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default memo(OtherCostViewMode);
