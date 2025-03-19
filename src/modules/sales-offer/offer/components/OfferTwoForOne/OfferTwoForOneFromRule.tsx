import { Alert, Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { memo, useCallback, useEffect, useRef } from 'react';
import { FromOperatorSelect } from '../../../common/components/Fields/FromOperatorSelect';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useFieldArray, UseFormClearErrors, UseFormResetField, UseFormSetError, UseFormWatch } from 'react-hook-form';
import { IExtendOffer } from '../../interfaces/IExtendOffer';
import { OPERATOR_RULE_OFFER_TYPE, TWO_FOR_ONE_OPERATOR } from '../../interfaces/offer.type.enum';
import { isEmpty } from 'lodash';
import OfferCategoryFromList from './OfferTwoForOneFromList';
import { ICategory } from 'modules/inventory/settings/category/interfaces';
import { FromAsyncSelectProductOffer } from '../FromAsyncSelectProduct';

type Props = {
  control: any;
  watch: UseFormWatch<IExtendOffer>;
  setError: UseFormSetError<IExtendOffer>;
  resetField: UseFormResetField<IExtendOffer>;
  clearErrors: UseFormClearErrors<IExtendOffer>;
  name: string;
  errors: {
    rulesAmountsCategory: {
      value: {
        message: string;
        type: string;
      };
      type: string;
    };
  };
};

const OfferTwoForOneFromRule = ({ control, watch, setError, resetField, errors, clearErrors, name }: Props) => {
  const { t } = useTranslation('offerOrder');

  const {
    fields,
    remove: removeRule,
    append: appendRule,
  } = useFieldArray({
    control,
    name: `${name}.value`,
  });

  const alertRef = useRef(null);

  useEffect(() => {
    if (errors?.rulesAmountsCategory?.value?.type === 'min' && alertRef.current) {
      // @ts-ignore
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [errors?.rulesAmountsCategory?.value?.type]);

  /* const addTowForOneRuleItem = useCallback(() => {
    const isCategory = isEmpty(watch(`${name}.category_item`));
    const isOperator = isEmpty(watch(`${name}.operator_item`));
    const isQuantityPositive = Number(watch(`${name}.amount_item`)) <= 0;
    if (isCategory) {
      setError(`${name}.category_item`, { type: 'validate', message: t('error.category.required') });
    } else {
      resetField(`${name}.category_item`, { defaultValue: watch(`${name}.category_item`) });
    }
    if (isOperator) {
      setError(`${name}.operator_item`, { type: 'validate', message: t('error.operator') });
    } else {
      resetField(`${name}.operator_item`, { defaultValue: watch(`${name}.operator_item`) });
    }
    if (isQuantityPositive) {
      setError(`${name}.amount_item`, { type: 'required', message: t('error.quantity.positive') });
    } else {
      resetField(`${name}.amount_item`, { defaultValue: watch(`${name}.amount_item`) });
    }

    if (!isOperator && !isCategory && !isQuantityPositive) {
      const category = watch(`${name}.category_item`) as unknown as ICategory;
      appendRule({
        category: category?._id,
        amount: Number(watch(`${name}.amount_item`)),
        operator: watch(`${name}.operator_item`),
      });

      resetField(`${name}.category_item`, { defaultValue: null });
      resetField(`${name}.amount_item`, { defaultValue: 0 });
      resetField(`${name}.operator_item`, { defaultValue: OPERATOR_RULE_OFFER_TYPE.EQUAL });
      clearErrors();
    }
  }, [appendRule, t, watch, resetField, setError, clearErrors, name]); */

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Stack
        sx={{
          gap: 2,
          flexDirection: { md: 'row' },
        }}
      >
        <Box width={'100%'}>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12} md={3}>
              <FromOperatorSelect
                tpart='offerOrder:twoForOneOperator'
                options={[TWO_FOR_ONE_OPERATOR.EVERY, TWO_FOR_ONE_OPERATOR.MORE_THAN]}
                name={`${name}.operator_item`}
                label={t('sections.category.operator')}
                defaultValue={TWO_FOR_ONE_OPERATOR.EVERY}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormTextField type='number' label={t('sections.twoForOne.count')} name={`${name}.buyValue_item`} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FromAsyncSelectProductOffer
                label={t('common:product')}
                control={control}
                placeholder={t('sections.product.select')}
                name={`${name}.buyProduct_item`}
              />
            </Grid>
          </Grid>
        </Box>
        <Box width={'100%'}>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12} md={6} display='flex' flexDirection='row' alignItems='center' gap={2}>
              <Typography variant='h2'>{t('sections.twoForOne.recibe')}</Typography>
              <FormTextField type='number' label={t('sections.twoForOne.count')} name={`${name}.getValue_item`} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FromAsyncSelectProductOffer
                label={t('common:product')}
                control={control}
                placeholder={t('sections.product.select')}
                name={`${name}.getProduct_item`}
              />
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                // onClick={addTowForOneRuleItem}
                startIcon={<AddOutlinedIcon fontSize='inherit' />}
                variant='contained'
              >
                {t('sections.category.action')}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
      <Divider />

      {errors?.rulesAmountsCategory?.value?.type === 'min' ? (
        <Alert ref={alertRef} severity='error'>
          {t(errors?.rulesAmountsCategory?.value?.message)}
        </Alert>
      ) : (
        <OfferCategoryFromList fields={fields} removeRule={removeRule} />
      )}
    </Stack>
  );
};

export default memo(OfferTwoForOneFromRule);
