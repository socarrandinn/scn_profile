import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { Form, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { Button, Stack } from '@mui/material';
import { PageHeader } from 'components/libs/PageHeader';
import { CenterPageLayout } from 'layouts/index';
import { FormPaper } from 'modules/common/components/FormPaper';
import { mapGetOneErrors } from 'modules/inventory/product/constants/errors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useProductDiscountCreateForm from '../hooks/useProductDiscountCreateForm';
import DiscountValueForm from './ProductDiscountSections/DiscountValueForm';
import GeneralInfoForm from './ProductDiscountSections/GeneralInfoForm';

const mt = {
  xs: 2,
  md: 2,
  xl: 4,
};

const ProductDiscountCreate = () => {
  const { t } = useTranslation('productDiscount');
  const navigate = useNavigate();
  const handleCancel = useCallback(() => {
    navigate('/sales/offers/settings/product_discounts');
  }, [navigate]);

  const { control, onSubmit, isLoading, error, discountType, watch } =
    useProductDiscountCreateForm(handleCancel);
  return (
    <CenterPageLayout maxWidth={1230}>
      <HandlerError error={error} mapErrors={mapGetOneErrors} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'large'} id='product-discount-form' watch={watch} noValidate>
        <PageHeader title={t('create')}>
          <Stack direction={'row'} spacing={2}>
            <LoadingButton variant={'contained'} loading={isLoading} type={'submit'} form='product-discount-form'>
              {t('common:save')}
            </LoadingButton>
            <Button variant={'outlined'} disabled={isLoading} onClick={handleCancel}>
              {t('common:cancel')}
            </Button>
          </Stack>
        </PageHeader>
        <DetailLayout mt={mt} mb={4}>
          <DetailContent ghost sx={{ order: { xs: 2, md: 1 } }}>
            <FormPaper nm title={t('section.general.title')}>
              <GeneralInfoForm />
            </FormPaper>
          </DetailContent>
          <DetailSummary ghost width={{ md: 320, lg: 320, xl: 400 }} sx={{ order: { xs: 1, md: 2 } }}>
            <FormPaper nm title={t('section.discountDetails.title')}>
              <DiscountValueForm priceType={discountType} />
            </FormPaper>
          </DetailSummary>
        </DetailLayout>
      </Form>
    </CenterPageLayout>
  );
};

export default memo(ProductDiscountCreate);
