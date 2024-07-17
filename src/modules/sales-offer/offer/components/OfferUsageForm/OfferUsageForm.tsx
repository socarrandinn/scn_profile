import { memo, useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Stack, Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useTranslation } from 'react-i18next';
import OfferUsageItem from './OfferUsageItem';
import { OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';

type OfferUsageFormProps = {
  usageSection: boolean;
  control: any;
};

const OfferUsageForm = ({ usageSection, control }: OfferUsageFormProps) => {
  const { t } = useTranslation('offerOrder');
  const name = 'rulesUsages';
  const { fields, append, remove } = useFieldArray({ control, name });

  const addAmountRule = useCallback(() => {
    append({
      operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
      type: RULE_OFFER_TYPE.USAGE,
      value: 0,
    });
  }, [append]);

  return (
    <Stack gap={2}>
      {fields?.map((amount, index) => (
        <OfferUsageItem key={amount?.id} remove={remove} index={index} name={name} usageSection={!usageSection} />
      ))}
      <Button
        onClick={addAmountRule}
        startIcon={<AddOutlinedIcon fontSize='inherit' />}
        variant='contained'
        disabled={!usageSection}
        sx={{
          marginRight: 'auto',
        }}
      >
        {t('sections.amount.action')}
      </Button>
    </Stack>
  );
};

export default memo(OfferUsageForm);
