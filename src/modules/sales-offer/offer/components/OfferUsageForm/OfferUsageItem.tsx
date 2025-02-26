import { memo, useCallback, useMemo } from 'react';
import { Grid } from '@mui/material';
import { FormTextField, IconButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { UseFieldArrayRemove } from 'react-hook-form';
import { FromOperatorSelect } from '../../../common/components/Fields/FromOperatorSelect';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';

type OfferAmountItemProps = {
  remove: UseFieldArrayRemove;
  index: number;
  name: string;
  section: boolean;
};

const OfferAmountItem = ({ remove, index, name, section }: OfferAmountItemProps) => {
  const { t } = useTranslation('offerOrder');

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
          disabled={section}
          tpart='offerOrder:operator'
          options={options}
          name={`${name}.${index}.operator`}
          label={t('sections.usage.operator')}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormTextField
          name={`${name}.${index}.value`}
          label={t('sections.usage.value')}
          disabled={section}
          type='number'
        />
      </Grid>
      <Grid xs={12} md={2} mt={1.5} ml={1}>
        <IconButton tooltip={t('common:delete')} disabled={section} color='error' onClick={deleteUsageRule}>
          <DeleteOutlineOutlinedIcon fontSize='inherit' />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default memo(OfferAmountItem);
