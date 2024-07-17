import { memo, useCallback } from 'react';
import { Grid, Stack, Button, Divider, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useFieldArray, UseFormWatch, UseFormSetError, UseFormResetField } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { FromAsyncSelectProductOffer } from '../FromAsyncSelectProduct';
import { FormTextField } from '@dfl/mui-react-common';
import OfferProductToIncludeList from './OfferProductToIncludeList';

type OfferProductToIncludeFormRuleProps = {
  control: any;
  watch: UseFormWatch<any>;
  setError: UseFormSetError<any>;
  resetField: UseFormResetField<any>;
  errors: any;
  clearErrors: any;
  setValue: any;
};

const OfferProductToIncludeFormRule = ({
  control,
  watch,
  resetField,
  setError,
  errors,
  clearErrors,
  setValue,
}: OfferProductToIncludeFormRuleProps) => {
  const { t } = useTranslation('offer');
  const name = 'includeProducts';
  const { fields, append, remove: removeRule } = useFieldArray({ control, name });

  const addProductToInclude = useCallback(() => {
    const product = watch('productToInclude');
    const quantity = watch('quantityToInclude');

    if (isEmpty(product)) {
      setError('productToInclude', { type: 'required', message: 'offer:error:productToInclude:product' });
    } else {
      resetField('productToInclude', { defaultValue: product });
    }

    if (isEmpty(quantity)) {
      setError('quantityToInclude', { type: 'required', message: 'offer:error:productToInclude:quantity' });
    } else {
      resetField('quantityToInclude', { defaultValue: quantity });
    }

    if (!isEmpty(product) && !isEmpty(quantity) && isEmpty(errors)) {
      append({
        product: watch('productToInclude')?._id,
        quantity: watch('quantityToInclude'),
      });
      resetField('productToInclude', { defaultValue: null });
      resetField('quantityToInclude', { defaultValue: 0 });
      clearErrors();
    }
  }, [append, resetField, setError, watch, clearErrors]);

  return (
    <Stack gap={2}>
      <Grid
        container
        spacing={{
          xs: 1,
          md: 2,
        }}
      >
        <Grid item xs={12} md={5}>
          <FromAsyncSelectProductOffer
            placeholder={t('sections.productToInclude.product')}
            disabled={false}
            name={'productToInclude'}
            label={t('sections.productToInclude.product')}
            setValue={setValue}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FormTextField name={'quantityToInclude'} label={t('sections.productToInclude.quantity')} type='number' />
        </Grid>

        <Grid item xs={12} md={2}>
          <Button
            onClick={addProductToInclude}
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
  );
};

export default memo(OfferProductToIncludeFormRule);
