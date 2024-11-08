import { memo } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { Thumbnail, ThumbnailWrapper } from '../../styled';
import { RequestServiceDropClick } from '../../FileDropClick';
import { FileActions } from 'components/FileDropZone/RequestServiceActions';
import { getFullUrl } from 'utils/index';
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import { IFileProps } from '../types';

const MediaFile = ({ fields, isUploading, remove, actions, maxFiles, open, type }: IFileProps) => {
  const { isDelete, isDownload } = actions;

  return (
    <Grid container spacing={2}>
      {fields.map((field, index) => {
        const url = getFullUrl(field?.thumb);
        return (
          <Grid item xs={12} sm={6} md={2} key={field.id}>
            <ThumbnailWrapper elevation={0}>
              {isUploading ? (
                <Thumbnail variant='square'>
                  <CircularProgress />
                </Thumbnail>
              ) : (
                <Thumbnail src={url} variant='square'>
                  <ImageNotSupportedOutlinedIcon />
                </Thumbnail>
              )}
              <FileActions
                type={type}
                remove={remove}
                index={index}
                isDelete={isDelete}
                isDownload={isDownload}
                link={field?.image}
              />
            </ThumbnailWrapper>
          </Grid>
        );
      })}
      {maxFiles !== undefined ? (
        fields?.length < maxFiles && (
          <Grid item xs={12} sm={6} md={4}>
            <RequestServiceDropClick open={open} type={type} />
          </Grid>
        )
      ) : (
        <Grid item xs={12} sm={6} md={4}>
          <RequestServiceDropClick open={open} type={type} />
        </Grid>
      )}
    </Grid>
  );
};

export default memo(MediaFile);
