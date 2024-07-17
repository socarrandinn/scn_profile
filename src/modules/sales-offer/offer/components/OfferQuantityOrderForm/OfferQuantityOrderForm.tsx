import { memo, useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Stack, Button } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useTranslation } from 'react-i18next';
import OfferQuantityOrderItem from './OfferQuantityOrderItem';
import { OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';

type OfferQuantityOrderFormProps = {
  quantityOrderSection: boolean;
  control: any;
};

const OfferQuantityOrderForm = ({ quantityOrderSection, control }: OfferQuantityOrderFormProps) => {
  const { t } = useTranslation('offer');
  const name = 'rulesQuantityOrders';
  const { fields, append, remove } = useFieldArray({ control, name });

  const addAmountRule = useCallback(() => {
    append({
      operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
      type: RULE_OFFER_TYPE.QUANTITY_ORDERS,
      value: 0,
    });
  }, [append]);

  return (
    <Stack gap={2}>
      {fields?.map((amount, index) => (
        <OfferQuantityOrderItem
          key={amount?.id}
          remove={remove}
          index={index}
          name={name}
          quantityOrderSection={!quantityOrderSection}
        />
      ))}
      <Button
        onClick={addAmountRule}
        startIcon={<AddOutlinedIcon fontSize='inherit' />}
        variant='contained'
        disabled={!quantityOrderSection}
        sx={{
          marginRight: 'auto',
        }}
      >
        {t('sections.amount.action')}
      </Button>
    </Stack>
  );
};

export default memo(OfferQuantityOrderForm);
