import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { DISTRIBUTION_CENTERS_LIST_KEY } from 'modules/inventory/distribution-centers/constants';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';

type DistributionCentersSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IDistributionCenters) => option.name || '';

const renderOption = (props: any, option: IDistributionCenters, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const DistributionCentersSelect = ({
  name,
  required,
  multiple,
  label,
  helperText,
  ...props
}: DistributionCentersSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={DistributionCentersService.search}
      queryKey={DISTRIBUTION_CENTERS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? DistributionCentersService.search : DistributionCentersService.getOne}
      id='select-distribution-centers'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(DistributionCentersSelect);
