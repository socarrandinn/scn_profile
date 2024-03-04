import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { memo } from 'react';
import {
  TYPE_LENGTH_ENUM,
  TYPE_MASS_ENUM,
  TYPE_OF_MEASURE_ENUM,
  TYPE_VOLUME_ENUM,
} from 'modules/inventory/product/constants/type-of-measure';
import { useTranslation } from 'react-i18next';

export const getMeasureEnum = (value: string) => {
  switch (value) {
    case TYPE_OF_MEASURE_ENUM.UNIT:
      return '';
    case TYPE_OF_MEASURE_ENUM.LENGTH:
      return TYPE_LENGTH_ENUM;
    case TYPE_OF_MEASURE_ENUM.MASS:
      return TYPE_MASS_ENUM;
    case TYPE_OF_MEASURE_ENUM.VOLUME:
      return TYPE_VOLUME_ENUM;
    default:
      return value;
  }
};

const SelectTypeOfMeasure = ({ measure, isDisabled, ...props }: FormFieldControlProps & SelectProps & { measure: string; isDisabled: boolean }) => {
  const { t } = useTranslation('product');
  const isUnits = measure === 'UNIT' || measure === '' || isDisabled;
  return (
    <FormSelectField {...props} disabled={isUnits}>
      {Object.entries(getMeasureEnum(measure)).map(([value, label]) => {
        return (
          <MenuItem key={value} value={value}>
            {t(`section.productPerUnit.units.${value.toLowerCase()}`)}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(SelectTypeOfMeasure);
