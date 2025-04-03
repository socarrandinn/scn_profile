import { Typography } from '@mui/material';
import { DOCUMENTS_DICTIONARY } from '../constants/doc-dictionary';
import UnknownDocIcon from 'components/libs/Icons/doc-types-icon/UnknownDocIcon';
import { IFile } from '../interfaces/IFile';
import { downloadFile } from 'utils/file-utils';
import { memo } from 'react';

type Props = {
  data: IFile;
  hideLabel?: boolean;
};

const FilePreview = ({ data, hideLabel }: Props) => {
  if (!data || typeof data === 'undefined') return null;

  const mimetypeArray = !data.originalname ? '' : data.originalname?.split('.');
  const docType = mimetypeArray.length < 1 || !mimetypeArray ? 'undefined' : mimetypeArray?.[mimetypeArray?.length - 1];
  const Icon = DOCUMENTS_DICTIONARY[docType] ?? UnknownDocIcon;

  const handleDownload = (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e?.preventDefault();
    e?.stopPropagation();
    downloadFile(data);
  };

  return (
    <div className='hover:underline cursor-pointer' onClick={handleDownload}>
      <Icon />
      {!hideLabel && (
        <Typography className='text-sm leading-tight' variant='body1'>
          {data.originalname}
        </Typography>
      )}
    </div>
  );
};

export default memo(FilePreview);
