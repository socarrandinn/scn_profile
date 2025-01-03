import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PRODUCT_FEATURE_TYPE_ENUM } from '../../interfaces/IProductFeature';
type ProductFeatureTypeSelectProps = {
  name: string;
  label: string;
  required?: boolean;
};

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option;
  const valueId = value;
  return optionId === valueId;
};

const ProductFeatureTypeSelect = ({ label, name, required }: ProductFeatureTypeSelectProps) => {
  const { t } = useTranslation('productFeatures');
  const options = useMemo(() => Object.keys(PRODUCT_FEATURE_TYPE_ENUM), []);

  const renderLabel = (option: string) => t(`FEATURE_TYPE.${option}`);

  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`FEATURE_TYPE.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      required={required}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id='select-product-feature-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      name={name}
      label={label}
      options={options}
    />
  );
};

export default memo(ProductFeatureTypeSelect);
