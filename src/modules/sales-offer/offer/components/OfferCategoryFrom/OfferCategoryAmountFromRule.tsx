import { Grid, Stack, Divider } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import { UseFormResetField, UseFormSetError, UseFormClearErrors } from 'react-hook-form';
import { IExtendOffer } from '../../interfaces/IExtendOffer';
import FromAsyncSelectCategoryAmount from '../FromAsyncSelectCategory/FromAsyncSelectCategoryAmount';
import { OPERATOR_RULE_OFFER_TYPE } from '../../interfaces/offer.type.enum';
import { FromOperatorSelect } from '../FromOperatorSelect';

type OfferCategoryAmountFromRuleProps = {
  categorySection: boolean;
  control: any;
  name: string;
  setError: UseFormSetError<IExtendOffer>;
  resetField: UseFormResetField<IExtendOffer>;
  clearErrors: UseFormClearErrors<IExtendOffer>;
};

const OfferCategoryAmountFromRule = ({ categorySection, name }: OfferCategoryAmountFromRuleProps) => {
  const { t } = useTranslation('offerOrder');

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={3}>
          <FromOperatorSelect
            disabled={!categorySection}
            tpart='offerOrder:operator'
            options={[
              OPERATOR_RULE_OFFER_TYPE.EQUAL,
              OPERATOR_RULE_OFFER_TYPE.LESS_THAN,
              OPERATOR_RULE_OFFER_TYPE.GREATER_THAN,
            ]}
            name={`${name}.operator`}
            label={t('sections.category.operator')}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormTextField
            disabled={!categorySection}
            type='number'
            label={t('offerOrder:quantityItem')}
            name={`${name}.value.quantity`}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FromAsyncSelectCategoryAmount
            placeholder={t('sections.category.select')}
            disabled={!categorySection}
            name={`${name}.value.category`}
            multiple={true}
          />
        </Grid>
      </Grid>
      <Divider />
    </Stack>
  );
};

export default memo(OfferCategoryAmountFromRule);
