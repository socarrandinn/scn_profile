import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IReviews } from 'modules/crm/reviews/interfaces';
import { REVIEWS_LIST_KEY } from 'modules/crm/reviews/constants';
import { ReviewsService } from 'modules/crm/reviews/services';

type ReviewsSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IReviews) => option.title || '';

const renderOption = (props: any, option: IReviews, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.title}
    </li>
  );
};

const ReviewsSelect = ({ name, required, multiple, label, placeholder, helperText }: ReviewsSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ReviewsService.search}
      queryKey={REVIEWS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ReviewsService.search : ReviewsService.getOne}
      id='select-reviews'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ReviewsSelect);
