import { Box, Typography, Grid, Stack } from '@mui/material';
import { green, blue, grey } from '@mui/material/colors';
import { FormUploadImage } from 'modules/common/components/UploadImage';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { IImageMedia } from 'modules/common/interfaces';
import AvatarEditable from 'components/AvatarEditable/AvatarEditable';

type SeoPreviewProps = {
  title?: string;
  description?: string;
  urlSlug?: string;
  isEdit?: boolean;
  image?: IImageMedia;
  imageSize?: number;
  mobile?: boolean;
};

const SeoPreview = ({ title, description, urlSlug, isEdit, image, imageSize, mobile }: SeoPreviewProps) => {
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
            <Stack
              sx={{
                flexDirection: 'column',
                gap: 1,
                width: '100%',
              }}
            >
              <Stack flexDirection={'row'} gap={2} width={'100%'} justifyContent={'space-between'}>
                <Stack width={'100%'}>
                  <Typography variant='h6' color={blue[900]} sx={{ wordBreak: 'break-all' }}>
                    {title || 'Hello World! | My website'}
                  </Typography>
                  <Typography variant='subtitle1' color={green[500]} sx={{ wordBreak: 'break-all' }}>
                    {urlSlug}
                  </Typography>
                  {!mobile && <Typography variant='body2'>{description || descriptionLorem}</Typography>}
                </Stack>
                {isEdit ? (
                  <FormUploadImage name={'seo.image'} size={imageSize || 100} variant={'rounded'}>
                    <AddPhotoAlternateIcon />
                  </FormUploadImage>
                ) : (
                  <AvatarEditable readOnly avatar={image} variant={'rounded'} size={100}>
                    <AddPhotoAlternateIcon fontSize='large' />
                  </AvatarEditable>
                )}
              </Stack>
              {mobile && <Typography variant='body2'>{description || descriptionLorem}</Typography>}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SeoPreview;
