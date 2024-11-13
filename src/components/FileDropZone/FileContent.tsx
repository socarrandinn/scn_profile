import { Box } from '@mui/material';
import { memo } from 'react';
import { MediaFile } from './FileTypes/MediaFile';
import { TYPE_DROP } from './FileDropZone';
import { IFileProps } from './FileTypes/types';
import { FileList } from './FileTypes/File';

const FileContent = ({ ...props }: IFileProps) => {
  const { type, fields } = props;
  if (fields.length === 0) return <></>;

  return (
    <Box sx={{ my: 1 }}>
      {type === TYPE_DROP.MEDIA && <MediaFile {...props} />}
      {type === TYPE_DROP.FILE && <FileList {...props} />}
    </Box>
  );
};

export default memo(FileContent);
