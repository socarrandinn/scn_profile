import { memo } from 'react';
import { CurrencyValue, FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Divider, Typography } from '@mui/material';
import { ApplyRate } from 'utils/math';
import { IOrderInvoice } from 'modules/sales/common/interfaces/IOrderInvoice';

const ProductTotal = ({ amount, invoice }: { amount: number; invoice?: IOrderInvoice }) => {
  const { t } = useTranslation('product');
  return (
    <div>
      <FlexBox alignItems={'center'} px={2} mt={{ xs: 3, md: 0 }}>
        <Typography fontWeight={'bold'} fontSize={'inherit'}>
          {t('order:amount')}
        </Typography>
        <Divider sx={{ flexGrow: 1, borderStyle: 'dashed', mx: 2 }} />
        <CurrencyValue
          value={ApplyRate(amount, invoice?.changeRate || 1)}
          fontWeight={'bold'}
          currency={invoice?.currency || 'USD'}
          fontSize={'inherit'}
        />
      </FlexBox>
    </div>
  );
};
export default memo(ProductTotal);
