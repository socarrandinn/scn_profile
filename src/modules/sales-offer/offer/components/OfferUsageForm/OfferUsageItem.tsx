import { memo, useCallback, useMemo } from 'react';
import { IconButton, Grid } from '@mui/material';
import { FormTextField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { UseFieldArrayRemove } from 'react-hook-form';
import { FromOperatorSelect } from '../FromOperatorSelect';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';

type OfferAmountItemProps = {
  remove: UseFieldArrayRemove;
  index: number;
  name: string;
  usageSection: boolean;
};

const OfferAmountItem = ({ remove, index, name, usageSection }: OfferAmountItemProps) => {
  const { t } = useTranslation('offer');

  const options = useMemo(
    () => Object.values(OPERATOR_RULE_OFFER_TYPE)?.filter((op) => op.match(/LESS_THAN|GREATER_THAN|EQUAL/)),
    [],
  );

  const deleteUsageRule = useCallback(() => {
    remove(index);
  }, [remove, index]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FromOperatorSelect
          disabled={usageSection}
          tpart='offer:operator'
          options={options}
          name={`${name}.${index}.operator`}
          label={t('sections.usage.operator')}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormTextField
          name={`${name}.${index}.value`}
          label={t('sections.usage.value')}
          disabled={usageSection}
          type='number'
        />
      </Grid>
      <Grid xs={12} md={2} mt={1.5} ml={1}>
        <IconButton disabled={usageSection} color='error' onClick={deleteUsageRule}>
          <DeleteOutlineOutlinedIcon fontSize='inherit' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default memo(OfferAmountItem);
