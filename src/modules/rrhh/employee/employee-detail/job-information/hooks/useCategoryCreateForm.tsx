import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { categorySchema } from 'modules/rrhh/employee/management/schemas/category.schema';
import { EmployeeCategoryService } from 'modules/rrhh/employee/management/services';
import { useEffect } from 'react';
import { IEmployeeCategory } from 'modules/rrhh/employee/common/interfaces';
import { EMPLOYEE_CATEGORY_LIST_KEY, EMPLOYEE_ONE_KEY } from 'modules/rrhh/employee/management/constants/queries';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';

const defaultValues: IEmployeeCategory = {
  category: '',
  notes: '',
  endActivated: new Date(),
  isEnd: false,
  dateActivated: new Date(),
};

const useCategoryCreateForm = (onClose: () => void) => {
  const { t } = useTranslation('category');
  const { id } = useEmployeeDetail();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
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
    watch,
    onSubmit: handleSubmit((values) => {
      if (!values.isEnd) {
        delete values.endActivated;
      }
      mutate(values);
    }),
  };
};
export default useCategoryCreateForm;
