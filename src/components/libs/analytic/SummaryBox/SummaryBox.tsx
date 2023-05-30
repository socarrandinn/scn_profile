import { memo } from 'react';
import { BoxProps, styled, Typography } from '@mui/material';
import { CurrencyValue, FlexBox, NumberValue } from '@dfl/mui-react-common';
import BarChartIcon from '@mui/icons-material/BarChart';
import SummaryBoxSkeleton from 'components/libs/analytic/SummaryBox/SummaryBoxSkeleton';
import { CounterBoxS } from 'components/libs/analytic/CounterBox/CounterBox';
import DonutText from 'components/libs/analytic/Donut/DonutText';

type SummaryBoxProps = {
  isLoading?: boolean;
  title: string;
  color?: 'warning' | 'secondary' | 'primary' | 'error' | 'success' | 'info';
  Icon?: any;

  total?: number;
  difference?: number;
  values?: Array<{ label: string; value?: number }>;
  currency?: boolean;
  variant?: 'outlined' | 'contented';
} & BoxProps;

const fontSizeTotal = {
  xs: 18,
  md: 18,
  lg: 24,
  xl: 32,
};

const direction: any = {
  xs: 'column',
  md: 'row',
};

export const Total = styled('div')(({ theme }) => ({
  p: {
    span: {
      fontSize: 14,
      // [theme.breakpoints.up('md')]: {
      //     fontSize: 14
      // },
      [theme.breakpoints.up('xl')]: {
        fontSize: 20,
      },
    },
  },
}));

const paper = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minWidth: { xs: '100%', md: 'auto', xl: 250 },
};
const iconSx = { fontSize: 34 };
const SummaryBox = ({
  title,
  total = 0,
  difference,
  isLoading,
  Icon = BarChartIcon,
  currency,
  values = [],
  variant = 'outlined',
  color,
  ...props
}: SummaryBoxProps) => {
  if (isLoading) return <SummaryBoxSkeleton color={color} values={values} currency={currency} variant={variant}/>;

  const NumberCom = currency ? CurrencyValue : NumberValue;
  return (
        <FlexBox {...props}>
            <CounterBoxS sx={paper} variant={variant} color={color}>
                <FlexBox alignItems={{ md: 'center' }} flexWrap={'wrap'} flexDirection={direction}>
                    <FlexBox flexDirection={'column'} mr={2}>
                        <Typography
                            variant={'h2'}
                            alignItems={'center'}
                            display={'flex'}
                            color={variant === 'outlined' ? color : color ? 'white' : undefined}
                        >
                            {' '}
                            <Icon sx={iconSx}/>
                            {title}
                        </Typography>
                        <Total>
                            <NumberCom
                                value={total}
                                fontWeight={'bold'}
                                color={variant === 'outlined' ? 'text.primary' : undefined}
                                fontSize={fontSizeTotal}
                                mt={1}
                            />
                        </Total>
                        {difference ? (
                            <NumberCom
                                value={difference}
                                color={variant === 'outlined' ? 'text.primary' : undefined}
                                fontSize={16}
                                mt={0}
                            />
                        ) : (
                            <></>
                        )}
                    </FlexBox>
                    <FlexBox flexWrap={'wrap'} mt={{ xs: 2, md: 0 }}>
                        {values?.map((value, key) => {
                          const rest = values?.reduce<number>(
                            (prev, value, index) => (index === key ? prev : prev + (value.value as number)),
                            0,
                          );
                          return <DonutText key={key} value={value.value as number} rest={rest} label={value.label}
                                          color={color}/>;
                        })}
                    </FlexBox>
                </FlexBox>
            </CounterBoxS>
        </FlexBox>
  );
};

export default memo(SummaryBox);
