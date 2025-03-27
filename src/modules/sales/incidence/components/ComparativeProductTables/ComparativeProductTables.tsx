/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import empty from 'assets/images/incidences/empty-bag.webp';
import { useTranslation } from 'react-i18next';
import BeforeProductsTable from 'modules/sales/incidence/components/BeforeProductsTable/BeforeProductsTable';
import ReplacementProductsTable from 'modules/sales/incidence/components/ReplacementProductsTable/ReplacementProductsTable';

type Props = {
  products?: any[];
};

const ComparativeProductTables = ({ products }: Props) => {
  const { t } = useTranslation('incidence');

  if (!products?.length) {
    return (
      <FlexBox mt={4} alignItems={'center'} justifyContent={'center'}>
        <FlexBox alignItems={'center'} gap={4}>
          <img src={empty} alt='No data' width={110} height={110} />
          <FlexBox flexDirection={'column'} gap={1}>
            <Typography variant='h1' fontSize={24}>
              {t('noProductAddedYet')}
            </Typography>
            <Typography variant='body1'>{t('noProductAddedYetDescription')}</Typography>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    );
  }
  return (
    <Grid container spacing={3} mt={1}>
      <Grid item xs={12} md={6}>
        <BeforeProductsTable products={products} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ReplacementProductsTable products={products} />
      </Grid>
    </Grid>
  );
};

export default memo(ComparativeProductTables);
