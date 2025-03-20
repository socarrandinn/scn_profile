import React, { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import FormSelectCountry from 'components/fields/FormSelectCountry';

type BankFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const BankForm = ({ error, control, isLoading, onSubmit }: BankFormProps) => {
  const { t } = useTranslation('bank');

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth autoFocus required name={'name'} label={t('common:name')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CurrencySelect
              required
              name={'currency'}
              label={t('order:invoice.currency')}
              placeholder={t('order:invoice.currency')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth name={'alias'} label={t('fields.alias')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField multiline minRows={3} fullWidth name={'description'} label={t('fields.description')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormSelectCountry name={'address.country'} label={t('common:country')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth name={'address.state'} label={t('common:province')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth name={'address.city'} label={t('common:municipality')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField required fullWidth name={'ibanNumber'} label={t('fields.ibanNumber')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField required fullWidth name={'swiftBIC'} label={t('fields.swiftBIC')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth name={'branchHolder'} label={t('fields.branchHolder')} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormTextField fullWidth name={'branch'} label={t('fields.branch')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(BankForm);
