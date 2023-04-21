import { LANGUAGE } from 'constants/code-block';

export const pageSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { Grid, Skeleton } from '@mui/material';
import PageLayout from 'layouts/PageLayouts/PageLayout';

export default function Demo() {
  return (
    <PageLayout>
      <Grid container spacing={2}>
        {[...Array(5)].map((_, index) => (
          <Grid item xs={12} key={index}>
            <Skeleton variant={'rectangular'} width='100%' height={28} animation={false} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
}

`,
  },
];
