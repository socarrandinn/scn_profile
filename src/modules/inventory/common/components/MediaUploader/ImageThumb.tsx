import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import { LinearProgress, PaperProps, Typography } from '@mui/material';
import { IUploadImage } from 'modules/common/interfaces';
import React from 'react';
import { IconButton, imageUrl } from '@dfl/mui-react-common';
import { Delete } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type ThumbContainerProps = { active?: boolean, size?: number, hasError?: boolean }
const Wrapper = ({ active, size, hasError, ...props }: ThumbContainerProps & PaperProps) => {
  return <Paper {...props}/>
}

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
    ...(hasError ? {
      filter: 'blur(5px)'
    } : {})
  },
  '.thumb-delete': {
    position: 'absolute',
    top: '5px',
    right: '3px',
    zIndex: 1,
  }
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
    borderRadius: '4px'
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
  onSelect?: () => void;
  title?: string;
};

const Thumb = ({
  active,
  size,
  onSelect,
  isLoading,
  onDeleteClick,
  image: { thumb, isLoading: isUploading, isError },
  ...props
}: ImageThumbProps) => {
  const { t } = useTranslation('common');
  const loadState = isLoading || isUploading;
  return (
        <ThumbContainer active={active} size={Number(size) + 12} elevation={1} onClick={onSelect} hasError={isError}>
            <img {...props}
                 src={ imageUrl(thumb || '')}
                 width={size}
                 height={size}/>
            {(loadState) && <LoadingCover><LinearProgress/></LoadingCover>}
            {(isError) && <ErrorCover>
                <Typography variant={'overline'} color={'white'}>{t('error')}</Typography>
            </ErrorCover>}
            {(!loadState && onDeleteClick) && (
                <IconButton sx={{ color: 'white' }} className={'thumb-delete'} tooltip={t('delete')}
                            onClick={onDeleteClick}>
                    <Delete/>
                </IconButton>
            )}
        </ThumbContainer>
  )
};

Thumb.defaultProps = {
  size: 60,
};

export default Thumb;
