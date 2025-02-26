import { memo, useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Stack, Button } from '@mui/material';
import OfferAmountItem from './OfferAmountItem';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useTranslation } from 'react-i18next';
import { OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_FACT_TYPE } from '../../interfaces/offer.type.enum';

type OfferAmountCategoryFromProps = {
  amountSection: boolean;
  control: any;
};

const OfferAmountCategoryFrom = ({ amountSection, control }: OfferAmountCategoryFromProps) => {
  const { t } = useTranslation('offerOrder');
  const name = 'rulesAmountsCategory';
  const { fields, append, remove } = useFieldArray({ control, name });

  const addAmountRule = useCallback(() => {
    append({
      operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
      fact: RULE_OFFER_FACT_TYPE.AMOUNT,
      value: 0,
    });
  }, [append]);

  return (
    <Stack gap={2}>
      {fields?.map((amount, index) => (
        <OfferAmountItem key={amount?.id} remove={remove} index={index} name={name} amountSection={!amountSection} />
      ))}
      <Button
        onClick={addAmountRule}
        startIcon={<AddOutlinedIcon fontSize='inherit' />}
        variant='contained'
        disabled={!amountSection}
        sx={{
          marginRight: 'auto',
        }}
      >
        {t('sections.amount.action')}
      </Button>
    </Stack>
  );
};

export default memo(OfferAmountCategoryFrom);
