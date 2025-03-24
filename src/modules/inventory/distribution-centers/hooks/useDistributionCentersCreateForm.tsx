import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { distributionCentersSchema } from 'modules/inventory/distribution-centers/schemas/distribution-centers.schema';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_LIST_KEY } from 'modules/inventory/distribution-centers/constants';
import { useCallback, useEffect } from 'react';
import { ADDRESS_INIT_VALUE, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { WarehouseLocation } from 'modules/inventory/warehouse/interfaces';
import { scrollToFirstError } from 'utils/error-utils';
import { PRICE_TYPE } from 'modules/inventory/common/constants/price-type.enum';
import { formatedAddressObjUtils } from 'modules/common/utils/formated-utils';

export const initValues: IDistributionCenters = {
  address: ADDRESS_INIT_VALUE,
  contacts: {
    phones: [phoneInitValue],
    emails: [emailInitValue],
  },
  handlingCost: {
    value: 0,
    type: PRICE_TYPE.FIXED,
  },
  logistic: null,
  space: null,
  visible: true,
  name: '',
  description: '',
};

const useDistributionCentersCreateForm = (
  countryCode: string,
  onClose: () => void,
  defaultValues: IDistributionCenters = initValues,
) => {
  const { t } = useTranslation('distributionCenters');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    watch,
    setValue,
    formState,
    clearErrors,
  } = useForm({
    resolver: yupResolver(distributionCentersSchema),
    defaultValues,
  });

  const commissionType = watch('handlingCost.type');

  const address1 = watch('address.address1');
  const address2 = watch('address.address2');
  const city = watch('address.city');
  const state = watch('address.state');
  const houseNumber = watch('address.houseNumber');
  const formattedAddress = watch('address.formattedAddress');

  useEffect(() => {
    if (countryCode === 'CU') {
      setValue('address.formattedAddress', formatedAddressObjUtils(address1, houseNumber, address2, city, state));
    }
  }, [address1, address2, city, countryCode, formattedAddress, houseNumber, setValue, state]);

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const {
    mutate,
    reset: resetMutation,
    error,
    isLoading,
    isSuccess,
    data,
  } = useMutation(
    (distributionCenters: IDistributionCenters) =>
      DistributionCentersService.saveOrUpdate({
        ...distributionCenters,
        space: distributionCenters?.logistic,
      }),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([DISTRIBUTION_CENTERS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
      },
    },
  );

  const reset = useCallback(() => {
    resetForm();
    resetMutation();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    watch,
    setValue,
    isLoading,
    isSuccess,
    data,
    formState,
    reset,
    commissionType,
    clearErrors,
    onSubmit: handleSubmit(
      (values) => {
        mutate(values);
      },
      // get scroll to first error
      (errors) => {
        scrollToFirstError(errors, 'distribution-center-form');
      },
    ),
  };
};
export default useDistributionCentersCreateForm;
