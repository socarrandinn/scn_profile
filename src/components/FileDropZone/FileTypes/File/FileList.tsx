import { memo } from 'react';
import { FileList } from '../styled';
import FileItem from './FileItem';
import FileItemSkeleton from './FileItemSkeleton';
import { IFileProps } from '../types';

const File = ({ fields, isUploading, remove, actions, type, documentName }: IFileProps) => {
  const { isDelete, isDownload } = actions;
  return (
    <FileList>
      {isUploading ? (
        <FileItemSkeleton />
      ) : (
        fields?.map((field: any, index) => (
          <FileItem key={field?.id} {...{ remove, field, index, isDelete, isDownload, type, documentName }} />
        ))
      )}
    </FileList>
  );
};

export default memo(File);
