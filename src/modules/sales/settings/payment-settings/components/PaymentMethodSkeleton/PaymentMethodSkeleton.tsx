import { Grid, Skeleton } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';

export const PaymentMethodSkeleton = () => {
  return (
    <FormPaper
      title={<Skeleton height={40} variant='text' width={300} />}
      sx={{ padding: { xs: 1, md: '20px' } }}
      mbHeader={'5px !important'}
    >
      <Skeleton height={30} width={700} sx={{ mb: 2 }} />
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {[...Array(3)].map((_, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Skeleton variant='rounded' height={261} sx={{ borderRadius: '10px' }} />
          </Grid>
        ))}
      </Grid>
    </FormPaper>
  );
};
