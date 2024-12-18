import { memo } from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import FormProvinceSelect from 'modules/common/components/Address/ProvinceSelect';
import FormMunicipalitySelect from 'modules/common/components/Address/MunicipalitySelect';
import { FormTextField, useDFLForm } from '@dfl/mui-react-common';

type AddressInputProps = {
  name: string;
  dark?: boolean;
  required?: boolean;
  disabledState?: boolean;
  hideZip?: boolean;
  stateValue?: string;
};

const AddressInput = ({ name, dark, stateValue, hideZip, disabledState, ...rest }: AddressInputProps) => {
  const { t } = useTranslation('common');
  const { watch } = useDFLForm();
  const state = watch?.(`${name}.state`) || stateValue;

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
          disabled={disabledState}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormMunicipalitySelect
          {...rest}
          dark={dark}
          state={state}
          name={`${name}.city`}
          label={t('municipality')}
          placeholder={t('municipalityPlaceholder')}
          helperText={!state && t('provinceFirst')}
        />
      </Grid>
      {!hideZip && (
        <Grid item xs={12} sm={6}>
          <FormTextField
            {...rest}
            dark={dark}
            name={`${name}.zipCode`}
            label={t('zipCode')}
            placeholder={t('zipCodePlaceholder')}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default memo(AddressInput);
