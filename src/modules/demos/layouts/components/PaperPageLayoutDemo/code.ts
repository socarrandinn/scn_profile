import { LANGUAGE } from 'constants/code-block';

export const paperPageSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { Grid, Skeleton, IconButton } from '@mui/material';
import PagePaperLayout from 'layouts/PageLayouts/PagePaperLayout';
import { Email, Send } from '@mui/icons-material';
import { GeneralActions } from 'layouts/portals';

const Actions = () => {
  return (
    <GeneralActions>
      <IconButton><Send /></IconButton>
      <IconButton><Email /></IconButton>
    </GeneralActions>
  );
};

export default function Demo() {

  return (
    <PagePaperLayout title={'Title'}>
      <Actions />
      <Grid container spacing={2}>
        {[...Array(5)].map((_, index) => (
          <Grid item xs={12} key={index}>
            <Skeleton variant={'rectangular'} width='100%' height={28} animation={false} />
          </Grid>
        ))}
      </Grid>
    </PagePaperLayout>
  );
}

`,
  },
];
