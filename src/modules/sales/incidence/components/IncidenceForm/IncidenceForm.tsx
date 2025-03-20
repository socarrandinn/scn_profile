import { memo, useMemo } from 'react';
import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { FormHelperText, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IncidenceStatusCell } from '../IncidenceStatusCell';
import { INCIDENCE_STATUS } from '../../constants/incidence-status';
import { SelectUser } from 'modules/security/users/components/SelectUser';
import { CausesIncidenceCustomSelect } from 'modules/sales/settings/causes-incidence/components/CausesIncidenceCustomSelect';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';
import FileDropZone, { TYPE_DROP } from 'components/FileDropZone/FileDropZone';
import { ACCEPT_ALL, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';

const IncidenceForm = () => {
  const { t } = useTranslation('incidence');
  const { watch, control, formState } = useDFLForm();
  const cause: ICausesIncidence = watch?.('cause');
  const filters = useMemo(() => ({ type: 'TERM', field: 'parent', value: null }), []);

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Typography fontWeight={500}>{t('selectIncidence')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <CausesIncidenceCustomSelect required name='cause' fetchOption={{ filters }} label={t('parentIncidence')} />
        {formState?.errors?.cause?._id?.message && (
          <FormHelperText error={true} sx={{ ml: 2 }}>
            {t('errors:required')}
          </FormHelperText>
        )}
      </Grid>
      {cause?.hasChildCauses && (
        <Grid item xs={12}>
          <CausesIncidenceCustomSelect required name='subCause' label={t('childIncidence')} />
        </Grid>
      )}
      <Grid item xs={12}>
        <div className='flex items-center gap-2 my-3'>
          <Typography>{t('fields.status')}</Typography>
          <IncidenceStatusCell value={INCIDENCE_STATUS.OPEN} />
          <Typography variant='caption' sx={{ ml: 0.5 }}>
            *{t('initialStatus')}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <SelectUser name='responsive' label={t('assignTo')} multiple={false} />
      </Grid>
      <Grid item xs={12}>
        <FileDropZone
          name='evidence'
          label={t('common:evidence')}
          dropTitle={t('stock:warehouse.import.fields.uploadFile')}
          type={TYPE_DROP.FILE}
          control={control}
          showDropzoneWrapper
          inputProps={{
            accept: ACCEPT_ALL,
            maxFiles: 4,
            maxSize: MAX_SIZE_FILE,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
      </Grid>
    </Grid>
  );
};

export default memo(IncidenceForm);
