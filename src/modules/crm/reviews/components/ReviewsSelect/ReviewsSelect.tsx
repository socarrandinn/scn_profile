import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IReviews } from 'modules/crm/reviews/interfaces';
import { ADMIN_REVIEWS_LIST_KEY } from 'modules/crm/reviews/constants';
import { AdminReviewsService } from 'modules/crm/reviews/services';

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

const ReviewsSelect = ({ name, required, multiple, label, helperText, ...props }: ReviewsSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={AdminReviewsService.search}
      queryKey={ADMIN_REVIEWS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? AdminReviewsService.search : AdminReviewsService.getOne}
      id='select-reviews'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ReviewsSelect);
