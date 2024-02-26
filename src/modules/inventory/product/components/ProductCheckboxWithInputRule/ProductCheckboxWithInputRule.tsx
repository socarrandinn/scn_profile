import { CheckBoxField, FormTextField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { memo, useState } from 'react';

interface ProductCheckboxWithInputRuleProps {
  label: string;
  name: string;
  options?: {
    isOptionActive?: any;
    fullWidth?: boolean;
    handleFn?: any;
    checkboxLabel?: string;
    inputType?: string;
    inputProps?: any;
  };
}

const ProductCheckboxWithInputRule = ({ name, label, options }: ProductCheckboxWithInputRuleProps) => {
  const [isActive, setIsActive] = useState(options?.isOptionActive);

  const handleChange = () => {
    setIsActive(!isActive);
    options?.handleFn(isActive);
  };

  return (
    <>
      <Grid item xs={options?.fullWidth ? 12 : 6}>
        <CheckBoxField value={isActive} label={options?.checkboxLabel} onChange={handleChange} />
      </Grid>
      <Grid item xs={options?.fullWidth ? 12 : 6}>
        {isActive && (
          <FormTextField
            type={options?.inputType}
            name={name}
            label={label}
            disabled={!isActive}
            inputProps={options?.inputProps}
          />
        )}
      </Grid>
    </>
  );
};

export default memo(ProductCheckboxWithInputRule);
