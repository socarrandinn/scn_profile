import { memo, useCallback, useMemo } from 'react';
import { Grid } from '@mui/material';
import { FormTextField, IconButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { UseFieldArrayRemove } from 'react-hook-form';
import { FromOperatorSelect } from '../FromOperatorSelect';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';

type OfferQuantityOrderItemProps = {
  remove: UseFieldArrayRemove;
  index: number;
  name: string;
  quantityOrderSection: boolean;
};

const OfferQuantityOrderItem = ({ remove, index, name, quantityOrderSection }: OfferQuantityOrderItemProps) => {
  const { t } = useTranslation('offerOrder');

  const options = useMemo(
    () => Object.values(OPERATOR_RULE_OFFER_TYPE)?.filter((op) => op.match(/LESS_THAN|GREATER_THAN|EQUAL/)),
    [],
  );

  const deleteQuantityOrderRule = useCallback(() => {
    remove(index);
  }, [remove, index]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FromOperatorSelect
          disabled={quantityOrderSection}
          tpart='offerOrder:operator'
          options={options}
          name={`${name}.${index}.operator`}
          label={t('sections.quantity_orders.operator')}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormTextField
          name={`${name}.${index}.value`}
          label={t('sections.quantity_orders.value')}
          disabled={quantityOrderSection}
          type='number'
        />
      </Grid>
      <Grid xs={12} md={2} mt={1.5} ml={1}>
        <IconButton tooltip={t('common:delete')} disabled={quantityOrderSection} color='error' onClick={deleteQuantityOrderRule}>
          <DeleteOutlineOutlinedIcon fontSize='inherit' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default memo(OfferQuantityOrderItem);
