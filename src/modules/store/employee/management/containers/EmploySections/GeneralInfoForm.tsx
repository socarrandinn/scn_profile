import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectCivilStatus } from 'modules/store/employee/management/components/SelectCivilStatus';
import { CivilStatusEnum } from 'modules/store/employee/management/constants/civil-status.enum';
import { SelectDiseases } from 'modules/store/employee/management/components/SelectDiseases';
import { SelectAllergies } from 'modules/store/employee/management/components/SelectAllergies';

type GeneralInfoFormProps = {
  married?: boolean;
};

const GeneralInfoForm = ({ married }: GeneralInfoFormProps) => {
  const { t } = useTranslation('employee');
  const { watch } = useDFLForm();
  const isMarried = watch?.('general.civilStatus') === CivilStatusEnum.married || married;

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth autoFocus required name='general.firstName' label={t('fields.general.firstName')} />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField fullWidth required name='general.lastName' label={t('fields.general.lastName')} />
      </Grid>
      <Grid item xs={12}>
        <FormTextField fullWidth required name='general.ci' label={t('fields.general.ci')} />
      </Grid>
      {/* <Grid item xs={12}> */}
      {/*  <FormTextField fullWidth autoFocus required name='general.gender' label={t('fields.general.gender')} /> */}
      {/* </Grid> */}
      <Grid item xs={12}>
        <SelectCivilStatus required name='general.civilStatus' label={t('fields.general.civilStatus')} />
      </Grid>
      {isMarried && (
        <Grid item xs={12}>
          <FormTextField fullWidth required name='general.partner' label={t('fields.general.partner')} />
        </Grid>
      )}
      <Grid item xs={12}>
        <SelectDiseases multiple name='general.diseases' label={t('fields.general.diseases')} />
      </Grid>

      <Grid item xs={12}>
        <SelectAllergies multiple name='general.allergies' label={t('fields.general.allergies')} />
      </Grid>

      <Grid item xs={12}>
        <FormTextField fullWidth multiline minRows={3} name='general.notes' label={t('fields.general.notes')} />
      </Grid>
    </Grid>
  );
};

export default GeneralInfoForm;
