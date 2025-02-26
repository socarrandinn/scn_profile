import { memo, useCallback } from 'react';
import { UseFormWatch, useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import OfferCategoryFromRule from './OfferCategoryFromRule';
import { Button, Divider, Stack, Alert } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_FACT_TYPE } from '../../interfaces/offer.type.enum';
import { ICategory } from 'modules/inventory/product/interfaces/IProductCreate';

type OfferCategoryFromProps = {
  categorySection: boolean;
  control: any;
  watch: UseFormWatch<any>;
  setError: any;
  resetField: any;
  errors: any;
  clearErrors: any;
};

const OfferCategoryFrom = ({ control, categorySection, errors, clearErrors, ...props }: OfferCategoryFromProps) => {
  const { t } = useTranslation('offerOrder');
  const { fields, append, remove } = useFieldArray({ control, name: 'rulesCategories' });

  const addCategoryRule = useCallback(() => {
    append({
      operator: OPERATOR_RULE_OFFER_TYPE.ALL,
      fact: RULE_OFFER_FACT_TYPE.CATEGORY,
      value: [],
      // @ts-ignore
      category: {} satisfies ICategory,
      quantityItem: 0,
      operator_item_rule: OPERATOR_RULE_OFFER_TYPE.EQUAL,
    });
    clearErrors();
  }, [append, clearErrors]);

  return (
    <Stack gap={3}>
      <Stack divider={<Divider orientation='horizontal' flexItem />} gap={3}>
        {fields?.map((rule, index) => (
          <OfferCategoryFromRule
            key={rule?.id}
            control={control}
            errors={errors}
            clearErrors={clearErrors}
            remove={remove}
            categorySection={categorySection}
            index={index}
            {...props}
          />
        ))}

        {errors?.rulesCategories?.type === 'min' && (
          <Alert severity='error'>{t(errors?.rulesCategories?.message)}</Alert>
        )}
      </Stack>
      <Button
        onClick={addCategoryRule}
        startIcon={<AddOutlinedIcon fontSize='inherit' />}
        variant='contained'
        disabled={!categorySection}
        sx={{
          marginRight: 'auto',
        }}
      >
        {t('sections.amount.action')}
      </Button>
    </Stack>
  );
};

export default memo(OfferCategoryFrom);
