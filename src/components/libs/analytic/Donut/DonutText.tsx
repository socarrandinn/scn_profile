import { memo } from 'react';
import { CurrencyValue, NumberValue } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';

import BinaryDonut, { BinaryDonutProps } from 'components/libs/analytic/Donut/BinaryDonut';

type DonutTextProps = BinaryDonutProps & {
  label: string;
  currency?: boolean;
};
const DonutText = ({ label, value, currency, color, ...props }: DonutTextProps) => {
  const NumberCom = currency ? CurrencyValue : NumberValue;

  return (
    <BinaryDonut {...props} value={value} color={color}>
      <NumberCom
        value={value}
        fontSize={18}
        fontWeight={500}
        minWidth={100}
        color={color}
        textAlign={'center'}
        bgcolor={'white'}
      />

      <Typography
        fontSize={11}
        textAlign={'center'}
        position={'absolute'}
        mt={'-5px'}
        color={'text.primary'}
        lineHeight={1.1}
        width={'100%'}
      >
        {label}
      </Typography>
    </BinaryDonut>
  );
};

export default memo(DonutText);
