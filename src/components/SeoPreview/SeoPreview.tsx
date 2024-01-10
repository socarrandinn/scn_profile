import { Box, Typography, Grid } from '@mui/material';
import { green, blue, grey } from '@mui/material/colors';

type SeoPreviewProps = {
  title?: string;
  description?: string;
};

const SeoPreview = ({ title, description }: SeoPreviewProps) => {
  const descriptionLorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, turpis sit amet tempor mattis, orci ipsum tempor ligula, vel tempor eros velit sed neque. Nullam nec eros enim. Duis vel nibh quam.';

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item container>
          <Box
            sx={{
              width: '100%',
              border: `2px solid ${grey[400]}`,
              borderRadius: 1,
              padding: 2,
            }}
          >
            <Grid item xs={12} md={12}>
              <Typography variant='h6' color={blue[900]}>
                {title || 'Hello World! | My website'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='subtitle1' color={green[500]}>
                https://mywebsite.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant='body2'>{description || descriptionLorem}</Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SeoPreview;
