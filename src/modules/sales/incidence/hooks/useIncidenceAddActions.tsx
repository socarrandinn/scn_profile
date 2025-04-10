import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IncidenceService } from '../services';
import { IIncidenceActions } from '../interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { incidenceActionsSchema } from '../schemas/incidence.schema';
import { INCIDENCE_ACTION_ENUM } from '../constants/incidence-action.enum';
import { AUDIT_LOG_BY_ENTITY_LIST_KEY } from 'modules/security/audit-logs/constants';

const initValues: IIncidenceActions = {
  actionType: INCIDENCE_ACTION_ENUM.CONTACT_CUSTOMER,
  note: ''
};

const useIncidenceAddActions = (incidenceId: string, defaultValues: IIncidenceActions = initValues) => {
  const { t } = useTranslation('incidence');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset, setValue, watch } = useForm({
    resolver: yupResolver(incidenceActionsSchema),
    defaultValues,
    values: defaultValues
  });

  const note = watch('note');

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (value: IIncidenceActions) => IncidenceService.addActions(incidenceId, { ...value, note }),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([AUDIT_LOG_BY_ENTITY_LIST_KEY]);
        toast.success(t('addCommentSuccess'));
        reset();
      },
      onError: () => {
        toast.error(t('addCommentError'));
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    watch,
    setValue,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useIncidenceAddActions;
