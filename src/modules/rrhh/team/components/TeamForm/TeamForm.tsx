import { FormEventHandler, memo } from 'react';
import { Form, FormTextField, HandlerError } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormFontIconPicker } from 'components/libs/FontIconPicker';
import { SelectEmployee } from 'modules/rrhh/employee/components/SelectEmployee';

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
            <HandlerError error={error}/>
            <Form onSubmit={onSubmit} control={control} isLoading={isLoading} size={'small'} id={'form'} dark>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12}>
                        <FormFontIconPicker name='icon' label={t('fields.icon')}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField fullWidth autoFocus required name='name' label={t('fields.name')}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField fullWidth autoFocus name='color' label={t('fields.color')}/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField fullWidth multiline minRows={3} name='description'
                                       label={t('fields.description')}/>
                    </Grid>
                    <Grid item xs={12}>
                        <SelectEmployee name={'manager'} required label={t('fields.manager')}/>
                    </Grid>
                </Grid>
            </Form>
        </div>
  );
};

export default memo(TeamForm);
