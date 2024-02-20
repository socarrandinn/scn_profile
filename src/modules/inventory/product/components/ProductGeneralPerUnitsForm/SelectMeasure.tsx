import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TYPE_OF_MEASURE_ENUM } from '../../constants/type-of-measure';

export const getCustomLabel = (value: string): string => {
  const { t } = useTranslation('product');
  switch (value) {
    case TYPE_OF_MEASURE_ENUM.UNIT:
      return t('section.productPerUnit.unit');
    case TYPE_OF_MEASURE_ENUM.LENGTH:
      return t('section.productPerUnit.length');
    case TYPE_OF_MEASURE_ENUM.MASS:
      return t('section.productPerUnit.mass');
    case TYPE_OF_MEASURE_ENUM.VOLUME:
      return t('section.productPerUnit.volume');
    default:
      return value;
  }
};

const SelectMeasure = (props: FormFieldControlProps & SelectProps) => {
  return (
    <FormSelectField {...props}>
      {Object.entries(TYPE_OF_MEASURE_ENUM).map(([value, label]) => {
        return (
          <MenuItem key={value} value={value}>
            {getCustomLabel(value)}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(SelectMeasure);
