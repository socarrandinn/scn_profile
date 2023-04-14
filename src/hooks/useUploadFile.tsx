import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import UploadApiService from 'services/UploadApiService';
import * as Yup from 'yup';

const fileSchema = Yup.object().shape({});

type IFiles = {
  // eslint-disable-next-line
  onProgress: Function;
};

type IFileResponse = {
  name: string;
  url: string;
};

export const useGetOneFile = (collectionId: string, fileId: string, fileName: string) => {
  const fetch = useCallback(
    () => UploadApiService.getOneFile(collectionId, fileId, fileName),
    [collectionId, fileId, fileName],
  );
  return useQuery<IFileResponse>([fileId, 'upload-file-one'], fetch, {
    enabled: !!collectionId && !!fileId && !!fileName,
  });
};

export const useUploadFile = ({ onProgress }: IFiles) => {
  const { t } = useTranslation('assets');
  const queryClient = useQueryClient();
  const { control, reset } = useForm({
    resolver: yupResolver(fileSchema),
    defaultValues: { file: undefined },
  });

  const { mutateAsync, error, isLoading, isSuccess, data } = useMutation(
    // @ts-ignore
    (file) => {
      // @ts-ignore
      UploadApiService.uploadFile(file, onProgress);
    },
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries(['upload-file-list']);
        data && queryClient.invalidateQueries([JSON.stringify(values)]);
        // @ts-ignore
        toast.success(t(values ? 'successUpdate' : 'successCreated'));
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    // @ts-ignore
    onSubmit: mutateAsync,
  };
};
