import { Typography } from '@mui/material';
import { DOCUMENTS_DICTIONARY } from '../constants/doc-dictionary';
import { IFile } from '../interfaces/IFile';
import { downloadFile, formatSize } from 'utils/file-utils';
import { memo, ReactNode } from 'react';
import { LongText } from '@dfl/mui-react-common';
import { normalizeText } from 'utils/normalize-string';

type Props = {
  data: IFile;
  actions?: ReactNode
};

const FilePreview = ({ data, actions }: Props) => {
  if (!data || typeof data === 'undefined') return null;

  const mimetypeArray = !data.originalname ? '' : data.originalname?.split('.');
  const docType = mimetypeArray.length < 1 || !mimetypeArray ? 'undefined' : mimetypeArray?.[mimetypeArray?.length - 1];
  const Icon = DOCUMENTS_DICTIONARY[docType] ?? <></>;

  const handleDownload = (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e?.preventDefault();
    e?.stopPropagation();
    downloadFile(data);
  };

  return (
    <div className='flex p-[9px_18px_9px_11px] gap-3 items-center rounded-lg bg-[#F2F4F8] cursor-pointer'>
      <Icon />
      <div className='flex flex-col'>
        <LongText fontWeight={500} variant='body1' text={normalizeText(data?.originalname)} lineClamp={1} onClick={handleDownload} sx={{ '&:hover': { textDecoration: 'underline' } }} />
        <Typography fontWeight={300} variant='body1'>
          {formatSize(data?.size)}
        </Typography>
      </div>
      {actions}
    </div>
  );
};

export default memo(FilePreview);
