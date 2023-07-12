import { FormEventHandler, memo } from 'react';
import { Form, FormFontIconPickerLine, FormTextField, HandlerError, FormColorPicker } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectEmployee } from 'modules/store/employee/common/components/SelectEmployee';
import { TEAM_ERRORS } from 'modules/store/employee/team/constants/team.errors';
import { TeamTagsSelect } from '../TeamTagsSelect';

type TeamFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  onSubmit: FormEventHandler | undefined;
};

const TeamForm = ({ error, control, isLoading, onSubmit }: TeamFormProps) => {
  const { t } = useTranslation('team');

  return (
    <div>
      <HandlerError error={error} errors={TEAM_ERRORS} />
      <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12}>
            <FormFontIconPickerLine
              name='icon'
              label={t('fields.icon')}
              shape={'square'}
              size={'small'}
              previewInLineCount={7}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')} />
          </Grid>
          <Grid item xs={12}>
            <FormColorPicker fullWidth name='color' label={t('fields.color')} />
          </Grid>
          <Grid item xs={12}>
            <TeamTagsSelect name='tags' label={t('fields.tags')} />
          </Grid>
          <Grid item xs={12}>
            <SelectEmployee name={'manager'} label={t('fields.manager')} />
          </Grid>
          <Grid item xs={12}>
            <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')} />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default memo(TeamForm);
