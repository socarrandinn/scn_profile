import { memo } from 'react';
import { PaymentSettingsCurrency } from '../components/PaymentSettingsCurrency';
import { useFindPaymentMethods } from '../hooks/useFindPaymentMethods';
import { PaymentMethodCard } from '../components/PaymentMethodCard';
import { Grid } from '@mui/material';
import { IPaymentMethod } from '../interfaces';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { Info } from '@mui/icons-material';
import { useTableSelection } from '@dfl/mui-admin-layout';

const PaymentMethodsContainer = () => {
  const { t } = useTranslation('paymentSettings');
  const { data } = useFindPaymentMethods();
  const { selected } = useTableSelection();
  console.log('PaymentMethodsContainer', data);

  return (
    <PagePaperLayout title={t('paymentMethods')}>
      <div className='mt-1 mb-4 flex items-center gap-2'>
        <Info fontSize='small' color='success' />
        Los métodos de pago son las opciones disponibles para que los clientes realicen sus compras en la tienda.
      </div>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} mb={2}>
        {data?.data?.map((paymentMethod: IPaymentMethod) => {
          const isSelected = selected?.includes(paymentMethod?._id);
          return (
            <Grid key={paymentMethod?._id} item xs={12} sm={6} md={4}>
              <PaymentMethodCard selected={isSelected} paymentMethod={paymentMethod} />
            </Grid>
          )
        })}
      </Grid>
    </PagePaperLayout>

  );
};

export default memo(PaymentMethodsContainer);
