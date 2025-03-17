import { Grid, Stack } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FormTextField, IconButton } from '@dfl/mui-react-common';

import FromAsyncSelectCategoryAmount from '../FromAsyncSelectCategory/FromAsyncSelectCategoryAmount';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';
import { FromOperatorSelect } from '../../../common/components/Fields/FromOperatorSelect';
import { UseFieldArrayRemove } from 'react-hook-form';
import { DeleteOutlineOutlined } from '@mui/icons-material';

type OfferCategoryAmountFromRuleProps = {
  section: boolean;
  index: number;
  name: string;
  remove: UseFieldArrayRemove;
};

const OfferCategoryAmountFromRule = ({ section, name, index, remove }: OfferCategoryAmountFromRuleProps) => {
  const { t } = useTranslation('offerOrder');

  const deleteAmountRule = useCallback(() => {
    remove(index);
  }, [remove, index]);

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={3}>
          <FromOperatorSelect
            disabled={!section}
            tpart='offerOrder:operator'
            options={[
              OPERATOR_RULE_OFFER_TYPE.EQUAL,
              OPERATOR_RULE_OFFER_TYPE.LESS_THAN,
              OPERATOR_RULE_OFFER_TYPE.GREATER_THAN,
            ]}
            name={`${name}.${index}.operator`}
            label={t('sections.category.operator')}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormTextField
            disabled={!section}
            type='number'
            label={t('offerOrder:quantityItem')}
            name={`${name}.${index}.value.quantity`}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <FromAsyncSelectCategoryAmount
            placeholder={t('sections.category.select')}
            disabled={!section}
            name={`${name}.${index}.value.category`}
            multiple={true}
          />
        </Grid>
        <Grid xs={12} md={1} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={1.5}>
          <IconButton disabled={section} color='error' onClick={deleteAmountRule} tooltip={t('common:delete')}>
            <DeleteOutlineOutlined fontSize='inherit' />
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default memo(OfferCategoryAmountFromRule);
