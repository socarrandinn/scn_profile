import { FormTextField } from '@dfl/mui-react-common';
import { memo } from 'react';

type ProductSizeInputProps = {
  name: string;
  label?: string;
  disabled?: boolean;
};

const ProductSizeInput = ({ ...rest }: ProductSizeInputProps) => {
  return (
    <FormTextField
      {...rest}
      type='number'
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
        min: 0,
        step: 0.01,
      }}
    />
  );
};

export default memo(ProductSizeInput);
