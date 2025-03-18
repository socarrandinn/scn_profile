import { Alert, Button, Divider, Grid, Stack } from '@mui/material';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { FromOperatorSelect } from '../../../common/components/Fields/FromOperatorSelect';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useFieldArray, UseFormClearErrors, UseFormResetField, UseFormSetError, UseFormWatch } from 'react-hook-form';
import { FromAsyncSelectCategory } from '../FromAsyncSelectCategory';
import { IExtendOffer } from '../../interfaces/IExtendOffer';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';
import { isEmpty } from 'lodash';
import OfferCategoryFromList from './OfferCategoryFromList';
import { ICategory } from 'modules/inventory/settings/category/interfaces';

type OfferCategoryFromRuleProps = {
  section: boolean;
  control: any;
  watch: UseFormWatch<IExtendOffer>;
  setError: UseFormSetError<IExtendOffer>;
  resetField: UseFormResetField<IExtendOffer>;
  clearErrors: UseFormClearErrors<IExtendOffer>;
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

const OfferCategoryFromRule = ({
  section,
  control,
  watch,
  setError,
  resetField,
  errors,
  clearErrors,
}: OfferCategoryFromRuleProps) => {
  const options = useMemo(() => [OPERATOR_RULE_OFFER_TYPE.ALL, OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE], []);
  const { t } = useTranslation('offerOrder');
  const name = 'rulesAmountsCategory';
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

  const addCategoryRuleItem = useCallback(() => {
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
  }, [appendRule, t, watch, resetField, setError, clearErrors, name]);

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={4}>
          <FromOperatorSelect
            disabled={!section}
            tpart='offerOrder:operator'
            options={options}
            name={`${name}.operator`}
            label={t('sections.category.operator')}
          />
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={4}>
          <FromAsyncSelectCategory
            label={t('common:category')}
            placeholder={t('sections.category.select')}
            disabled={!section}
            name={`${name}.category_item`}
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
            label={t('sections.category.operator')}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormTextField
            disabled={!section}
            type='number'
            label={t('offerOrder:quantityItem')}
            name={`${name}.amount_item`}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            onClick={addCategoryRuleItem}
            startIcon={<AddOutlinedIcon fontSize='inherit' />}
            variant='contained'
            disabled={!section}
            sx={{
              marginLeft: 'auto',
            }}
          >
            {t('sections.category.action')}
          </Button>
        </Grid>
      </Grid>
      <Divider />

      {errors?.rulesAmountsCategory?.value?.type === 'min' ? (
        <Alert ref={alertRef} severity='error'>
          {t(errors?.rulesAmountsCategory?.value?.message)}
        </Alert>
      ) : (
        <OfferCategoryFromList fields={fields} removeRule={removeRule} section={section} />
      )}
    </Stack>
  );
};

export default memo(OfferCategoryFromRule);
