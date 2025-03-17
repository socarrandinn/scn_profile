import { memo, useCallback } from 'react';
import { useFieldArray, UseFormWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Stack, Button } from '@mui/material';
import OfferCategoryAmountFromRule from './OfferCategoryAmountFromRule';
import { OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_FACT_TYPE } from '../../interfaces/offer.type.enum';
import { AddOutlined } from '@mui/icons-material';

type OfferCategoryFromProps = {
  section: boolean;
  control: any;
  watch: UseFormWatch<any>;
  setError: any;
  resetField: any;
  errors: any;
  clearErrors: any;
};

const OfferCategoryAmountFrom = ({ control, section, errors, clearErrors, ...props }: OfferCategoryFromProps) => {
  const { t } = useTranslation('offerOrder');
  const name = 'rulesAmountsCategory';

  const { fields, append, remove } = useFieldArray({ control, name });

  const addAmountCategoryRule = useCallback(() => {
    append({
      operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
      fact: RULE_OFFER_FACT_TYPE.CATEGORY_PRICE,
      value: 0,
    });
  }, [append]);

  return (
    <Stack gap={3}>
      {fields?.map((amount, index) => (
        <OfferCategoryAmountFromRule key={amount?.id} remove={remove} index={index} name={name} section={!section} />
      ))}

      <Button
        onClick={addAmountCategoryRule}
        startIcon={<AddOutlined fontSize='inherit' />}
        variant='contained'
        disabled={!section}
        sx={{
          marginRight: 'auto',
        }}
      >
        {t('sections.amount.action')}
      </Button>

      {/* {errors?.rulesCategories?.type === 'min' && <Alert severity='error'>{t(errors?.rulesCategories?.message)}</Alert>} */}
    </Stack>
  );
};

export default memo(OfferCategoryAmountFrom);
