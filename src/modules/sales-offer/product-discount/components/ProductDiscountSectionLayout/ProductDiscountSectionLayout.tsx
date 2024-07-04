import { memo } from 'react';
import { OfferPaper } from './styled';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

type ProductDiscountSectionLayoutProps = ChildrenProps & {};

const ProductDiscountSectionLayout = ({ children }: ProductDiscountSectionLayoutProps) => {
  const { t } = useTranslation('productDiscount');
  return (
    <OfferPaper>
      <Typography mb={{ xs: 1, md: 2 }} variant='h2' color='initial'>
        {t('offer')}
      </Typography>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {children}
      </Grid>
    </OfferPaper>
  );
};

export default memo(ProductDiscountSectionLayout);
