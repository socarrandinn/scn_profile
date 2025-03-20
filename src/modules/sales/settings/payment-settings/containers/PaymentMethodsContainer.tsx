import { memo } from 'react';
import { useFindPaymentMethods } from '../hooks/useFindPaymentMethods';
import { PaymentMethodCard } from '../components/PaymentMethodCard';
import { Grid } from '@mui/material';
import { IPaymentMethod } from '../interfaces';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { Info } from '@mui/icons-material';
import { useSearchParamsChange } from '@dfl/react-security';
import { PaymentMethodSkeleton } from '../components/PaymentMethodSkeleton';

const PaymentMethodsContainer = () => {
  const { t } = useTranslation('paymentSettings');
  const { data, isLoading } = useFindPaymentMethods();
  const { value } = useSearchParamsChange('edit');

  if (isLoading) return <PaymentMethodSkeleton />;

  return (
    <PagePaperLayout title={t('paymentMethods')}>
      <div className='mt-1 mb-4 flex items-center gap-2'>
        <Info fontSize='small' color='success' />
        {t('paymentMethod.info')}
      </div>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} mb={2}>
        {data?.data?.map((paymentMethod: IPaymentMethod) => {
          const isSelected = paymentMethod?._id === value;
          return (
            <Grid key={paymentMethod?._id} item xs={12} md={4}>
              <PaymentMethodCard selected={isSelected} paymentMethod={paymentMethod} />
            </Grid>
          );
        })}
      </Grid>
    </PagePaperLayout>
  );
};

export default memo(PaymentMethodsContainer);
