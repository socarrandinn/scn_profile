import { Typography } from '@mui/material';
import { DOCUMENTS_DICTIONARY } from '../constants/doc-dictionary';
import { IFile } from '../interfaces/IFile';
import { downloadFile, formatSize } from 'utils/file-utils';
import { memo, useMemo } from 'react';

type Props = {
  data: IFile;
};

const FilePreview = ({ data }: Props) => {
  if (!data || typeof data === 'undefined') return null;

  const mimetypeArray = !data.originalname ? '' : data.originalname?.split('.');
  const docType = mimetypeArray.length < 1 || !mimetypeArray ? 'undefined' : mimetypeArray?.[mimetypeArray?.length - 1];
  const Icon = DOCUMENTS_DICTIONARY[docType] ?? <></>;
  const size = useMemo(() => formatSize(data?.size), [data?.size]);


  const handleDownload = (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e?.preventDefault();
    e?.stopPropagation();
    downloadFile(data);
  };

  return (
    <div className='flex p-[10px_18px_11px_14px] gap-3 items-center rounded-lg bg-[#F2F4F8] hover:underline cursor-pointer max-w-60' onClick={handleDownload}>
      <Icon />
      <div className='flex flex-col'>
        <Typography fontWeight={500} variant='body1'>
          {data.originalname}
        </Typography>
        <Typography fontWeight={300} variant='body1'>
          {size}
        </Typography>
      </div>
    </div>
  );
};

export default memo(FilePreview);
