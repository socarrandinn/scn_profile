import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { reportCauseIdSchema } from 'modules/crm/report-cause/schemas/report-cause.schema';
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reportCauseIdSchema),
    defaultValues,
  });

  console.log(errors);

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  return {
    control,
    reset,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      onReject(values?.cause);
    }),
  };
};
export default useReportCauseForm;
