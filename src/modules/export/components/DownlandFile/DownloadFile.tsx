import { memo, useCallback, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import DialogDownload from '../Dialog/DialogDownload';
import { ExportStatusResponse } from 'modules/export/interfaces/common-export';

type DownloadFileProps = {
  isOpen: boolean;
  onClose: () => void;
  fnDownloadService: (path: string) => Promise<void>;
  initResponse: ExportStatusResponse;
};

const DownloadFile = ({ isOpen, onClose, initResponse, fnDownloadService }: DownloadFileProps) => {
  const [errorExport, setError] = useState<any>(undefined);

  const handleConsole = useCallback(() => {
    onClose?.();
    setError(undefined);
  }, [onClose]);

  const { mutate: downloadFile, error } = useMutation((path: string) => fnDownloadService(path), {
    onSuccess: () => {
      setTimeout(() => {
        onClose?.();
      }, 1000);
    },
    onError: (e: any) => {
      console.error('Error downloading file:', e);
    },
  });

  useEffect(() => {
    if (isOpen && initResponse) {
      if (initResponse.status === 'ERROR') {
        setError('ERROR');
      } else if (initResponse.status === 'COMPLETED') {
        downloadFile(initResponse.path as string);
      }
    }
  }, [isOpen, initResponse, downloadFile]);

  return <DialogDownload isOpen={isOpen} error={error || errorExport} onClose={handleConsole} />;
};

export default memo(DownloadFile);
