import { memo } from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import FormProvinceSelect from 'modules/security/users/components/Address/ProvinceSelect';
import FormMunicipalitySelect from 'modules/security/users/components/Address/MunicipalitySelect';
import { FormTextField } from '@dfl/mui-react-common';

type AddressInputProps = {
  name: string;
  dark?: boolean;
  required?: boolean;
  state: string | undefined;
};

const AddressInput = ({ name, state, dark, ...rest }: AddressInputProps) => {
  const { t } = useTranslation('common');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <FormTextField
          {...rest}
          dark={dark}
          name={`${name}.address`}
          label={t('address')}
          placeholder={t('addressPlaceholder')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormProvinceSelect
          {...rest}
          dark={dark}
          name={`${name}.state`}
          label={t('provinces')}
          placeholder={t('provincePlaceholder')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormMunicipalitySelect
          {...rest}
          dark={dark}
          state={state}
          name={`${name}.municipality`}
          label={t('municipality')}
          placeholder={t('municipalityPlaceholder')}
          helperText={!state && t('provinceFirst')}
        />
      </Grid>
    </Grid>
  );
};

export default memo(AddressInput);
