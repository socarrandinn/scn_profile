import { memo } from 'react';
import { Grid, Stack, Button, Divider, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useFieldArray } from 'react-hook-form';
import { FromAsyncSelectProductOffer } from '../FromAsyncSelectProduct';
import { Form, FormTextField } from '@dfl/mui-react-common';
import OfferProductToIncludeList from './OfferProductToIncludeList';
import useProductIncludeForm from 'modules/sales-offer/common/hooks/useProductIncludeForm';

type OfferProductToIncludeFormRuleProps = {
  control: any;
  errors: any;
  name: string;
};

const OfferProductToIncludeFormRule = ({ control: mainControl, errors, name }: OfferProductToIncludeFormRuleProps) => {
  const { t } = useTranslation('offerOrder');
  const { fields, append: appendProduct, remove: removeRule } = useFieldArray({ control: mainControl, name });

  const { control, onSubmit } = useProductIncludeForm(appendProduct);

  return (
    <Form control={control} size={'small'} id={'product-include-form'}>
      <Stack gap={2}>
        <Grid
          container
          spacing={{
            xs: 1,
            md: 2,
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} md={5}>
            <FromAsyncSelectProductOffer
              placeholder={t('sections.productToInclude.product')}
              disabled={false}
              name={'product'}
              label={t('sections.productToInclude.product')}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormTextField name={'quantity'} label={t('sections.productToInclude.quantity')} type='number' />
          </Grid>

          <Grid item xs={12} md={3}>
            <Button
              form='product-include-form'
              onClick={onSubmit}
              startIcon={<AddOutlinedIcon fontSize='inherit' />}
              variant='contained'
              sx={{
                marginRight: 'auto',
              }}
            >
              {t('sections.address.action')}
            </Button>
          </Grid>
        </Grid>
        <Divider />
        {errors?.includeProducts?.type === 'min' ? (
          <Alert severity='error'>{t(errors?.includeProducts?.message)}</Alert>
        ) : (
          <OfferProductToIncludeList fields={fields} removeRule={removeRule} />
        )}
      </Stack>
    </Form>
  );
};

export default memo(OfferProductToIncludeFormRule);
