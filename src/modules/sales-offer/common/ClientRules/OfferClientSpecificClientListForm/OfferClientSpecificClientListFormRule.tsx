import { Grid, Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { UseFormResetField, UseFormSetError, UseFormClearErrors } from 'react-hook-form';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
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
        <Grid item xs={12}>
          <ClientsSelect multiple label={t('clients:list')} disabled={!section} name={`${name}.value`} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default memo(OfferClientSpecificClientListFormRule);
