import { Alert, Stack } from '@mui/material';
import { TransTypography } from 'components/TransTypography';
import { memo, useCallback, useMemo } from 'react';
import { ErrorCode, FileError, FileRejection } from 'react-dropzone';
import { formatSize } from 'utils/file-utils';

type FileDropRejectionsProps = {
  rejections: readonly FileRejection[];
  maxFiles: number | undefined;
};

const FileDropRejections = ({ rejections, maxFiles }: FileDropRejectionsProps) => {
  const isErrorSize = useCallback(
    (code: ErrorCode) => [ErrorCode.FileTooLarge, ErrorCode.FileTooSmall].includes(code),
    [],
  );

  const content = useMemo(
    () =>
      rejections?.map(({ errors, file }: any) =>
        errors?.map((error: FileError) => (
          <Alert key={error?.code} severity='error'>
            <TransTypography
              message={`dropZone:errors.${error?.code}`}
              values={{ name: file?.path, ...(maxFiles && { maxFiles }) }}
            />

            {isErrorSize(error?.code as ErrorCode) && (
              <TransTypography
                variant='caption'
                message={'dropZone:file.size'}
                values={{ size: formatSize(file?.size || 0) }}
              />
            )}
          </Alert>
        )),
      ),
    [isErrorSize, maxFiles, rejections],
  );

  return (
    <Stack mt={1} gap={1} width={'100%'}>
      {content}
    </Stack>
  );
};

export default memo(FileDropRejections);
