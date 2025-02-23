import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectProviderType } from 'modules/inventory/provider/common/components/FormSections/SelectProviderType';
import { SelectProviderByType } from 'modules/inventory/provider/common/components/ProviderSelectByType';
import { useWatch } from 'react-hook-form';
import { ConciliationAdjustmentCausesSelect } from 'modules/sales/settings/conciliation-adjustment-causes/components/ConciliationAdjustmentCausesSelect';

type ReconciliationAdjustmentFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: any;
  watch: any;
};

const ReconciliationAdjustmentForm = ({
  error,
  control,
  isLoading,
  onSubmit,
  watch,
}: ReconciliationAdjustmentFormProps) => {
  const { t } = useTranslation('reconciliationAdjustment');

  const { providerType } = useWatch({ control });

  return (
    <div>
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form-adjust'} dark>
        <Grid
          container
          spacing={{
            xs: 1,
            md: 2,
          }}
          columns={{
            xs: 4,
            sm: 8,
            md: 12,
          }}
        >
          <Grid item xs={12}>
            <ConciliationAdjustmentCausesSelect required name='causeAdjustment' label={t('fields.causeAdjustment')} />
          </Grid>
          <Grid item xs={6}>
            <FormTextField
              type={'number'}
              fullWidth
              autoFocus
              required
              name='totalAmount'
              label={t('fields.totalAmount')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SelectProviderType required name='providerType' label={t('fields.providerType')} />
          </Grid>
          <Grid item xs={12}>
            <SelectProviderByType
              required
              disabled={!providerType}
              name='provider'
              label={t('fields.provider')}
              helperText={!providerType ? t('provider.providerTypeFirst') : ''}
              type={providerType}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              required
              multiline
              minRows={3}
              name='description'
              label={t('fields.description')}
            />
          </Grid>
          {/*  {data && (
            <FlexBox width={'100%'} justifyContent={'flex-end'} mt={2}>
              <Link href={`/conciliations/${data as string}/products`}>
                <Button variant='outlined'>Conciliación Asociada</Button>
              </Link>
            </FlexBox>
          )} */}
        </Grid>
      </Form>
    </div>
  );
};

export default ReconciliationAdjustmentForm;
