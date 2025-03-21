import { memo, useCallback, useEffect, useRef } from 'react';
import { useFieldArray } from 'react-hook-form';
import { Stack, Button, Alert } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useTranslation } from 'react-i18next';
import OfferQuantityOrderItem from './OfferQuantityOrderItem';
import { OPERATOR_RULE_OFFER_TYPE, RULE_OFFER_FACT_TYPE } from '../../interfaces/offer.type.enum';

type OfferQuantityOrderFormProps = {
  section: boolean;
  control: any;
  errors: any;
};

const OfferQuantityOrderForm = ({ section, control, errors }: OfferQuantityOrderFormProps) => {
  const { t } = useTranslation('offerOrder');
  const name = 'rulesQuantityOrders';
  const { fields, append, remove } = useFieldArray({ control, name });

  const addAmountRule = useCallback(() => {
    append({
      operator: OPERATOR_RULE_OFFER_TYPE.EQUAL,
      fact: RULE_OFFER_FACT_TYPE.QUANTITY_ORDERS,
      value: 0,
    });
  }, [append]);

  const alertRef = useRef(null);
  useEffect(() => {
    if (errors?.rulesQuantityOrders?.type === 'min' && alertRef.current) {
      // @ts-ignore
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [errors?.rulesQuantityOrders?.type]);

  return (
    <Stack gap={2}>
      {fields?.map((amount, index) => (
        <OfferQuantityOrderItem key={amount?.id} remove={remove} index={index} name={name} section={!section} />
      ))}
      <Button
        onClick={addAmountRule}
        startIcon={<AddOutlinedIcon fontSize='inherit' />}
        variant='contained'
        disabled={!section}
        sx={{
          marginRight: 'auto',
        }}
      >
        {t('sections.amount.action')}
      </Button>

      {errors?.rulesQuantityOrders?.type === 'min' && (
        <Alert ref={alertRef} severity='error'>
          {t(errors?.rulesQuantityOrders?.message)}
        </Alert>
      )}
    </Stack>
  );
};

export default memo(OfferQuantityOrderForm);
