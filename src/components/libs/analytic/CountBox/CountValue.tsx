import { memo } from 'react'
import { CurrencyValue, FlexBox, NumberValue } from '@dfl/mui-react-common';
import { Skeleton, Typography } from '@mui/material';

export type CountValueProps = {
  value: number | undefined
  currency?: boolean
  isLoading?: boolean
  title: string,
  variant?: 'outlined' | 'contented';
  size?: 'large' | 'small' | 'default';
}
const sizeSx: any = {
  large: {
    fontSize: '48px!important',
  },
  small: {
    fontSize: '18px!important'
  },
  default: {
    fontSize: '28px!important'
  }
};
const CountValue = ({ value = 0, currency, title, variant = 'outlined', size = 'default', isLoading }: CountValueProps) => {
  const NumberCom = currency ? CurrencyValue : NumberValue;
  return (
        <FlexBox flexDirection={'column'} flexGrow={1} >
            <Typography
                variant={'h2'}
                alignItems={'center'}
                display={'flex'}
                color={'text.secondary'}
                sx={{
                  fontSize: '22px!important'
                }}
            >
                {isLoading ? <Skeleton width={'95%'}/> : title}
            </Typography>
            {isLoading ? <Skeleton sx={sizeSx[size] || sizeSx.default} width={65}/> : <NumberCom
                value={value}
                fontWeight={'bold'}
                color={variant === 'outlined' ? 'text.primary' : undefined}
                sx={sizeSx[size] || sizeSx.default}
            />}

        </FlexBox>
  );
}

export default memo(CountValue);
