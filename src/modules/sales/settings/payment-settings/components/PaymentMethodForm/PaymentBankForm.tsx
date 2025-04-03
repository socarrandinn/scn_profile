import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IBankConfig } from '../../interfaces';
import { TransferCardForm } from '../TransferCardForm';

const PaymentBankForm = ({ data }: { data: IBankConfig[] }) => {
  const { t } = useTranslation('paymentSettings');

  return (
    <>
      <Grid item xs={12}>
        <Typography sx={{ mt: 1 }}>{t('bankSelect')}</Typography>
      </Grid>
      {data?.map((bank, index) => (
        <Grid item xs={12} key={bank?._id}>
          <TransferCardForm data={bank} name={`bankConfig.${index}`} title={bank?.name} />
        </Grid>
      ))}
    </>
  );
};

export default memo(PaymentBankForm);
