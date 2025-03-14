import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError, useDFLForm } from '@dfl/mui-react-common';
import { Divider, FormHelperText, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CausesIncidenceSelect } from 'modules/sales/settings/causes-incidence/components/CausesIncidenceSelect';
import { IncidenceStatusCell } from '../IncidenceStatusCell';
import { INCIDENCE_STATUS } from '../../constants/incidence-status';
import { SelectUser } from 'modules/security/users/components/SelectUser';
import { TermFilter } from '@dofleini/query-builder';

type IncidenceFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const IncidenceForm = ({ error, control, isLoading, onSubmit }: IncidenceFormProps) => {
  const { t } = useTranslation('incidence');
  const { watch } = useDFLForm();
  const selectedParentId = watch?.('cause._id');

  const incidenceFilter = new TermFilter({ field: 'parent', value: null });

  const childIncidenceFilter = new TermFilter({ field: 'parent', value: selectedParentId });

  return (
    <div>
      <Divider sx={{ mb: 2 }} />
      <HandlerError error={error} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <Typography fontWeight={500}>{t('selectIncidence')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <CausesIncidenceSelect required name='cause' label={t('parentIncidence')} filter={incidenceFilter} />
          </Grid>
          {selectedParentId &&
            <Grid item xs={12}>
              <CausesIncidenceSelect
                name='childCause'
                label={t('childIncidence')}
                filter={childIncidenceFilter}
              />
            </Grid>
          }
          <Grid item xs={12}>
            <div className='flex items-center gap-2'>
              <Typography>{t('fields.status')}</Typography>
              <IncidenceStatusCell value={INCIDENCE_STATUS.OPEN} />
              <Typography variant='caption' sx={{ ml: 0.5 }}>*{t('initialStatus')}</Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <SelectUser name='responsive' label={t('assignTo')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              fullWidth
              multiline
              minRows={3}
              name='description'
              label={t('fields.description')}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(IncidenceForm);
