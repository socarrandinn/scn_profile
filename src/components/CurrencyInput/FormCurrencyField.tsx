import { memo } from 'react';
import { FormFieldControl } from '@dfl/mui-react-common';
import { CurrencyInputProps, CurrencyInput } from 'components/CurrencyInput';

const FormCurrencyField = (props: CurrencyInputProps) => {
  return <FormFieldControl {...props} Component={CurrencyInput} />;
};

export default memo(FormCurrencyField);
