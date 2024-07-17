import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IOffer } from 'modules/sales-offer/offer/interfaces';
import { OFFERS_LIST_KEY } from 'modules/sales-offer/offer/constants';
import { OfferService } from 'modules/sales-offer/offer/services';

type OfferSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IOffer) => option.name || '';

const renderOption = (props: any, option: IOffer, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const OfferSelect = ({ name, required, multiple, label, placeholder, helperText }: OfferSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={OfferService.search}
      queryKey={OFFERS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? OfferService.search : OfferService.getOne}
      id='select-offer'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(OfferSelect);
