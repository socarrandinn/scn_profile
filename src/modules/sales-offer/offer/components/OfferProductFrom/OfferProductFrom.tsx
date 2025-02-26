import { memo, useCallback } from 'react';
import { UseFormWatch, useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import OfferProductFromRule from './OfferProductFromRule';
import { Button, Divider, Stack, Alert } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_FACT_TYPE } from '../../interfaces/offer.type.enum';

type OfferProductFromProps = {
  productSection: boolean;
  control: any;
  watch: UseFormWatch<any>;
  setError: any;
  resetField: any;
  errors: any;
  clearErrors: any;
  setValue: any;
};

const OfferProductFrom = ({
  control,
  productSection,
  errors,
  clearErrors,
  setValue,
  ...props
}: OfferProductFromProps) => {
  const { t } = useTranslation('offerOrder');
  const { fields, append, remove } = useFieldArray({ control, name: 'rulesProducts' });

  const addProductRule = useCallback(() => {
    append({
      operator: OPERATOR_RULE_OFFER_TYPE.ALL,
      fact: RULE_OFFER_FACT_TYPE.PRODUCT,
      value: null,
      quantityItem: 0,
      operator_item_rule: OPERATOR_RULE_OFFER_TYPE.EQUAL,
    });
    clearErrors();
  }, [append, clearErrors]);

  return (
    <Stack gap={3}>
      <Stack divider={<Divider orientation='horizontal' flexItem />} gap={3}>
        {fields?.map((rule, index) => (
          <OfferProductFromRule
            key={rule?.id}
            setValue={setValue}
            control={control}
            clearErrors={clearErrors}
            errors={errors}
            remove={remove}
            productSection={productSection}
            index={index}
            {...props}
          />
        ))}
        {errors?.rulesProducts?.type === 'min' ? (
          <Alert severity='error'>{t(errors?.rulesProducts?.message)}</Alert>
        ) : undefined}
      </Stack>
      <Button
        onClick={addProductRule}
        startIcon={<AddOutlinedIcon fontSize='inherit' />}
        variant='contained'
        disabled={!productSection}
        sx={{
          marginRight: 'auto',
        }}
      >
        {t('sections.amount.action')}
      </Button>
    </Stack>
  );
};

export default memo(OfferProductFrom);
