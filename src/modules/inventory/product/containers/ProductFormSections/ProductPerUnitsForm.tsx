import { FlexBox, FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { Grid, Switch } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormPaper } from 'modules/common/components/FormPaper';
import { SelectMeasure, SelectTypeOfMeasure } from 'modules/inventory/product/components/ProductGeneralPerUnitsForm/';
import { useState } from 'react';
import { UseFormReset } from 'react-hook-form';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';

type Props = {
  reset: UseFormReset<Partial<IProductCreate>>;
};

const ProductPerUnitsForm = ({ reset }: Props) => {
  const { t } = useTranslation('product');
  const { watch } = useDFLForm();
  const [isDisabled, setIsDisabled] = useState(true);
  const measurementsValue = watch?.('productPerUnit.measurements') || 'UNIT';
  const handlerDisabled = () => {
    setIsDisabled(!isDisabled);
    reset();
  };
  return (
    <FormPaper
      actions={
        <FlexBox display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
          {t('section.productPerUnit.title')}
          <Switch onChange={handlerDisabled} checked={!isDisabled} />
        </FlexBox>
      }
    >
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={3}>
          <FormTextField
            type='number'
            name='productPerUnit.amount'
            label={t('section.productPerUnit.amount')}
            disabled={isDisabled}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SelectMeasure
            name='productPerUnit.measurements'
            label={t('section.productPerUnit.measurements')}
            required
            defaultValue={'UNIT'}
            disabled={isDisabled}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SelectTypeOfMeasure
            measure={measurementsValue}
            name='productPerUnit.typeOfMeasure'
            label={t('section.productPerUnit.measurementsUnits')}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <SelectTypeOfMeasure
            measure={measurementsValue}
            name='productPerUnit.displayMeasure'
            label={t('section.productPerUnit.measurementsVisual')}
            required
            fullWidth
          />
        </Grid>
      </Grid>
    </FormPaper>
  );
};

export default ProductPerUnitsForm;
