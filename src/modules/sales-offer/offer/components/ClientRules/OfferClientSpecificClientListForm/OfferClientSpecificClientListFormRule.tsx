import { Grid, Stack, Divider } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { UseFormResetField, UseFormSetError, UseFormClearErrors } from 'react-hook-form';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import { OPERATOR_RULE_OFFER_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import { FromOperatorSelect } from 'modules/sales-offer/common/components/Fields/FromOperatorSelect';
import { ClientsSelect } from 'modules/crm/clients/components/ClientsSelect';

type OfferClientSpecificClientListFormRuleProps = {
  section: boolean;
  control: any;
  name: string;
  setError: UseFormSetError<IExtendOffer>;
  resetField: UseFormResetField<IExtendOffer>;
  clearErrors: UseFormClearErrors<IExtendOffer>;
};

const OfferClientSpecificClientListFormRule = ({ section, name }: OfferClientSpecificClientListFormRuleProps) => {
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

        <Grid item xs={12} md={6}>
          <ClientsSelect label={t('clients:list')} disabled={!section} name={`${name}.value`} />
        </Grid>
      </Grid>
      <Divider />
    </Stack>
  );
};

export default memo(OfferClientSpecificClientListFormRule);
