import { Grid, Stack, Divider } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { UseFormResetField, UseFormSetError, UseFormClearErrors } from 'react-hook-form';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import { FromPeriodSelect } from 'modules/sales-offer/common/components/Fields/FromPeriodSelect';
import { OPERATOR_RULE_OFFER_TYPE, PERIOD_RULE_OFFER_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { FromOperatorSelect } from 'modules/sales-offer/common/components/Fields/FromOperatorSelect';
import { FormTextField } from '@dfl/mui-react-common';

type OfferClientOrderCountByTimeFormRuleProps = {
  section: boolean;
  control: any;
  name: string;
  setError: UseFormSetError<IExtendOffer>;
  resetField: UseFormResetField<IExtendOffer>;
  clearErrors: UseFormClearErrors<IExtendOffer>;
};

const OfferClientOrderCountByTimeFormRule = ({ section, name }: OfferClientOrderCountByTimeFormRuleProps) => {
  const { t } = useTranslation('offerOrder');

  return (
    <Stack gap={2} sx={{ marginRight: 'auto', width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={3}>
          <FromOperatorSelect
            disabled={true}
            tpart='offerOrder:operator'
            options={[OPERATOR_RULE_OFFER_TYPE.EQUAL]}
            name={`${name}.operator`}
            label={t('sections.category.operator')}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <FormTextField
            disabled={!section}
            type='number'
            label={t('offerOrder:quantityItem')}
            name={`${name}.value.amount`}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FromPeriodSelect
            label={t('offerOrder:period.interval')}
            disabled={!section}
            name={`${name}.value.interval`}
            options={[
              PERIOD_RULE_OFFER_TYPE.WEEK,
              PERIOD_RULE_OFFER_TYPE.MONTH,
              PERIOD_RULE_OFFER_TYPE.BIMESTER,
              PERIOD_RULE_OFFER_TYPE.TRIMESTER,
              PERIOD_RULE_OFFER_TYPE.SEMESTER,
              PERIOD_RULE_OFFER_TYPE.YEAR,
            ]}
          />
        </Grid>
      </Grid>
      <Divider />
    </Stack>
  );
};

export default memo(OfferClientOrderCountByTimeFormRule);
