import { Box, Typography, Grid } from '@mui/material';
import { green, blue, grey } from '@mui/material/colors';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

type SeoPreviewProps = {
  title?: string;
  description?: string;
  urlSlug?: string;
  isEdit?: boolean;
};

const SeoPreview = ({ title, description, urlSlug, isEdit }: SeoPreviewProps) => {
  const descriptionLorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, turpis sit amet tempor mattis, orci ipsum tempor ligula, vel tempor eros velit sed neque. Nullam nec eros enim. Duis vel nibh quam.';
  const imgMaxSize = isEdit ? 100 : 80;
  const imgMarginRightCreate = isEdit ? 0 : 1;
  const imgMarginToptCreate = isEdit ? 0 : 3;
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item container >
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
                <Typography
                  variant='h6'
                  color={blue[900]}
                  // style={{
                  //   overflow: 'hidden',
                  //   textOverflow: 'ellipsis',
                  //   display: '-webkit-box',
                  //   WebkitLineClamp: 2,
                  //   WebkitBoxOrient: 'vertical',
                  //   maxWidth: '100ch',
                  // }}
                >
                  {title || 'Hello World! | My website'}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant='subtitle1'
                  color={green[500]}
                  // style={{
                  //   overflow: 'hidden',
                  //   textOverflow: 'ellipsis',
                  //   display: '-webkit-box',
                  //   WebkitLineClamp: 2,
                  //   WebkitBoxOrient: 'vertical',
                  //   maxWidth: '100ch',
                  // }}
                >
                  {urlSlug}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant='body2'
                  // style={{
                  //   overflow: 'hidden',
                  //   textOverflow: 'ellipsis',
                  //   display: '-webkit-box',
                  //   WebkitLineClamp: 2,
                  //   WebkitBoxOrient: 'vertical',
                  //   maxWidth: '100%',
                  // }}
                >
                  {description || descriptionLorem}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              justifyContent='center'
              display='flex'
              marginRight={imgMarginRightCreate}
              marginTop={imgMarginToptCreate}
            >
              <FormUploadImage name={'seo.image'} size={imgMaxSize} variant={'rounded'}>
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
