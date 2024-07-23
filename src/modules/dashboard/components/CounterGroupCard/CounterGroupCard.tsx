import { MouseEvent, memo } from 'react';
import CounterGroupCardItem from './CounterGroupCardItem';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import {
  Divider,
  Palette,
  Paper,
  PaperProps,
  Stack,
  SvgIconTypeMap,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

type COLOR = 'warning' | 'secondary' | 'primary' | 'error' | 'success' | 'info';

export interface IValue {
  title: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  value: number | undefined;
}

type CounterValuesBoxSProps = Omit<PaperProps, 'color' | 'variant'> & {
  variant?: 'outlined' | 'contented';
  color?: COLOR;
  flexGrow?: number;
  action?: (e: MouseEvent<HTMLInputElement>) => void;
  renderValue?: (value: any) => any;
  isSelected?: boolean;
  isLoading?: boolean;
};

const PaperWrapper = ({ color, variant, flexGrow, action, isSelected, ...props }: CounterValuesBoxSProps) => (
  <Paper {...props} onClick={action} />
);

const bgContentedStyle = (color: COLOR | undefined, palette: Palette) => {
  return color
    ? {
        backgroundColor: palette[color]?.main,
        color: color === 'primary' ? palette.primary.contrastText : palette.getContrastText(palette[color]?.main),
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

const customStyle = (
  variant: 'outlined' | 'contented' | undefined,
  color: COLOR | undefined,
  palette: Palette,
  isSelected?: boolean,
  action?: (e: MouseEvent<HTMLInputElement>) => void,
  isLoading?: boolean,
) => {
  const bw = 10;
  if (variant === 'contented') {
    return {
      cursor: !!action && !isLoading ? 'pointer' : 'default',
      '& .MuiDivider-root': {
        borderColor: palette.background.paper,
      },
      borderRight: isSelected && !isLoading ? `${bw}px solid ${palette.secondary?.main}` : `${bw}px solid transparent`,
    };
  }
  return {
    cursor: !!action && !isLoading ? 'pointer' : 'default',
    borderRight:
      isSelected && !isLoading ? `${bw}px solid ${palette[color || 'secondary']?.main}` : `${bw}px solid transparent`,
    ':hover': {
      borderRight:
        (!!action || isSelected) && !isLoading
          ? `${bw}px solid ${palette[color || 'secondary']?.main}`
          : `${bw}px solid transparent`,
    },
  };
};

export const CounterValuesBoxS = styled(PaperWrapper)<CounterValuesBoxSProps>(
  ({ color, variant, flexGrow, theme: { palette }, action, isSelected, isLoading }) => ({
    padding: 15,
    ...bgStyle(variant, color, palette),
    ...(flexGrow ? { flexGrow } : {}),
    ...customStyle(variant, color, palette, isSelected, action, isLoading),
  }),
);

type CounterGroupCardProps = CounterValuesBoxSProps &
ChildrenProps & {
  values: IValue[];
  currency?: boolean;
  loading?: boolean;
  small?: boolean;
  colorIcon?: string;
};

const CounterGroupCard = ({
  values,
  currency = false,
  loading,
  colorIcon,
  small,
  isSelected,
  action,
  renderValue,
  children,
  ...props
}: CounterGroupCardProps) => {
  const theme = useTheme();
  const resp = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <CounterValuesBoxS {...props} isSelected={isSelected} isLoading={loading} action={loading ? undefined : action}>
      <Stack
        divider={
          resp ? (
            <Divider orientation='horizontal' flexItem />
          ) : (
            <Divider sx={{ mr: 1 }} orientation='vertical' flexItem />
          )
        }
        justifyContent={'space-between'}
        flex={1}
        gap={1}
        direction={{ xs: 'column', md: 'row' }}
      >
        {values?.map((value, index) => {
          return <CounterGroupCardItem key={value?.title} {...{ value, loading, colorIcon, small, currency }} />;
        })}
      </Stack>
    </CounterValuesBoxS>
  );
};

export default memo(CounterGroupCard);
