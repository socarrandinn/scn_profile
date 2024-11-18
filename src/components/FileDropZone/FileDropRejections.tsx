import { Alert, Stack } from '@mui/material';
import { TransTypography } from 'components/TransTypography';
import { memo, useMemo, useCallback } from 'react';
import { ErrorCode, FileError, FileRejection } from 'react-dropzone';
import { formatSize } from 'utils/file-utils';

type GroupedError = {
  files: string[];
  sizeInfo?: string[];
};

type FileDropRejectionsProps = {
  rejections: readonly FileRejection[];
  maxFiles: number | undefined;
};

const FileDropRejections: React.FC<FileDropRejectionsProps> = ({ rejections, maxFiles }: any) => {
  const isErrorSize = useCallback(
    (code: ErrorCode): boolean => [ErrorCode.FileTooLarge, ErrorCode.FileTooSmall].includes(code),
    [],
  );

  const groupedErrors = useMemo(() => {
    const errorMap = new Map<string, GroupedError>();

    rejections?.forEach(({ errors, file }: any) => {
      errors.forEach((error: FileError) => {
        const errorKey = error.code;

        // Si el error no está en el mapa, inicializamos un nuevo grupo
        if (!errorMap.has(errorKey)) {
          errorMap.set(errorKey, { files: [], sizeInfo: [] });
        }

        const errorEntry = errorMap.get(errorKey) ?? { files: [], sizeInfo: [] };

        errorEntry.files.push(file?.path);

        if (isErrorSize(errorKey as ErrorCode)) {
          errorEntry.sizeInfo?.push(formatSize(file.size || 0));
        }

        // Actualizamos el mapa
        errorMap.set(errorKey, errorEntry);
      });
    });

    return Array.from(errorMap.entries());
  }, [isErrorSize, rejections]);

  const content = useMemo(
    () =>
      groupedErrors.map(([code, { files, sizeInfo }]) => (
        <Alert key={code} severity='error'>
          <TransTypography
            message={`dropZone:errors.${code}`}
            values={{
              names: files.join(', '),
              ...(maxFiles && { maxFiles }),
            }}
          />
          {(sizeInfo?.length as number) > 0 && (
            <TransTypography variant='caption' message='dropZone:file.size' values={{ size: sizeInfo?.join(', ') }} />
          )}
        </Alert>
      )),
    [groupedErrors, maxFiles],
  );

  return (
    <Stack mt={1} gap={1} width='100%'>
      {content}
    </Stack>
  );
};

export default memo(FileDropRejections);
