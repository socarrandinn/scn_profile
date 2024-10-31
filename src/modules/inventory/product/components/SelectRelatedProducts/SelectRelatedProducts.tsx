import { memo, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField, LongText } from '@dfl/mui-react-common';
import { ProductService } from '../../services';
import { isOptionEqualToValue } from 'utils/comparing';
import { useProductDetail } from '../../contexts/ProductDetail';
import { TermFilter } from '@dofleini/query-builder';
import { IProduct } from '../../interfaces/IProduct';
import { ListItemText } from '@mui/material';

interface ISelectRelatedProducts {
  name: string;
  label?: string;
  placeholder: string;
}

const renderOption = (props: any, option: IProduct, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <ListItemText primary={<LongText lineClamp={1} maxCharacters={30} text={option?.name} />} />
    </li>
  );
};

const SelectRelatedProducts = ({ name, label, ...props }: ISelectRelatedProducts) => {
  const { id, product } = useProductDetail();

  const filter = useMemo(() => {
    const excludedIds = [id, ...(product?.related || [])];
    return new TermFilter({ field: '_id', value: { $nin: excludedIds } })
  }, [id, product?.related]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      name={name}
      id={`multiple-${name}`}
      label={label || ''}
      autoComplete
      multiple={true}
      includeInputInList={true}
      fetchFunc={() => ProductService.search({ filters: filter })}
      fetchValueFunc={ProductService.search}
      loadValue
      fieldValue={'_id'}
      queryKey={'users'}
      autoHighlight
      size='medium'
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: any) => option?.name || ''}
      renderOption={renderOption}
      freeSolo
      filterSelectedOptions
    />
  );
};

export default memo(SelectRelatedProducts);
