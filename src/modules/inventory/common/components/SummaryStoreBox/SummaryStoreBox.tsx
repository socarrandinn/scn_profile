import {
  Grid,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  ListItem as MuiListItem,
  styled,
  Skeleton,
} from '@mui/material';
import { memo } from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { ValueListContent } from './ValueList';
import { ChildrenProps } from '@dfl/mui-react-common';
import { grey } from '@mui/material/colors';

export interface ISerie {
  serie: number;
  label: string;
  of?: number;
}

type SummaryStoreBoxProps = ChildrenProps & {
  summary: {
    title: string;
    subtitle: string;
    icon?: any;
  };
  list: {
    title: string;
    icon?: any;
    series: ISerie[];
  };
  colors?: string[];
  isLoading: boolean;
};

export const dColors = ['#344f86', '#ff4081', '#40c4ff', '#ff9800'];

const SummaryStoreBox = ({ summary, list, colors = dColors, isLoading, children }: SummaryStoreBoxProps) => {
  return (
    <Paper
      sx={{
        padding: '16px 16px 2px 16px'
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid item xs={12}>
          <ListItem>
            <ListItemIcon>{summary?.icon || <Inventory2OutlinedIcon />}</ListItemIcon>
            <ListItemText
              primary={
                <Typography lineHeight={1} fontWeight={600} noWrap variant='subtitle1'>
                  {summary?.title}
                </Typography>
              }
            />
          </ListItem>
          <Typography sx={{ color: grey[600] }}>{summary?.subtitle}</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
            <RadialCondiction active={isLoading}>{children}</RadialCondiction>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <ValueListContent colors={colors} list={list} isLoading={isLoading} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default memo(SummaryStoreBox);

export const ListItem = styled(MuiListItem)<{ isColor?: boolean }>(({ theme, isColor }) => ({
  padding: 0,
  margin: 0,
  '& .MuiListItemText-root': {
    maring: 0,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 32,
    ...(isColor
      ? {
          color: theme.palette.primary.main,
        }
      : {}),
  },
}));

type RadialCondictionProps = ChildrenProps & {
  active: boolean;
};
export const RadialCondiction = ({ active, children }: RadialCondictionProps) => {
  if (active) return <Skeleton variant='circular' height={75} width={75} />;
  return <>{children}</>;
};
