import { memo, useCallback } from 'react';
import { HandlerError } from '@dfl/mui-react-common';
import { Grid, Stack } from '@mui/material';
import { ACCEPT_ONLY_IMAGES, MAX_SIZE_FILE } from 'components/FileDropZone/constants/common';
import { BannerDropZone } from 'modules/cms/medias/components/BannerDropZone';
import ImageIcon from 'components/libs/Icons/ImageIcon';
import { TransTypography } from 'components/TransTypography';
import { IImageOption } from 'modules/common/interfaces';
import useCollectionPositionContext from '../../context/useCollectionPositionContext';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';
import { getComponentSize } from '../../constants/banner.sizes';

type BannerFileFormProps = {
  error: any;
  control: any;
  isLoading: boolean;
  view: 'desktop' | 'mobile';
  maxFiles?: number;
  imageOption: IImageOption;
  disabled?: boolean;
};

const BannerFileForm = ({
  error,
  control,
  isLoading,
  view,
  maxFiles = 1,
  imageOption,
  disabled = false,
}: BannerFileFormProps) => {
  const { collection } = useCollectionPositionContext();
  const sizes = getComponentSize(collection?.bannerType as COLLECTION_BANNER_TYPE, collection?.position);
  const sizeTitle = useCallback((width: string, height: string) => {
    if (width && height) {
      return `(${width} x ${height})`;
    }
    return '(390 x 390)';
  }, []);

  return (
    <div>
      <HandlerError error={error} />

      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          {view === 'desktop' ? (
            <BannerDropZone
              name='image'
              dropTitle={
                <TextContent
                  title='banner:dropZone.title'
                  imageSize={sizeTitle(sizes?.desktop?.width, sizes?.desktop?.height)}
                />
              }
              control={control}
              required
              disabled
              showDropzoneWrapper={!isLoading}
              inputProps={{
                accept: ACCEPT_ONLY_IMAGES,
                maxFiles,
                maxSize: MAX_SIZE_FILE, // 5mb
                disabled,
              }}
              boxSx={{
                width: '100%',
                height: 191,
              }}
              imageOption={imageOption}
            />
          ) : (
            <BannerDropZone
              name='image'
              dropTitle={
                <TextContent
                  title='banner:dropZone.title'
                  imageSize={sizeTitle(sizes?.mobile?.width, sizes?.mobile?.height)}
                />
              }
              control={control}
              required
              showDropzoneWrapper={!isLoading}
              inputProps={{
                accept: ACCEPT_ONLY_IMAGES,
                maxFiles,
                maxSize: MAX_SIZE_FILE, // 5mb
                disabled,
              }}
              boxSx={{
                maxWidth: 390,
                height: 390,
                width: '100%',
              }}
              imageOption={imageOption}
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
