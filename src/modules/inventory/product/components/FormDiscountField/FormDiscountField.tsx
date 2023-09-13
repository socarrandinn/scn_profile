import { FormTextFieldProps } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { FormTextFieldWithOptions } from 'components/TextFieldWithOptions';
import { memo, useCallback, useMemo, useState } from 'react';
import { PriceType } from '../../interfaces/IProductPriceDetails';

type FormDiscountFieldProps = FormTextFieldProps & {
  onSubmit?: any;
};

const options = Object.values(PriceType).map((option) => option.toLowerCase());

const FormDiscountField = (props: FormDiscountFieldProps) => {
  const [value, setValue] = useState({ value: 100, type: options[0] });
  const isPercent: boolean = useMemo(() => value.type === options[0], [value.type]);
  const myEvent = useMemo(() => ({ name: props.name, value }), [value]);

  const changeValueStateHandler = useCallback(
    ({ target }: any) => {
      setValue((prev: any) => ({
        ...prev,
        [target.name]: target.value,
      }));
      props.onSubmit(() => myEvent);
    },
    [value],
  );

  return (
    <FormTextFieldWithOptions
      {...props}
      onChange={changeValueStateHandler}
      inputComponent={NumberFormatCustom}
      options={options}
      textFieldValue='value'
      optionFieldValue='type'
      defaultValue={value}
      max={isPercent ? 100 : undefined}
      min={0}
    />
  );
};

export default memo(FormDiscountField);
