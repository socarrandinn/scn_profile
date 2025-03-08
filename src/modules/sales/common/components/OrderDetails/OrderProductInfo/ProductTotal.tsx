import { memo } from 'react';
import { CurrencyValue } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Divider, Stack, Typography } from '@mui/material';
import { ApplyRate } from 'utils/math';
import { IOrderInvoice } from 'modules/sales/common/interfaces/IOrderInvoice';

const ProductTotal = ({ amount, invoice }: { amount: number; invoice?: IOrderInvoice }) => {
  const { t } = useTranslation('subOrder');
  return (
    <Stack
      divider={<Divider sx={{ flexGrow: 1, borderStyle: 'dashed', mx: 2 }} />}
      sx={{
        alignItems: 'center',
        mt: 3,
        flexDirection: 'row',
        px: 1,
      }}
    >
      <Typography fontWeight={'bold'}>{t('subOrder:details.total')}</Typography>
      <CurrencyValue
        value={ApplyRate(amount, invoice?.changeRate)}
        fontWeight={'bold'}
        currency={invoice?.currency || 'USD'}
        fontSize={'inherit'}
      />
    </Stack>
  );
};
export default memo(ProductTotal);
