import { FormTextFieldProps, FormTextField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { useWatch } from 'react-hook-form';
import { AttachMoneyOutlined, Percent } from '@mui/icons-material';
import CommissionTypeSelect from './CommissionTypeSelect';
import { InputBaseProps } from '@mui/material';

type FromCommissionFieldProps = FormTextFieldProps & {
  initPriceType?: string;
  inputProps?: InputBaseProps;
};

const FromCommissionField = ({
  initPriceType,
  inputProps,
  name,
  control,
  size,
  ...props
}: FromCommissionFieldProps) => {
  const { [name]: commission } = useWatch({ control });

  const { hazType, maxValue } = useMemo(() => {
    const hazType = commission.type === PriceType.PERCENT;
    const maxValue = hazType ? 100 : undefined;
    return {
      hazType,
      maxValue,
    };
  }, [commission.type]);

  const Icon = useMemo(() => (hazType ? Percent : AttachMoneyOutlined), [hazType]);

  if (initPriceType !== undefined) {
    initPriceType === 'PERCENT' ? <Percent /> : <AttachMoneyOutlined />;
  }

  return (
    <FormTextField
      {...props}
      size={size}
      name={`${name}.value`}
      type='number'
      InputProps={{
        startAdornment: <Icon sx={{ fontSize: 14 }} />,
        endAdornment: <CommissionTypeSelect name={`${name}.type`} size={'small'} />,
      }}
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
        min: 0,
        max: maxValue,
        ...inputProps,
      }}
    />
  );
};

export default memo(FromCommissionField);
