import { useEffect } from 'react';
import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SelectMeasure, SelectTypeOfMeasure } from '../../components/ProductGeneralPerUnitsForm';
import { commonInputProps } from 'modules/common/constants/field.props';

type Props = {
  isDisabled: boolean;
  resetField: any;
  typeOfMeasure: string;
};

const ProductPerUnitsForm = ({ isDisabled, resetField, typeOfMeasure }: Props) => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();
  const selectedMeasure = watch?.('productPerUnit.measurements');
  useEffect(() => {
    if (selectedMeasure === 'UNIT' || isDisabled) {
      resetField('productPerUnit.displayMeasure', { defaultValue: null });
      resetField('productPerUnit.typeOfMeasure', { defaultValue: null });
    }
    if (isDisabled) {
      resetField('productPerUnit.amount', { defaultValue: 0 });
      resetField('productPerUnit.measurements', { defaultValue: '' });
    }
  }, [selectedMeasure, isDisabled]);
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={3}>
        <FormTextField
          type='number'
          name='productPerUnit.amount'
          label={t('section.productPerUnit.amount')}
          disabled={isDisabled}
          inputProps={{
            ...commonInputProps,
            min: 1,
            step: 0.01,
          }}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <SelectMeasure
          name='productPerUnit.measurements'
          label={t('section.productPerUnit.measurements')}
          required
          disabled={isDisabled}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <SelectTypeOfMeasure
          measure={selectedMeasure || typeOfMeasure}
          isDisabled={isDisabled}
          name='productPerUnit.typeOfMeasure'
          label={t('section.productPerUnit.measurementsUnits')}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <SelectTypeOfMeasure
          measure={selectedMeasure || typeOfMeasure}
          isDisabled={isDisabled}
          name='productPerUnit.displayMeasure'
          label={t('section.productPerUnit.measurementsVisual')}
          required
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default ProductPerUnitsForm;
