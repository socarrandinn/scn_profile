import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ICollections } from 'modules/cms/collections/interfaces';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';
import { CollectionsService } from 'modules/cms/collections/services';

type CollectionsSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ICollections) => option.name || '';

const renderOption = (props: any, option: ICollections, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const CollectionsSelect = ({ name, required, multiple, label, helperText }: CollectionsSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={CollectionsService.search}
      queryKey={COLLECTIONS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? CollectionsService.search : CollectionsService.getOne}
      id='select-collections'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(CollectionsSelect);
