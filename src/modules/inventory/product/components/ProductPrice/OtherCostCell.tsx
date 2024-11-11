import { memo } from 'react';
import { IOtherCost, PriceType } from '../../interfaces/IProductPriceDetails';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionDetails, AccordionSummary, InputAdornment, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { FlexBox, NumberValue } from '@dfl/mui-react-common';
import { ReactLink } from '@dfl/react-security';
import { OWNERSHIP_TYPES_MAP } from '../../constants/product-other-cost.enum';
import { ExpandMore } from '@mui/icons-material';

const costOptions = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };

const tableCellSx = {
  width: { xs: 170, md: 158 },
  color: '#616161',
};

const OtherCostViewMode = ({ otherCosts }: { otherCosts: IOtherCost[] }) => {
  const { t } = useTranslation('provider');

  return (
    <TableContainer>
      <Table aria-label='simple table'>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, verticalAlign: 'top !important' }}>
            <TableCell component='th' scope='row' sx={tableCellSx}>
              {t('product:section.prices.otherCost')}
            </TableCell>
            <TableCell>
              <Stack direction='column' spacing={1}>
                <Accordion disableGutters elevation={0} sx={{
                  '&:before': { display: 'none' }, maxWidth: 400
                }}>
                  <AccordionSummary expandIcon={<ExpandMore />}
                    sx={{
                      justifyContent: 'start',
                      minHeight: 'auto',
                      '& .MuiAccordionSummary-content': {
                        margin: 0,
                        flexGrow: 0
                      },
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        marginLeft: '4px'
                      }
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>{t('common:otherCosts')}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {otherCosts?.map((otherCost: IOtherCost, index) => {
                      const type = OWNERSHIP_TYPES_MAP[otherCost?.ownershipType]
                      return (
                        <FlexBox
                          maxWidth={400}
                          key={index}
                          gap={2}
                          justifyContent={'space-between'}
                          sx={{
                            border: '0.5px solid',
                            padding: 1,
                            borderRadius: '4px',
                            borderColor: 'divider'
                          }}
                        >
                          <FlexBox>
                            <Typography sx={{ width: '80px', borderRight: '0.5px solid', borderRightColor: 'divider' }}>
                              {t(otherCost?.ownershipType)}
                            </Typography>
                            <ReactLink to={`/inventory/settings/${type}/${otherCost?.ownership}/general`} sx={{ ml: 2 }}>
                              {otherCost?.ownershipName}
                            </ReactLink>
                          </FlexBox>
                          <Typography sx={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {otherCost?.type === PriceType.FIXED && `$`}
                            <NumberValue value={otherCost?.value} options={costOptions} />
                            {otherCost?.type === PriceType.PERCENT && `%`}
                          </Typography>
                        </FlexBox>
                      )
                    })}
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(OtherCostViewMode);
