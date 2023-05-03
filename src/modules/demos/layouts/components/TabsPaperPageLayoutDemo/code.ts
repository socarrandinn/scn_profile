import { LANGUAGE } from 'constants/code-block';

export const code = [
  {
    language: LANGUAGE.TSX,
    code: `import PageTabPaperLayout from 'layouts/PageLayouts/PageTabPaperLayout';
import { IconButton } from '@mui/material';
import { Email, Send, PeopleAlt, MonetizationOn } from '@mui/icons-material';
import { GeneralActions } from 'layouts/portals';
import { TabRouteType } from '@dfl/react-security';
import Box from '@mui/material/Box';

const Actions = () => {
  return (
    <GeneralActions>
      <IconButton><Send /></IconButton>
      <IconButton><Email /></IconButton>
    </GeneralActions>
  );
};

const tabs: TabRouteType[] = [
  {
    label: 'tab.key',
    translate: false,
    path: '/demos/layouts/tabs-page/:id/users',
    to: '/users',
    disabled: true,
    render: () => (
      <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <PeopleAlt />
        Users
      </Box>
    ),
  },
  {
    label: 'tab.key',
    translate: false,
    path: '/demos/layouts/tabs-page/:id/transactions',
    to: '/transactions',
    disabled: true,
    render: () => (
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        <MonetizationOn />
        Transactions
      </Box>
    ),
  },
];

export default function Demo() {

  return (
    <PageTabPaperLayout prefix={'/demos/layout/tabs-page/'} tabs={tabs}>
    <Actions />
    <Grid container spacing={2}>
      {[...Array(5)].map((_, index) => (
        <Grid item xs={12} key={index}>
          <Skeleton variant={'rectangular'} width='100%' height={28} animation={false} />
        </Grid>
      ))}
    </Grid>
    </PageTabPaperLayout>
  );
}


`,
  },
];
