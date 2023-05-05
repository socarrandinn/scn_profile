import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { categorySchema } from 'modules/rrhh/employee/schemas/category.schema';
import { EmployeeCategoryService } from 'modules/rrhh/employee/services';
import { useEffect } from 'react';
import { IEmployeeCategory } from 'modules/rrhh/employee/interfaces';
import { useParams } from 'react-router';
import { EMPLOYEE_CATEGORY_LIST_KEY, EMPLOYEE_ONE_KEY } from 'modules/rrhh/employee/constants/queries';

const initValues: IEmployeeCategory = {
  category: '',
  notes: '',
  dateActivated: new Date(),
};

const useCategoryCreateForm = (defaultValues: IEmployeeCategory = initValues, onClose: () => void) => {
  const { t } = useTranslation('category');
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(categorySchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (category: IEmployeeCategory) => EmployeeCategoryService.update(id, category),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([EMPLOYEE_CATEGORY_LIST_KEY]);
        queryClient.invalidateQueries([EMPLOYEE_ONE_KEY, id]);
        toast.success(t('successCreated'));
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
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useCategoryCreateForm;
