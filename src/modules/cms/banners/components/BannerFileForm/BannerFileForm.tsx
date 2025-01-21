import { memo } from 'react';
import { HandlerError } from '@dfl/mui-react-common';
import { Grid, Stack } from '@mui/material';
import { ACCEPT_ONLY_IMAGES, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import { BannerDropZone } from 'modules/cms/medias/components/BannerDropZone';
import ImageIcon from 'components/libs/Icons/ImageIcon';
import { TransTypography } from 'components/TransTypography';

type BannerFileFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  view: 'desktop' | 'mobile';
};

const BannerFileForm = ({ error, control, isLoading, view }: BannerFileFormProps) => {
  return (
    <div>
      <HandlerError error={error} />

      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          {view === 'desktop' ? (
            <BannerDropZone
              name='desktopImage'
              dropTitle={<TextContent title='banner:dropZone.title' imageSize={'(347 x 191)'} />}
              control={control}
              required
              showDropzoneWrapper={!isLoading}
              inputProps={{
                accept: ACCEPT_ONLY_IMAGES,
                maxFiles: 10,
                maxSize: MAX_SIZE_FILE, // 5mb
              }}
              boxSx={{
                width: '100%',
                height: 191,
              }}
            />
          ) : (
            <BannerDropZone
              name='mobileImage'
              dropTitle={<TextContent title='banner:dropZone.title' imageSize={'(390 x 390)'} />}
              control={control}
              required
              showDropzoneWrapper={!isLoading}
              documentName='Plantilla productos.xlsx'
              inputProps={{
                accept: ACCEPT_ONLY_IMAGES,
                maxFiles: 10,
                maxSize: MAX_SIZE_FILE, // 5mb
              }}
              boxSx={{
                maxWidth: 390,
                height: 390,
                width: '100%',
              }}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(BannerFileForm);

type Props = {
  title: string;
  imageSize: string;
  iconSize?: string;
};
const TextContent = ({ title, imageSize, iconSize }: Props) => {
  return (
    <Stack sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <ImageIcon sx={{ fontSize: iconSize ?? '50px' }} />
      <TransTypography variant='body2' message={title} values={{ imageSize }} />
    </Stack>
  );
};
