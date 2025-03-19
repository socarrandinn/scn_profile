import { Button, Grid, Stack, Divider, Alert } from '@mui/material';
import { memo, useCallback, useEffect, useRef } from 'react';
import { FromOperatorSelect } from '../../../common/components/Fields/FromOperatorSelect';
import { FromAsyncSelectProductOffer } from '../FromAsyncSelectProduct';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { isEmpty } from 'lodash';
import OfferProductFromList from './OfferProductFromList';
import { UseFormResetField, UseFormSetError, UseFormWatch, useFieldArray } from 'react-hook-form';
import { IExtendOffer } from '../../interfaces/IExtendOffer';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';
import { IProduct } from 'modules/inventory/common/interfaces';

type OfferProductFromRuleProps = {
  section: boolean;
  control: any;
  watch: UseFormWatch<IExtendOffer>;
  setError: UseFormSetError<IExtendOffer>;
  resetField: UseFormResetField<IExtendOffer>;
  clearErrors: any;
  errors: {
    rulesProducts: {
      value: {
        message: string;
        type: string;
      };
    };
  };
};

const OfferProductFromRule = ({
  section,
  control,
  errors,
  clearErrors,
  watch,
  setError,
  resetField,
}: OfferProductFromRuleProps) => {
  const { t } = useTranslation('offerOrder');
  const name = 'rulesProducts';
  const { fields, append: appendRule, remove: removeRule } = useFieldArray({ control, name: `${name}.value` });

  const alertRef = useRef(null);

  useEffect(() => {
    if (errors?.rulesProducts?.value?.type === 'min' && alertRef.current) {
      // @ts-ignore
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [errors?.rulesProducts?.value?.type]);

  const addProductRule = useCallback(() => {
    const isProduct = isEmpty(watch(`${name}.product_item`));
    const isOperator = isEmpty(watch(`${name}.operator_item`));
    const isQuantity = Number(watch(`${name}.quantity_item`)) <= 0;

    if (isProduct) {
      setError(`${name}.product_item`, { type: 'validate', message: t('error.product.required') });
    } else {
      resetField(`${name}.product_item`, { defaultValue: watch(`${name}.product_item`) });
    }
    if (isOperator) {
      setError(`${name}.operator_item`, { type: 'validate', message: t('error.operator') });
    } else {
      resetField(`${name}.operator_item`, { defaultValue: watch(`${name}.operator_item`) });
    }
    if (isQuantity) {
      setError(`${name}.quantity_item`, { type: 'min', message: t('error.quantity.positive') });
    } else {
      resetField(`${name}.quantity_item`, { defaultValue: watch(`${name}.quantity_item`) });
    }

    if (!isOperator && !isQuantity && !isProduct) {
      appendRule({
        product: (watch(`${name}.product_item`) as unknown as IProduct)?._id,
        quantity: Number(watch(`${name}.quantity_item`)),
        operator: watch(`${name}.operator_item`),
      });
      resetField(`${name}.product_item`, { defaultValue: null });
      resetField(`${name}.quantity_item`, { defaultValue: 0 });
      resetField(`${name}.operator_item`, { defaultValue: OPERATOR_RULE_OFFER_TYPE.EQUAL });

      clearErrors();
    }
  }, [appendRule, t, resetField, setError, watch, clearErrors]);

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12}>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <FromOperatorSelect
              sx={{
                maxWidth: {
                  xs: '100%',
                  md: 300,
                },
              }}
              disabled={!section}
              tpart='offerOrder:operator'
              options={[OPERATOR_RULE_OFFER_TYPE.ALL, OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE]}
              name={`${name}.operator`}
              label={t('sections.product.operator')}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <FromAsyncSelectProductOffer
            label={t('common:product')}
            control={control}
            placeholder={t('sections.product.select')}
            disabled={!section}
            name={`${name}.product_item`}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FromOperatorSelect
            disabled={!section}
            tpart='offerOrder:operator'
            options={[
              OPERATOR_RULE_OFFER_TYPE.EQUAL,
              OPERATOR_RULE_OFFER_TYPE.LESS_THAN,
              OPERATOR_RULE_OFFER_TYPE.GREATER_THAN,
            ]}
            name={`${name}.operator_item`}
            label={t('sections.product.operator')}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <FormTextField
            disabled={!section}
            type='number'
            label={t('offerOrder:quantityItem')}
            name={`${name}.quantity_item`}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            onClick={addProductRule}
            startIcon={<AddOutlinedIcon fontSize='inherit' />}
            variant='contained'
            disabled={!section}
            sx={{
              marginLeft: 'auto',
            }}
          >
            {t('sections.product.action')}
          </Button>
        </Grid>
      </Grid>
      <Divider />

      {errors?.rulesProducts?.value?.type === 'min' ? (
        <Alert ref={alertRef} severity='error'>
          {t(errors?.rulesProducts?.value?.message)}
        </Alert>
      ) : (
        <OfferProductFromList fields={fields} removeRule={removeRule} section={section} />
      )}
    </Stack>
  );
};

export default memo(OfferProductFromRule);
