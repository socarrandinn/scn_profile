import { FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';

const GeneralInfoForm = () => {
  const { t } = useTranslation('store');

  return (
        <FormPaper nm title={t('section.general.title')}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <FormTextField fullWidth autoFocus required name='name'
                                   label={t('fields.name')}/>
                </Grid>
                <Grid item xs={12}>
                    <FormTextField fullWidth multiline minRows={3} name='description' label={t('fields.description')}/>
                </Grid>
            </Grid>
        </FormPaper>
  );
};

export default GeneralInfoForm;
