import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { ListItemText } from '@mui/material';
import { ProductService } from '../../services';
import { LongText } from 'modules/common/components/LongText';

interface ISelectRelatedProducts {
  name: string;
  label?: string;
  placeholder: string;
  id: string;
}

const isOptionEqualToValue = (option: any, value: any | string) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const SelectRelatedProducts = ({ name, label, placeholder, id }: ISelectRelatedProducts) => {
  const filter = {
    type: 'AND',
    filters: [
      {
        type: 'TERM',
        field: '_id',
        value: { $ne: id },
        objectId: false,
        isDate: false,
      },
    ],
  };
  return (
    <FormAsyncSelectAutocompleteField
      name={name}
      id={`multiple-${name}`}
      label={label || ''}
      autoComplete
      multiple={true}
      includeInputInList={true}
      fetchFunc={() => ProductService.search({ filters: filter })}
      fetchValueFunc={ProductService.search}
      loadValue
      queryKey={'users'}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: any) => option?.name || ''}
      renderOption={(props, option) => (
        <li {...props} key={option?._id}>
          <ListItemText primary={<LongText lineClamp={1} maxCharacters={30} text={option?.name} />} />
        </li>
      )}
      freeSolo
      filterSelectedOptions
      placeholder={placeholder || ''}
    />
  );
};

export default memo(SelectRelatedProducts);
