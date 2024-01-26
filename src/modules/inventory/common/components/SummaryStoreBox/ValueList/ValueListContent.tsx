import { Chip, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import ValueSkeleton from './ValueSkeleton';
import { PercentValue } from 'components/libs/PercentValue';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { ISerie, ListItem } from '../SummaryStoreBox';

type ValueListContentProps = {
  isLoading: boolean;
  list: {
    title: string;
    icon?: any;
    series: ISerie[];
  };
  colors: string[];
};

const ValueListContent = ({ isLoading, list, colors }: ValueListContentProps) => {
  if (isLoading) return <ValueSkeleton />;
  return (
    <Stack gap={1}>
      <ListItem isColor>
        <ListItemIcon>{list?.icon || <BarChartOutlinedIcon />}</ListItemIcon>
        <ListItemText
          primary={
            <Typography variant='subtitle2' fontWeight={600} color='primary.main'>
              {list?.title}
            </Typography>
          }
        />
      </ListItem>
      <Stack gap={{ xs: 0.5, md: 1 }}>
        {list?.series?.map((item, index) => {
          const color = colors[index];
          return (
            <Stack key={item?.serie} flexDirection={'row'} alignItems={'center'} gap={{ xs: 1, md: 2 }}>
              <Circle color={color} serie={item?.serie} />
              <Percent value={item} color={color} />
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default memo(ValueListContent);

type CircleProps = {
  color?: string;
  serie: number;
};
export const Circle = ({ color, serie }: CircleProps) => {
  return (
    <Chip
      label={serie}
      variant='filled'
      sx={(theme) => ({ backgroundColor: color, color: theme.palette.background.paper })}
    />
  );
};

type PercentProps = {
  color?: string;
  value: ISerie;
};
export const Percent = ({ value, color }: PercentProps) => {
  const serie = useMemo(() => getPercent(value?.serie, value?.of), [value, getPercent]);

  return (
    <Stack
      sx={(theme) => ({
        border: `1px solid ${theme.palette.divider}`,
        width: '100%',
        borderRadius: '0 12px 12px 0',
      })}
    >
      <Stack
        position={'relative'}
        alignItems={'start'}
        justifyContent={'center'}
        sx={(theme) => ({
          width: serie === 0 ? '20%' : `${serie}%`,
          backgroundColor: serie === 0 ? 'transparent' : color || theme.palette.primary.main,
          height: 24,
          borderRadius: '0 12px 12px 0',
          color: theme.palette.background.paper,
        })}
      >
        {serie > 0 && (
          <PercentValue
            noWrap
            sx={(theme) => ({
              position: 'absolute',
              left: 6,
              pr: 1,
              display: 'inline-block',
              textShadow: `1px 1px 1px ${color || theme.palette.primary.main}`,
            })}
            variant='h2'
            value={serie}
          />
        )}
      </Stack>
    </Stack>
  );
};

const getPercent = (value: number, total: number | undefined) => {
  if (!total) return value;
  return (value / total) * 100;
};
