import { memo } from 'react';
import { CurrencyValue, NumberValue } from '@dfl/mui-react-common';
import { Typography } from '@mui/material';
import Donut, { DonutProps } from 'components/libs/analytic/Donut/Donut';

type DonutTextProps = DonutProps & {
  label: string;
  currency?: boolean;
};
const DonutText = ({ label, value, currency, color, ...props }: DonutTextProps) => {
  const NumberCom = currency ? CurrencyValue : NumberValue;

  return (
        <Donut {...props} value={value} color={color}>
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
        </Donut>
  );
};

export default memo(DonutText);
