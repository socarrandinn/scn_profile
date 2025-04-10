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
import { Dispatch, SetStateAction, useCallback } from 'react';

const initValues: IIncidenceActions = {
  actionType: INCIDENCE_ACTION_ENUM.CONTACT_CUSTOMER,
  note: ''
};

const useIncidenceAddActions = (
  incidenceId: string,
  setSelectedAction: Dispatch<SetStateAction<INCIDENCE_ACTION_ENUM | null>>,
  defaultValues: IIncidenceActions = initValues
) => {
  const { t } = useTranslation('incidence');
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset: resetForm,
    setValue,
    watch,
  } = useForm<IIncidenceActions>({
    resolver: yupResolver(incidenceActionsSchema),
    defaultValues,
    values: defaultValues
  });

  const note = watch('note');
  const actionType = watch('actionType');

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    () => IncidenceService.addActions(incidenceId, { note, actionType }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([AUDIT_LOG_BY_ENTITY_LIST_KEY]);
        toast.success(t('addCommentSuccess'));
        reset();
        setSelectedAction(null);
      },
      onError: () => {
        toast.error(t('addCommentError'));
      },
    }
  );

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    watch,
    setValue,
    reset,
    onSubmit: handleSubmit(() => {
      mutate();
    }),
  };
};

export default useIncidenceAddActions;
