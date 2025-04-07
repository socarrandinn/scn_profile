import { FormEventHandler, memo, useMemo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DISPATCH_ERRORS } from '../../constants';
import { LogisticsSelect } from 'modules/inventory/provider/logistics/components/LogisticsSelect';
import { useWatch } from 'react-hook-form';
import { DistributionCentersSelect } from 'modules/inventory/distribution-centers/components/DistributionCentersSelect';
import { InFilter } from '@dofleini/query-builder';

type DispatchFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
  isEdit?: boolean;
};

const DispatchForm = ({ error, control, isLoading, onSubmit, isEdit = false }: DispatchFormProps) => {
  const { t } = useTranslation('dispatch');
  const { logistic } = useWatch({ control });

  const filters = useMemo(() => new InFilter({ field: 'logistic._id', value: [logistic], objectId: true }), [logistic]);

  return (
    <div>
      <HandlerError error={error} errors={DISPATCH_ERRORS} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} noValidate>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {!isEdit && (
            <>
              <Grid item xs={12} mt={2}>
                <LogisticsSelect name='logistic' label={t('logistics:select')} required />
              </Grid>
              <Grid item xs={12}>
                <DistributionCentersSelect
                  disabled={!logistic}
                  name='space'
                  label={t('distributionCenters:select')}
                  fetchOption={{ filters }}
                  required
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(DispatchForm);
