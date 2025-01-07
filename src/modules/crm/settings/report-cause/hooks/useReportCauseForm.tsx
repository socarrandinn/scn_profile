import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { reportCauseIdSchema } from 'modules/crm/settings/report-cause/schemas/report-cause.schema';
import { useEffect } from 'react';

interface ICause {
  cause: '';
}
const initValues: ICause = {
  cause: '',
};

const useReportCauseForm = (onReject: (cause: string) => void, defaultValues: ICause = initValues) => {
  const {
    control,
    handleSubmit,
    reset,
    watch
  } = useForm({
    resolver: yupResolver(reportCauseIdSchema),
    defaultValues,
  });

  const cause = watch('cause')

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  return {
    control,
    reset,
    cause,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      onReject(values?.cause);
    }),
  };
};
export default useReportCauseForm;
