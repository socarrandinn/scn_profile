import { Button, Grid, Stack, Divider, IconButton, Tooltip, Alert } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import { FromOperatorSelect } from '../FromOperatorSelect';
import { FromAsyncSelectProductOffer } from '../FromAsyncSelectProduct';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { isEmpty } from 'lodash';
import OfferProductFromList from './OfferProductFromList';
import { UseFormResetField, UseFormSetError, UseFormWatch, useFieldArray } from 'react-hook-form';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IExtendOffer } from '../../interfaces/IExtendOffer';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';

type OfferProductFromRuleProps = {
  productSection: boolean;
  control: any;
  index: number;
  remove: any;
  setValue: any;
  watch: UseFormWatch<IExtendOffer>;
  setError: UseFormSetError<IExtendOffer>;
  resetField: UseFormResetField<IExtendOffer>;
  clearErrors: any;
  errors: {
    rulesProducts: [
      {
        value: {
          message: string;
          type: string;
        };
      },
    ];
  };
};

const OfferProductFromRule = ({
  productSection,
  index,
  control,
  remove,
  errors,
  clearErrors,
  watch,
  setValue,
  setError,
  resetField,
}: OfferProductFromRuleProps) => {
  const options = useMemo(() => [OPERATOR_RULE_OFFER_TYPE.ALL, OPERATOR_RULE_OFFER_TYPE.AT_LEAST_ONE], []);
  const { t } = useTranslation('offerOrder');
  const name = 'rulesProducts';
  const { fields, append: appendRule, remove: removeRule } = useFieldArray({ control, name: `${name}.${index}.value` });

  const addProductRule = useCallback(() => {
    const isProduct = isEmpty(watch(`${name}.${index}.product`));
    const isOperator = isEmpty(watch(`${name}.${index}.operator_item_rule`));
    const isQuantity = Number(watch(`${name}.${index}.quantityItem`)) <= 0;

    if (isProduct) {
      setError(`${name}.${index}.product`, { type: 'validate', message: t('error.product.required') });
    } else {
      resetField(`${name}.${index}.product`, { defaultValue: watch(`${name}.${index}.product`) });
    }
    if (isOperator) {
      setError(`${name}.${index}.operator_item_rule`, { type: 'validate', message: t('error.operator') });
    } else {
      resetField(`${name}.${index}.operator_item_rule`, { defaultValue: watch(`${name}.${index}.operator_item_rule`) });
    }
    if (isQuantity) {
      setError(`${name}.${index}.quantityItem`, { type: 'min', message: t('error.quantity.positive') });
    } else {
      resetField(`${name}.${index}.quantityItem`, { defaultValue: watch(`${name}.${index}.quantityItem`) });
    }

    if (!isOperator && !isQuantity && !isProduct) {
      appendRule({
        product: watch(`${name}.${index}.product`)?._id,
        quantity: Number(watch(`${name}.${index}.quantityItem`)),
        operator: watch(`${name}.${index}.operator_item_rule`),
      });
      resetField(`${name}.${index}.product`, { defaultValue: null });
      resetField(`${name}.${index}.quantityItem`, { defaultValue: 0 });
      resetField(`${name}.${index}.operator_item_rule`, { defaultValue: OPERATOR_RULE_OFFER_TYPE.EQUAL });

      clearErrors();
    }
  }, [appendRule, t, resetField, setError, index, watch, clearErrors]);
  const removeProductRule = useCallback(() => {
    remove(index);
  }, [remove, index]);

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
              disabled={!productSection}
              tpart='offerOrder:operator'
              options={options || []}
              name={`${name}.${index}.operator`}
              label={t('sections.product.operator')}
            />
            <Tooltip title={t('sections.product.deleteRule')}>
              <IconButton disabled={!productSection} color='error'>
                <DeleteOutlineOutlinedIcon fontSize='inherit' onClick={removeProductRule} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <FromAsyncSelectProductOffer
            label={t('common:product')}
            control={control}
            placeholder={t('sections.product.select')}
            disabled={!productSection}
            name={`${name}.${index}.product`}
            setValue={setValue}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FromOperatorSelect
            disabled={!productSection}
            tpart='offerOrder:operator'
            options={[
              OPERATOR_RULE_OFFER_TYPE.EQUAL,
              OPERATOR_RULE_OFFER_TYPE.LESS_THAN,
              OPERATOR_RULE_OFFER_TYPE.GREATER_THAN,
            ]}
            name={`${name}.${index}.operator_item_rule`}
            label={t('sections.product.operator')}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <FormTextField
            disabled={!productSection}
            type='number'
            label={t('offerOrder:quantityItem')}
            name={`${name}.${index}.quantityItem`}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            onClick={addProductRule}
            startIcon={<AddOutlinedIcon fontSize='inherit' />}
            variant='contained'
            disabled={!productSection}
            sx={{
              marginLeft: 'auto',
            }}
          >
            {t('sections.product.action')}
          </Button>
        </Grid>
      </Grid>
      <Divider />

      {errors?.rulesProducts?.[index]?.value?.type === 'min' ? (
        <Alert severity='error'>{t(errors?.rulesProducts?.[index]?.value?.message)}</Alert>
      ) : (
        <OfferProductFromList fields={fields} removeRule={removeRule} productSection={productSection} />
      )}
    </Stack>
  );
};

export default memo(OfferProductFromRule);
