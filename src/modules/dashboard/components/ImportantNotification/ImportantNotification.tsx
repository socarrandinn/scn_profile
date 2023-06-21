import React, { FC, memo } from 'react';
import { PaperTabView } from 'modules/common/components/TabsWithSections/PaperTabView';
import { Grid, Typography, Box } from '@mui/material';

interface INotification {
  url: string;
  name: string;
  title: string;
  bodyMenssager: string;
}

const ImportantNotification: FC<INotification> = ({ url, name, title, bodyMenssager }) => {
  return (
    <PaperTabView
      firsts
      sx={{ backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'top', minHeight: 180 }}
    >
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item xs={8} sx={{ fontFamily: 'fantasy', color: '#553089' }}>
          <Typography variant='h5' component='div' style={{ marginBottom: 3, fontWeight: 600, }}>
            {name}
          </Typography>
          <Typography variant='h2' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' component='div' style={{ marginTop: 12 }}>
            {bodyMenssager}
          </Typography>
          <Box sx={{ display: 'inline-flex', marginTop: 1 }}>
          <Typography variant='caption' component='div' style={{ fontWeight: 500, marginTop: 6, marginBottom: 3, marginRight: 4 }}>
            Entendido
          </Typography>
          <img src='/images/flecha.svg'></img>
          </Box>
        </Grid>
      </Grid>
    </PaperTabView>
  );
};

export default memo(ImportantNotification);
