import { memo } from 'react';
import { CustomIcon, ItemContent, ItemCurrencyContent, ItemHeaderContent } from './styled';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { IValue } from './CounterGroupCard';
import Typography from '@mui/material/Typography';
import { ChildrenProps, ConditionContainer, CurrencyValue, NumberValue } from '@dfl/mui-react-common';
import { Skeleton, StackProps } from '@mui/material';

const valuesProps = { fontSize: { xs: 18, md: 20, lg: 24, xl: 26 }, fontWeight: 'bold' };

type CounterGroupCardItemProps = ChildrenProps &
StackProps & {
  value: IValue;
  currency: boolean;
  loading?: boolean;
  positive?: boolean;
  small?: boolean;
  colorIcon?: string;
  renderValue?: (value: any) => any;
};

const CounterGroupCardItem = ({
  value,
  currency,
  colorIcon,
  loading,
  small,
  renderValue,
  children,
  positive = true,
  ...props
}: CounterGroupCardItemProps) => {
  const Icon = value?.icon ? value?.icon : BarChartOutlinedIcon;
  const titleSize = small ? '0.85rem !important' : '1rem';

  return (
    <ItemContent {...props}>
      <ItemHeaderContent>
        {loading ? (
          <Skeleton variant='circular' width={32} height={32} />
        ) : colorIcon ? (
          <CustomIcon colorIcon={colorIcon}>
            <Icon fontSize={small ? 'small' : undefined} />{' '}
          </CustomIcon>
        ) : (
          <Icon fontSize={small ? 'small' : undefined} />
        )}
        {loading ? (
          <Skeleton variant='text' sx={{ fontSize: titleSize, width: '60%' }} />
        ) : (
          <Typography variant={'h2'} sx={{ fontSize: titleSize }}>
            {value?.title}
          </Typography>
        )}
      </ItemHeaderContent>
      <ItemCurrencyContent>
        {loading ? (
          <Skeleton variant='text' sx={{ fontSize: '2rem', width: '40%' }} />
        ) : (
          <ConditionContainer active={!renderValue} alternative={renderValue?.(value)}>
            {currency ? (
              <CurrencyValue
                defaultValue={0}
                value={positive && value?.value && value?.value >= 0 ? value?.value || 0 : 0}
                {...valuesProps}
              />
            ) : (
              <NumberValue
                defaultValue={0}
                value={positive && value?.value && value?.value >= 0 ? value?.value || 0 : 0}
                {...valuesProps}
              />
            )}
          </ConditionContainer>
        )}
        {loading && !!children ? <Skeleton variant='text' sx={{ fontSize: '2rem', width: '40%' }} /> : children}
      </ItemCurrencyContent>
    </ItemContent>
  );
};

export default memo(CounterGroupCardItem);
