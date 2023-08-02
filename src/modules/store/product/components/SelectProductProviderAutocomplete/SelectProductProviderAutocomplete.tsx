import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { SelectChangeEvent } from '@mui/material';
import { IProductProvider } from 'modules/store/common/interfaces/IProductProvider';
import { useTranslation } from 'react-i18next';
import { isOptionEqualToValue } from 'utils/comparing';
import { PRODUCT_PROVIDER_LIST_KEY } from '../../constants/query-keys';
import productProviderService from 'modules/store/common/services/productProviderService';

type Props = {
  name: string;
  dark?: boolean;
  value?: string;
  helperText?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
};

const SelectProductProviderAutocomplete = ({ name, value, onChange, dark, helperText }: Props) => {
  const { t } = useTranslation('product');

  const renderLabel = (option: IProductProvider) => option.name || '';

  const renderOption = (props: any, option: IProductProvider) => {
    return (
    <li {...props} key={option._id }>
      {option.name}
    </li>
    );
  };

  return (
    <FormAsyncSelectAutocompleteField
      id='select-product-provider'
      label={t('section.summary.organization.labelProveedor')}
      dark={dark}
      name={name}
      fullWidth={true}
      multiple={false}
      loadValue
      fieldValue={'_id'}
      isOptionEqualToValue={isOptionEqualToValue}
      fetchFunc={productProviderService.search}
      queryKey={PRODUCT_PROVIDER_LIST_KEY}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default SelectProductProviderAutocomplete;
