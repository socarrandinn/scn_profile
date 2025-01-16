import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Box, LinearProgress, PaperProps, Stack, Typography } from '@mui/material';
import React from 'react';
import { IconButton, imageUrl } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IUploadImage } from 'modules/common/components/MediaUploader/interfaces';
import { RED } from 'settings/theme';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type ThumbContainerProps = { active?: boolean; size?: number; hasError?: boolean };
const Wrapper = ({ active, size, hasError, ...props }: ThumbContainerProps & PaperProps) => {
  return <Paper {...props} />;
};

const ThumbContainer = styled(Wrapper)<ThumbContainerProps>(({ active, size, hasError, theme }) => ({
  borderRadius: 6,
  height: size,
  padding: 4,
  position: 'relative',
  cursor: 'pointer',
  '&>*': {
    borderRadius: 6,
  },
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: active ? theme.palette.primary.main : theme.palette.background.paper,
  img: {
    // height: 'auto'
    objectFit: 'contain',
    ...(hasError
      ? {
          filter: 'blur(5px)',
        }
      : {}),
  },
  // border
}));

export const LoadingCover = styled('div')(() => ({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#00000063',
  '.MuiLinearProgress-root': {
    width: '60%',
    borderRadius: '4px',
  },
}));

export const ErrorCover = styled(LoadingCover)(() => ({
  background: '#f02b2b4f',
}));

type ImageThumbProps = {
  active?: boolean;

  isLoading?: boolean;
  size?: number;
  image: IUploadImage;
  onDeleteClick?: () => void;
  onSelect?: (e?: any) => void;
  title?: string;
};

const Thumb = ({
  active,
  size = 60,
  onSelect,
  isLoading,
  onDeleteClick,
  image: { thumb, isLoading: isUploading, isError },
  ...props
}: ImageThumbProps) => {
  const { t } = useTranslation('common');
  const loadState = isLoading || isUploading;
  return (
    <>
      <ThumbContainer
        className='group'
        active={active}
        size={Number(size) + 12}
        elevation={1}
        onClick={onSelect}
        hasError={isError}
      >
        <img {...props} src={imageUrl(thumb || '')} width={size} height={size} />

        {!loadState && !isError && (
          <>
            <Box
              className='hidden group-hover:block top-0 left-0 group-hover:opacity-80 transition-all'
              width={'100%'}
              height={'100%'}
              bgcolor={'#000'}
              position={'absolute'}
            />

            <Stack
              className='absolute top-[35%] left-0 hidden group-hover:flex'
              direction={'row'}
              width={'100%'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <IconButton
                sx={{ color: 'white' }}
                tooltip={t('preview')}
                onClick={() => {
                  window.open(imageUrl(thumb || ''), '_blank', 'noreferrer');
                }}
              >
                <VisibilityOutlinedIcon />
              </IconButton>

              {onDeleteClick && (
                <IconButton sx={{ color: RED }} tooltip={t('delete')} onClick={onDeleteClick}>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              )}
            </Stack>
          </>
        )}

        {loadState && (
          <LoadingCover>
            <LinearProgress />
          </LoadingCover>
        )}

        {isError && (
          <ErrorCover>
            <Typography variant={'overline'} color={'white'}>
              {t('error')}
            </Typography>
          </ErrorCover>
        )}
      </ThumbContainer>
    </>
  );
};

export default Thumb;
