import { memo } from 'react';
import { BoxProps, styled, Typography } from '@mui/material';
import { CurrencyValue, FlexBox, NumberValue } from '@dfl/mui-react-common';
import SummaryBoxSkeleton from 'components/libs/analytic/SummaryBox/SummaryBoxSkeleton';
import { CounterBoxS } from 'components/libs/analytic/CounterBox/CounterBox';
import { DonutIcon } from 'components/libs/analytic/Donut';

type SummaryBoxProps = {
  isLoading?: boolean;
  title: string;
  color?: 'warning' | 'secondary' | 'primary' | 'error' | 'success' | 'info';
  Icon?: any;

  total?: number;
  difference?: number;
  value?: number;
  currency?: boolean;
  variant?: 'outlined' | 'contented';
} & BoxProps;

const fontSizeTotal = {
  xs: 42
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
  border: 'none',
  width: '100%',
  paddingLeft: '34px',
  minWidth: { xs: '100%', md: 'auto', xl: 250 },
};
const SummaryBoxWithIcon = ({
  title,
  total = 0,
  isLoading,
  currency,
  value = 0,
  variant = 'outlined',
  color,
  children,
  ...props
}: SummaryBoxProps) => {
  if (isLoading) return <SummaryBoxSkeleton color={color} currency={currency} variant={variant}/>;

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
                            {title}
                        </Typography>
                        <Total>
                            <NumberCom
                                value={value}
                                fontWeight={'bold'}
                                color={variant === 'outlined' ? 'text.primary' : undefined}
                                fontSize={fontSizeTotal}
                                mt={1}
                            />
                        </Total>
                    </FlexBox>
                    <FlexBox flexWrap={'wrap'} mt={{ xs: 2, md: 0 }}>
                        <DonutIcon value={value} rest={total - value} color={color} size={150}>
                            {children}
                        </DonutIcon>
                    </FlexBox>
                </FlexBox>
            </CounterBoxS>
        </FlexBox>
  );
};

export default memo(SummaryBoxWithIcon);
