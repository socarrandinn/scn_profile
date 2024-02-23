import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DECREASE_CAUSES_TYPE } from '../../constants/product-decrease-causes.enum';

export const getCauseCustomLabel = (value: string): string => {
  const { t } = useTranslation('product');
  switch (value) {
    case DECREASE_CAUSES_TYPE.ATTENTION_WORKERS:
      return t('cause.ATTENTION_WORKERS');
    case DECREASE_CAUSES_TYPE.EXPIRATION:
      return t('cause.EXPIRATION');
    case DECREASE_CAUSES_TYPE.LOSSES:
      return t('cause.LOSSES');
    case DECREASE_CAUSES_TYPE.INCIDENCES:
      return t('cause.INCIDENCES');
    case DECREASE_CAUSES_TYPE.OTHERS:
      return t('cause.OTHERS');
    default:
      return value;
  }
};

const SelectDecreaseCauseType = (props: FormFieldControlProps & SelectProps) => {
  return (
    <FormSelectField {...props}>
      {Object.entries(DECREASE_CAUSES_TYPE).map(([value, label]) => {
        return (
          <MenuItem key={value} value={value}>
            {getCauseCustomLabel(value)}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(SelectDecreaseCauseType);
