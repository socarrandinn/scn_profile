import {
  Grid,
  ListItemIcon,
  ListItemText,
  Paper,
  PaperProps,
  Stack,
  Typography,
  ListItem as MuiListItem,
  styled,
} from '@mui/material';
import { memo } from 'react';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { RadialBarChart } from './RadialBarChart';
import { ValueListContent } from './ValueList';

type SummaryStoreBoxProps = {
  summary: {
    title: string;
    subtitle: string;
    icon?: any;
  };
  list: {
    title: string;
    icon?: any;
    list: number[];
  };
  paperProps?: PaperProps;
  colors: string[];
  isLoading: boolean;
};

const SummaryStoreBox = ({ summary, list, colors, isLoading, paperProps }: SummaryStoreBoxProps) => {
  return (
    <Paper
      sx={{
        padding: 2,
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={5}>
          <Stack gap={1}>
            <ListItem>
              <ListItemIcon>{summary.icon || <Inventory2OutlinedIcon />}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography lineHeight={1} fontWeight={600} noWrap variant='subtitle1'>
                    {summary.title}
                  </Typography>
                }
              />
            </ListItem>
            <Typography>{summary.subtitle}</Typography>
            <RadialBarChart />
          </Stack>
        </Grid>
        <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
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
  '& .MuiListItemIcon-root': {
    minWidth: 32,
    ...(isColor
      ? {
          color: theme.palette.primary.main,
        }
      : {}),
  },
}));
