import { memo } from 'react';
import { BoxProps, styled, Typography } from '@mui/material';
import { CurrencyValue, FlexBox, NumberValue } from '@dfl/mui-react-common';
import BarChartIcon from '@mui/icons-material/BarChart';
import SummaryBoxSkeleton from './SummaryBoxSkeleton';
import Donut from '../Donut/Donut';
import { CounterBoxS } from '../../CounterBox/CounterBox';

type SummaryBoxProps = {
  isLoading?: boolean;
  title: string;
  subtitle?: string;
  color?: 'warning' | 'secondary' | 'primary' | 'error' | 'success' | 'info';
  Icon?: any;
  total?: number;
  percent?: any;
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
  minHeight: 183,
  minWidth: {
    xs: '100%',
    md: 'auto',
    xl: 250,
  },
};
const iconSx = { fontSize: 34 };
const SummaryBox = ({
  title,
  subtitle,
  total = 0,
  difference,
  isLoading,
  Icon = BarChartIcon,
  currency,
  values = [],
  variant = 'outlined',
  color,
  percent = '',
  ...props
}: SummaryBoxProps) => {
  if (isLoading) return <SummaryBoxSkeleton color={color} values={values} currency={currency} variant={variant} />;

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
              <Icon sx={iconSx} />
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant={'caption'}
                alignItems={'center'}
                display={'flex'}
                color={variant === 'outlined' ? color : color ? 'white' : undefined}
              >
                {subtitle}
              </Typography>
            )}

            <Total
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 1,
              }}
            >
              <NumberCom
                value={total}
                fontWeight={'bold'}
                color={variant === 'outlined' ? 'text.primary' : undefined}
                fontSize={fontSizeTotal}
              />
              <Typography
                variant={'body1'}
                display={'flex'}
                ml={1.2}
                p={0.25}
                color={variant === 'outlined' ? color : color ? 'white' : undefined}
              >
                {percent}
              </Typography>
            </Total>

            {difference ? (
              <>
                <NumberCom
                  value={difference}
                  color={variant === 'outlined' ? 'text.primary' : undefined}
                  fontSize={16}
                  mt={0}
                />
                {percent}
              </>
            ) : (
              <></>
            )}
          </FlexBox>
          <FlexBox
            flexWrap={'wrap'}
            justifyContent={{ xs: 'center', md: 'start' }}
            mt={{
              xs: 2,
              md: 0,
            }}
            gap={{ xs: 1, md: 2 }}
          >
            {values?.map((value, key) => {
              const rest = values?.reduce<number>(
                (prev, value, index) => (index === key ? prev : prev + (value.value as number)),
                0,
              );
              return <Donut key={key} value={value.value as number} rest={rest} label={value.label} color={color} />;
            })}
          </FlexBox>
        </FlexBox>
      </CounterBoxS>
    </FlexBox>
  );
};

export default memo(SummaryBox);
