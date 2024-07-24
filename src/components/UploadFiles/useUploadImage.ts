import FilesService from 'components/UploadFiles/files.services';
import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useCallback } from 'react';
import { IImageMedia } from 'modules/common/interfaces';
// import { MAX_FILE_SIZE_BYTES, validationFile } from 'components/UploadFiles/files.utils';

export const useUploadBaseImage = (multiple?: boolean, fileTypes?: string[], serverPath?: string) => {
  const uploadFunc = multiple ? FilesService.uploadMany : FilesService.upload;

  const { mutate, ...mutation } = useMutation<IImageMedia | IImageMedia[], any, any>(
    (params) => uploadFunc(params, serverPath),
    {},
  );

  const upload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = (multiple ? event.target.files : event.target.files?.[0]) || null;

      // TODO
      // const message = validationFile({
      //   file,
      //   maxFileSize: MAX_FILE_SIZE_BYTES,
      //   fileTypes: fileTypes || ['image'],
      // });

      // if (message) {
      //   // toast.error(t(message));
      //   alert(message);
      //   return;
      // }

      if (file) {
        mutate(file);
      }
    },
    [multiple, mutate],
  );

  return {
    upload,
    mutate,
    ...mutation,
  };
};

export const useUploadManyImage = (serverPath?: string) => {
  const mutation = useUploadBaseImage(true, undefined, serverPath);

  return {
    ...mutation,
    data: mutation.data as Array<IImageMedia & { error?: any }> | null,
  };
};

export const useUploadImage = () => {
  const mutation = useUploadBaseImage(false);

  return {
    ...mutation,
    data: mutation.data as IImageMedia | null,
  };
};
