import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo } from 'react';
import { Box } from '@mui/material';

type Props = {
  name: string;
  required?: boolean;
  label?: string;
  defaultValues?: string[];
};

const TeamTagsSelect = ({ name, label, required, defaultValues }: Props) => {
  return (
    <FormSelectAutocompleteField
      name={name}
      label={label}
      required={required}
      options={(defaultValues || []).map((tag) => ({ label: tag, id: tag }))}
      fullWidth={true}
      multiple={true}
      freeSolo={true}
    />
  );
};

export default memo(TeamTagsSelect);
