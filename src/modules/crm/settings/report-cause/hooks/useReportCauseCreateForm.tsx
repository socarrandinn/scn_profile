import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { reportCauseSchema } from 'modules/crm/settings/report-cause/schemas/report-cause.schema';
import { IReportCause } from 'modules/crm/settings/report-cause/interfaces';
import { ReportCauseService } from 'modules/crm/settings/report-cause/services';
import { REPORT_CAUSES_LIST_KEY } from 'modules/crm/settings/report-cause/constants';
import { useEffect } from 'react';

const initValues: IReportCause = {
  name: '',
  description: '',
};

const useReportCauseCreateForm = (onClose: () => void, defaultValues: IReportCause = initValues) => {
  const { t } = useTranslation('reportCause');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(reportCauseSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (reportCause: IReportCause) => ReportCauseService.saveOrUpdate(reportCause),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([REPORT_CAUSES_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
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
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useReportCauseCreateForm;
