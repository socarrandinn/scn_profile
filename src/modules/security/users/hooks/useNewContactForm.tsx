import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from 'modules/security/users/schemas/contact.schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IShippingContact } from 'modules/security/users/interfaces/IShippingContact';
import ContactServices from 'modules/security/users/services/contacts.services';
import { CONTACT_LIST } from 'modules/security/users/constants/queries';
import { useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const initValues: IShippingContact = {
  type: 'SHIPPING_RULE',
  firstName: '',
  lastName: '',
  email: '',
  identityNumber: '',
  save: true,
  needCi: false,
  phone: '',
  owner: '',
  address: {
    address: '',
    state: '',
    municipality: '',
    country: '53',
  },
};

const useNewContactForm = (
  onClose?: () => void,
  defaultValues: IShippingContact = initValues,
  notProcess?: boolean,
) => {
  const { t } = useTranslation('users');
  const queryClient = useQueryClient();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState,
    reset: resetForm,
  } = useForm<IShippingContact>({
    resolver: yupResolver(contactSchema),
    defaultValues: initValues,
  });
  const { id } = useParams();

  useEffect(() => {
    const address = {
      ...initValues.address,
    };
    const data = Object.assign({}, initValues, { address }, defaultValues);
    resetForm(data);
  }, [defaultValues, resetForm]);

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation<any, any, IShippingContact>(
    (value) => {
      if (value.phone && !value.phone.startsWith('+')) {
        value.phone = `+${value.phone}`;
      }
      return ContactServices.createContact(value);
    },
    {
      // react query config
      onSuccess: (data, variables) => {
        onClose?.();
        if (variables.save || variables._id) queryClient.invalidateQueries([CONTACT_LIST]);
        if (variables._id) toast.success(t('shipping.successEdit'));
        reset();
      },
      onError: (error, variables) => {
        if (error?.networkError) toast.error(t('errors:notConnectionMessage'));
        if (variables._id) toast.error(t('shipping.errorEdit'));
      },
    },
  );

  const reset = useCallback(() => {
    resetForm(initValues);
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    register,
    error,
    formState,
    isLoading,
    isSuccess,
    reset,
    state: watch('address.state'),
    address: watch('address'),
    data,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      const newValues = { ...values, owner: values?.owner ? values.owner : id || '' };
      mutate(newValues);
    }),
  };
};

export default useNewContactForm;
