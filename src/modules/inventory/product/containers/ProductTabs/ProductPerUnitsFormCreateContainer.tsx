import { useState } from 'react';
import { Switch, Typography } from '@mui/material';
import { FormPaper } from 'modules/common/components/FormPaper';
import { FlexBox } from '@dfl/mui-react-common';
import ProductPerUnitsForm from 'modules/inventory/product/containers/ProductFormSections/ProductPerUnitsForm';
import { useTranslation } from 'react-i18next';

type Props = {
  resetField: any;
  typeOfMeasure: string;
};

const ProductPerUnitsFormCreateContainer = ({ resetField, typeOfMeasure }: Props) => {
  const { t } = useTranslation('product');
  const [isDisabled, setIsDisabled] = useState(true);

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FormPaper
      actions={
        <FlexBox display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
          <Typography>{t('section.productPerUnit.title')}</Typography>
          <Switch onChange={toggleDisabled} checked={!isDisabled} />
        </FlexBox>
      }
    >
      <ProductPerUnitsForm typeOfMeasure={typeOfMeasure} isDisabled={isDisabled} resetField={resetField} />
    </FormPaper>
  );
};

export default ProductPerUnitsFormCreateContainer;
