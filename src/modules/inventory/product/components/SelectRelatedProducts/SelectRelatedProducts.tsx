import { memo, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField, LongText } from '@dfl/mui-react-common';
import { ProductService } from '../../services';
import { isOptionEqualToValue } from 'utils/comparing';
import { useProductDetail } from '../../contexts/ProductDetail';
import { IProduct } from '../../interfaces/IProduct';
import { ListItemText } from '@mui/material';

interface ISelectRelatedProducts {
  name: string;
  label?: string;
  placeholder: string;
}

const renderOption = (props: any, option: IProduct, { selected }: any) => {
  return (
    <li {...props} key={option._id}>
      <ListItemText primary={<LongText lineClamp={1} maxCharacters={30} text={option?.name} />} />
    </li>
  );
};

const SelectRelatedProducts = ({ name, label, ...props }: ISelectRelatedProducts) => {
  const { id, product } = useProductDetail();
  const excludedIds = useMemo(() => [id, ...(product?.related || [])], [id, product?.related]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      name={name}
      id={`multiple-${name}`}
      label={label || ''}
      autoComplete
      multiple={true}
      includeInputInList={true}
      fetchFunc={ProductService.search}
      fetchValueFunc={ProductService.search}
      loadValue
      fieldValue={'_id'}
      queryKey={'select-related-products'}
      autoHighlight
      size='medium'
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: any) => option?.name || ''}
      renderOption={renderOption}
      freeSolo
      fetchOption={{
        filters: {
          type: 'AND',
          filters: [{ type: 'TERM', field: '_id', value: { $nin: excludedIds } }],
        }
      }}
      filterSelectedOptions
    />
  );
};

export default memo(SelectRelatedProducts);
