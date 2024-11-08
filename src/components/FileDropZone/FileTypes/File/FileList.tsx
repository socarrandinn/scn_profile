import { memo } from 'react';
import { FileList } from '../styled';
import FileItem from './FileItem';
import FileItemSkeleton from './FileItemSkeleton';
import { IFileProps } from '../types';

const File = ({ fields, isUploading, remove, actions, open, type, maxFiles }: IFileProps) => {
  const { isDelete, isDownload } = actions;
  return (
    <FileList>
      {isUploading ? (
        <FileItemSkeleton />
      ) : (
        fields?.map((field: any, index) => (
          <FileItem key={field?.id} {...{ remove, field, index, isDelete, isDownload, type }} />
        ))
      )}
      {/*      {maxFiles !== undefined ? (
        fields?.length < maxFiles && <FileDropClick open={open} type={type} />
      ) : (
        <FileDropClick open={open} type={type} />
      )} */}
    </FileList>
  );
};

export default memo(File);
