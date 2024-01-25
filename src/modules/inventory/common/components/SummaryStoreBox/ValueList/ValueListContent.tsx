import { ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import ValueSkeleton from './ValueSkeleton';
import { PercentValue } from 'components/libs/PercentValue';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { ListItem } from '../SummaryStoreBox';

type ValueListContentProps = {
  isLoading: boolean;
  list: {
    title: string;
    icon?: any;
    list: number[];
  };
  colors: string[];
};

const ValueListContent = ({ isLoading, list, colors }: ValueListContentProps) => {
  if (isLoading) return <ValueSkeleton />;
  return (
    <Stack gap={1}>
      <ListItem isColor>
        <ListItemIcon>{list.icon || <BarChartOutlinedIcon />}</ListItemIcon>
        <ListItemText
          primary={
            <Typography variant='subtitle1' fontWeight={600} color='primary.main'>
              {list.title}
            </Typography>
          }
        />
      </ListItem>
      <Stack gap={1}>
        {list.list?.map((item, index) => {
          const color = colors[index];
          return (
            <Stack key={item} flexDirection={'row'} alignItems={'center'} gap={{ xs: 1, md: 2 }}>
              <Circle color={color} index={index} />
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
  index: number;
};
export const Circle = ({ color, index }: CircleProps) => {
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      sx={(theme) => ({
        width: 28,
        height: 28,
        borderRadius: '50%',
        lineHeight: 0,
        color: theme.palette.background.paper,
        backgroundColor: color || theme.palette.primary.main,
      })}
    >
      <Typography noWrap color={'background.paper'}>
        {index}
      </Typography>
    </Stack>
  );
};

type PercentProps = {
  color?: string;
  value: number;
};
export const Percent = ({ value, color }: PercentProps) => {
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
          width: `${value}%`,
          backgroundColor: color || theme.palette.primary.main,
          height: 24,
          borderRadius: '0 12px 12px 0',
          color: theme.palette.background.paper,
        })}
      >
        {value > 0 && <PercentValue sx={{ position: 'absolute', left: 6, top: 3 }} variant='h2' value={value} />}
      </Stack>
    </Stack>
  );
};
