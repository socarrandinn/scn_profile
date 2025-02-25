import { IFileProps } from 'components/FileDropZone/FileTypes/types';
import { Box, Grid } from '@mui/material';
import DropMediaItem from './DropMediaItem';
import { RequestServiceDropClick } from 'components/FileDropZone/FileDropClick';

const DropBannerMedia = ({ ...props }: IFileProps) => {
  if (props?.fields?.length === 0) return <></>;

  return (
    <Box sx={{ my: 1 }}>
      <Grid container spacing={2}>
        {props?.fields.map((field, index) => {
          return (
            <Grid item xs={12} sm={6} md={2} key={`${field.id as string}-${index}`}>
              <DropMediaItem media={field} index={index} {...props} />
            </Grid>
          );
        })}
        {props?.maxFiles !== undefined ? (
          props?.fields?.length < props?.maxFiles && (
            <Grid item xs={12} sm={6} md={4}>
              <RequestServiceDropClick open={props?.open} type={props?.type} />
            </Grid>
          )
        ) : (
          <Grid item xs={12} sm={6} md={4}>
            <RequestServiceDropClick open={props?.open} type={props?.type} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
  /* return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={16}>
      {props?.fields?.map((media, index) => (
        <Grid item xs={4} md={3} lg={3} xl={2} key={index}>
          <DropMediaItem media={media} index={index} {...props} />
        </Grid>
      ))}
    </Grid>
  ); */
};

export default DropBannerMedia;
