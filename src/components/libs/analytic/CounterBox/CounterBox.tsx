import { memo, MouseEvent } from 'react';
import { Palette, Paper, PaperProps, Skeleton, styled, Typography } from '@mui/material';
import { ChildrenProps, ConditionContainer, CurrencyValue, FlexBox, NumberValue } from '@dfl/mui-react-common';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

type COLOR = 'warning' | 'secondary' | 'primary' | 'error' | 'success' | 'info';

type CounterBoxSProps = Omit<PaperProps, 'color' | 'variant'> & {
  variant?: 'outlined' | 'contented';
  color?: COLOR;
  flexGrow?: number;
  action?: (e: MouseEvent<HTMLInputElement>) => void;
  isSelected?: boolean;
  isLoading?: boolean;
};

type CounterBoxProps = ChildrenProps &
CounterBoxSProps & {
  currency?: boolean;
  loading?: boolean;
  small?: boolean;
  title: string;
  value: string | number | undefined | any;
  icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  renderValue?: (value: any) => any;
  colorIcon?: string;
};

const PaperWrapper = ({ color, variant, flexGrow, action, isSelected, ...props }: CounterBoxSProps) => (
  <Paper {...props} onClick={action} />
);

const bgContentedStyle = (color: COLOR | undefined, palette: Palette) => {
  return color
    ? {
        backgroundColor: palette[color]?.main,
        color: palette.primary.contrastText,
      }
    : {};
};

const bgOutlinedStyle = (color: COLOR | undefined, palette: Palette) => {
  return color
    ? {
        color: palette[color]?.main,
      }
    : {};
};

const bgStyle = (variant: 'outlined' | 'contented' | undefined, color: COLOR | undefined, palette: Palette) => {
  if (variant === 'contented') return bgContentedStyle(color, palette);
  return bgOutlinedStyle(color, palette);
};

const CustomIcon = styled(Box)<{ colorIcon: string }>(({ theme, colorIcon }) => ({
  display: 'flex',
  border: `2px solid ${colorIcon || theme.palette.primary.main}`,
  borderRadius: '50%',
  backgroundColor: colorIcon,
  color: theme.palette.background.paper,
  padding: 2,
}));

const customStyle = (
  variant: 'outlined' | 'contented' | undefined,
  color: COLOR | undefined,
  palette: Palette,
  isSelected?: boolean,
  action?: (e: MouseEvent<HTMLInputElement>) => void,
  isLoading?: boolean,
) => {
  if (variant === 'contented') {
    return {
      cursor: !!action && !isLoading ? 'pointer' : 'default',
    };
  }
  return {
    cursor: !!action && !isLoading ? 'pointer' : 'default',
  };
};

export const CounterBoxS = styled(PaperWrapper)<CounterBoxSProps>(
  ({ color, variant, flexGrow, theme: { palette }, action, isSelected, isLoading }) => ({
    padding: 15,
    ...bgStyle(variant, color, palette),
    ...(flexGrow ? { flexGrow } : {}),
    ...customStyle(variant, color, palette, isSelected, action, isLoading),
  }),
);

const valuesProps = { fontSize: { xs: 18, md: 20, lg: 24, xl: 26 }, fontWeight: 'bold' };
const CounterBox = ({
  title,
  value,
  currency,
  icon,
  loading,
  small,
  isSelected,
  action,
  renderValue,
  children,
  colorIcon,
  ...props
}: CounterBoxProps) => {
  const Icon = icon || (currency ? MonetizationOnOutlinedIcon : InsertChartOutlinedSharpIcon);
  const titleSize = small ? '0.85rem !important' : '1rem';

  return (
    // @ts-ignore
    <CounterBoxS {...props} isSelected={isSelected} isLoading={loading} action={loading ? undefined : action}>
      <FlexBox alignItems={'center'} gap={1}>
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
            {title}
          </Typography>
        )}
      </FlexBox>
      {loading ? (
        <Skeleton variant='text' sx={{ fontSize: '2rem', width: '40%' }} />
      ) : (
        <ConditionContainer active={!renderValue} alternative={renderValue?.(value)}>
          {currency ? (
            <CurrencyValue defaultValue={0} value={value || 0} {...valuesProps} />
          ) : (
            <NumberValue defaultValue={0} value={value || 0} {...valuesProps} />
          )}
        </ConditionContainer>
      )}
      {loading ? <Skeleton variant='text' sx={{ fontSize: '2rem', width: '40%' }} /> : children}
    </CounterBoxS>
  );
};

export default memo(CounterBox);
