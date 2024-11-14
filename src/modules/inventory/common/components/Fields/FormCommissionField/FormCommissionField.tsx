import { FormTextFieldProps, FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { useWatch } from 'react-hook-form';
import { AttachMoneyOutlined, Percent } from '@mui/icons-material';
import CommissionTypeSelect from './CommissionTypeSelect';
import { InputBaseProps } from '@mui/material';

type FromCommissionFieldProps = Omit<FormTextFieldProps, 'control'> & {
  initPriceType?: string;
  inputProps?: InputBaseProps;
};

const FromCommissionField = ({ initPriceType, inputProps, name, size, ...props }: FromCommissionFieldProps) => {
  const { control } = useDFLForm();
  const commission = useWatch({ control, name });

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
      fullWidth
      InputProps={{
        startAdornment: <Icon sx={{ fontSize: 14, mr: 0.2 }} />,
        endAdornment: <CommissionTypeSelect name={`${name}.type`} size={'small'} />,
      }}
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
        min: 0,
        step: 0.00,
        max: maxValue,
        ...inputProps,
      }}
    />
  );
};

export default memo(FromCommissionField);
