import { Alert, Button, Divider, Grid, IconButton, Stack, Tooltip } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { FromOperatorSelect } from '../FromOperatorSelect';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { isEmpty } from 'lodash';
import { useFieldArray, UseFormClearErrors, UseFormResetField, UseFormSetError, UseFormWatch } from 'react-hook-form';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import OfferCategoryFromList from './OfferCategoryFromList';
import { FromAsyncSelectCategory } from '../FromAsyncSelectCategory';
import { IExtendOffer } from '../../interfaces/IExtendOffer';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';

type OfferCategoryFromRuleProps = {
  categorySection: boolean;
  control: any;
  index: number;
  remove: any;
  watch: UseFormWatch<IExtendOffer>;
  setError: UseFormSetError<IExtendOffer>;
  resetField: UseFormResetField<IExtendOffer>;
  clearErrors: UseFormClearErrors<IExtendOffer>;
  errors: {
    rulesCategories: [
      {
        value: {
          message: string;
          type: string;
        };
        type: string;
      },
    ];
  };
};

const OfferCategoryFromRule = ({
  categorySection,
  index,
  control,
  remove,
  watch,
  setError,
  resetField,
  errors,
  clearErrors,
}: OfferCategoryFromRuleProps) => {
  const options = useMemo(() => [OPERATOR_RULE_OFFER_TYPE.ALL, OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE], []);
  const { t } = useTranslation('offerOrder');
  const name = 'rulesCategories';
  const { fields, append: appendRule, remove: removeRule } = useFieldArray({ control, name: `${name}.${index}.value` });

  const addCategoryRuleItem = useCallback(() => {
    const isCategory = isEmpty(watch(`${name}.${index}.category`));
    const isOperator = isEmpty(watch(`${name}.${index}.operator_item_rule`));
    const isQuantityPositive = Number(watch(`${name}.${index}.quantityItem`)) <= 0;
    if (isCategory) {
      setError(`${name}.${index}.category`, { type: 'validate', message: t('error.category.required') });
    } else {
      resetField(`${name}.${index}.category`, { defaultValue: watch(`${name}.${index}.category`) });
    }
    if (isOperator) {
      setError(`${name}.${index}.operator_item_rule`, { type: 'validate', message: t('error.operator') });
    } else {
      resetField(`${name}.${index}.operator_item_rule`, { defaultValue: watch(`${name}.${index}.operator_item_rule`) });
    }
    if (isQuantityPositive) {
      setError(`${name}.${index}.quantityItem`, { type: 'required', message: t('error.quantity.positive') });
    } else {
      resetField(`${name}.${index}.quantityItem`, { defaultValue: watch(`${name}.${index}.quantityItem`) });
    }

    if (!isOperator && !isCategory && !isQuantityPositive) {
      appendRule({
        product: watch(`${name}.${index}.category`)?._id,
        quantity: Number(watch(`${name}.${index}.quantityItem`)),
        operator: watch(`${name}.${index}.operator_item_rule`),
      });
      // @ts-ignore
      resetField(`${name}.${index}.category`, { defaultValue: null });
      resetField(`${name}.${index}.quantityItem`, { defaultValue: 0 });
      resetField(`${name}.${index}.operator_item_rule`, { defaultValue: OPERATOR_RULE_OFFER_TYPE.EQUAL });
      clearErrors();
    }
  }, [appendRule, t, watch, resetField, setError, index, clearErrors]);
  const removeProductRule = useCallback(() => {
    remove(index);
  }, [remove, index]);

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12}>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <FromOperatorSelect
              sx={{
                maxWidth: {
                  xs: '100%',
                  md: 300,
                },
              }}
              disabled={!categorySection}
              tpart='offerOrder:operator'
              options={options}
              name={`${name}.${index}.operator`}
              label={t('sections.category.operator')}
            />
            <Tooltip title={t('sections.category.deleteRule')}>
              <IconButton disabled={!categorySection} color='error'>
                <DeleteOutlineOutlinedIcon fontSize='inherit' onClick={removeProductRule} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <FromAsyncSelectCategory
            label={t('common:category')}
            placeholder={t('sections.category.select')}
            disabled={!categorySection}
            name={`${name}.${index}.category`}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FromOperatorSelect
            disabled={!categorySection}
            tpart='offerOrder:operator'
            options={[
              OPERATOR_RULE_OFFER_TYPE.EQUAL,
              OPERATOR_RULE_OFFER_TYPE.LESS_THAN,
              OPERATOR_RULE_OFFER_TYPE.GREATER_THAN,
            ]}
            name={`${name}.${index}.operator_item_rule`}
            label={t('sections.category.operator')}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormTextField
            disabled={!categorySection}
            type='number'
            label={t('offerOrder:quantityItem')}
            name={`${name}.${index}.quantityItem`}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            onClick={addCategoryRuleItem}
            startIcon={<AddOutlinedIcon fontSize='inherit' />}
            variant='contained'
            disabled={!categorySection}
            sx={{
              marginLeft: 'auto',
            }}
          >
            {t('sections.category.action')}
          </Button>
        </Grid>
      </Grid>
      <Divider />

      {errors?.rulesCategories?.[index]?.value?.type === 'min' ? (
        <Alert severity='error'>{t(errors?.rulesCategories?.[index]?.value?.message)}</Alert>
      ) : (
        <OfferCategoryFromList fields={fields} removeRule={removeRule} categorySection={categorySection} />
      )}
    </Stack>
  );
};

export default memo(OfferCategoryFromRule);
