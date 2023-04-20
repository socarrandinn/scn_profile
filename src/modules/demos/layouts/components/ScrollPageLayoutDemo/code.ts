import { LANGUAGE } from 'constants/code-block';

export const scrollPageSampleCode = [
  {
    language: LANGUAGE.TSX,
    code: `import { Grid, Skeleton } from '@mui/material';
import ScrollPaperLayout from 'layouts/PageLayouts/ScrollPaperLayout';

export default function Demo() {

  return (
    <ScrollPaperLayout restMaxHeight={500}>
      <Grid container spacing={2}>
        {[...Array(30)].map((_, index) => (
          <Grid item xs={12} key={index}>
            <Skeleton variant={'rectangular'} width='100%' height={28} animation={false} />
          </Grid>
        ))}
      </Grid>
    </ScrollPaperLayout>
  );
}

`,
  },
];
