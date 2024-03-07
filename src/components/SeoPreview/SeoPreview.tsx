import { Box, Typography, Grid } from '@mui/material';
import { green, blue, grey } from '@mui/material/colors';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

type SeoPreviewProps = {
  title?: string;
  description?: string;
  urlSlug?: string;
};

const SeoPreview = ({ title, description, urlSlug }: SeoPreviewProps) => {
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
              padding: 1,
            }}
            display={'flex'}
            alignItems={'center'}
          >
            <Grid item xs={12} md={10}>
              <Grid item xs={12} md={12}>
                <Typography variant='h6' color={blue[900]}>
                  {title || 'Hello World! | My website'}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='subtitle1' color={green[500]}>
                  {urlSlug}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant='body2'>{description || descriptionLorem}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={2} justifyContent='center' display='flex'>
              <FormUploadImage name={'seo.image'} size={100} variant={'rounded'}>
                <AddPhotoAlternateIcon />
              </FormUploadImage>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SeoPreview;
