import { memo, useCallback } from 'react';
import { Grid, Stack, Button, Divider, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useFieldArray, UseFormWatch, UseFormSetError, UseFormResetField } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { MUNICIPALITIES_BY_PROVINCE_CODE } from '@dfl/location';
import OfferAddressList from './OfferAddressList';
import { MUNICIPALITY_ALL } from '../../../common/constants/offer.enum';
import { FromSelectMunicipality } from '../FromSelectMunicipality';
import { FormSelectProvince } from '../FormSelectProvince';

type OfferAddressFormRuleProps = {
  section: boolean;
  control: any;
  watch: UseFormWatch<any>;
  setError: UseFormSetError<any>;
  resetField: UseFormResetField<any>;
  errors: any;
  clearErrors: any;
};

const OfferAddressFormRule = ({
  section,
  control,
  watch,
  resetField,
  setError,
  errors,
  clearErrors,
}: OfferAddressFormRuleProps) => {
  const { t } = useTranslation('offerOrder');

  const name = 'rulesAddress.value';
  const { fields, append, remove: removeRule } = useFieldArray({ control, name });

  const addAmountRule = useCallback(() => {
    const municipality = watch('rulesAddress.municipality');
    const state = watch('rulesAddress.state');

    if (isEmpty(state)) {
      setError('rulesAddress.state', { type: 'required', message: 'offerOrder:error:address:state' });
    } else {
      resetField('rulesAddress.state', { defaultValue: state });
    }

    if (isEmpty(municipality)) {
      setError('rulesAddress.municipality', { type: 'required', message: 'offerOrder:error:address:municipality' });
    } else {
      resetField('rulesAddress.municipality', { defaultValue: municipality });
    }

    if (!isEmpty(municipality) && !isEmpty(state)) {
      const findMunicipality = [
        MUNICIPALITY_ALL,
        ...MUNICIPALITIES_BY_PROVINCE_CODE[watch('rulesAddress.state').state],
      ]?.find((mun) => mun.code === municipality.code);
      if (isEmpty(findMunicipality)) {
        resetField('rulesAddress.municipality', { defaultValue: null });
        setError('rulesAddress.municipality', { type: 'required', message: 'offerOrder:error:address:municipality' });
      } else {
        append({
          municipality: watch('rulesAddress.municipality')?.municipality,
          state: watch('rulesAddress.state')?.state,
        });
        resetField('rulesAddress.state', { defaultValue: null });
        resetField('rulesAddress.municipality', { defaultValue: null });

        clearErrors();
      }
    }
  }, [append, resetField, setError, watch, clearErrors]);

  return (
    <Stack gap={2}>
      <Grid
        container
        spacing={{
          xs: 1,
          md: 2,
        }}
      >
        <Grid item xs={12} md={4}>
          <FormSelectProvince
            disabled={!section}
            label={t('offerOrder:sections:address:state')}
            name={'rulesAddress.state'}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FromSelectMunicipality
            disabled={!section}
            state={watch('rulesAddress.state')}
            label={t('offerOrder:sections:address:municipality')}
            name={'rulesAddress.municipality'}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            onClick={addAmountRule}
            startIcon={<AddOutlinedIcon fontSize='inherit' />}
            variant='contained'
            disabled={!section}
            sx={{
              marginRight: 'auto',
            }}
          >
            {t('sections.address.action')}
          </Button>
        </Grid>
      </Grid>
      <Divider />
      {errors?.rulesAddress?.value?.type === 'min' ? (
        <Alert severity='error'>{t(errors?.rulesAddress?.value?.message)}</Alert>
      ) : (
        <OfferAddressList fields={fields} removeRule={removeRule} section={section} />
      )}
    </Stack>
  );
};

export default memo(OfferAddressFormRule);
