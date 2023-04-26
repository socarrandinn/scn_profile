import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem } from '@mui/material';
import { CIVIL_STATUS_ENUM } from '../utils';

const FormCivilStatusField = (props: FormFieldControlProps) => {
  return (
    <FormSelectField {...props}>
      {Object.values(CIVIL_STATUS_ENUM).map((civilStatus: string) => {
        return (
          <MenuItem key={civilStatus} value={civilStatus}>
            {civilStatus}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default FormCivilStatusField;
