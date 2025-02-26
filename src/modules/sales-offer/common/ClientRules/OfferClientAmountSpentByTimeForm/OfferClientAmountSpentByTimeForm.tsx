import { memo } from 'react';
import { UseFormWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Divider, Stack, Alert } from '@mui/material';
import OfferClientAmountSpentByTimeFormRule from './OfferClientAmountSpentByTimeFormRule';

type OfferCategoryFromProps = {
  section: boolean;
  control: any;
  watch: UseFormWatch<any>;
  setError: any;
  resetField: any;
  errors: any;
  clearErrors: any;
};

const OfferClientAmountSpentByTimeForm = ({
  control,
  section,
  errors,
  clearErrors,
  ...props
}: OfferCategoryFromProps) => {
  const { t } = useTranslation('offerOrder');
  const name = 'rulesAmountSpentByTime';

  return (
    <Stack gap={3}>
      <Stack divider={<Divider orientation='horizontal' flexItem />} gap={3}>
        <OfferClientAmountSpentByTimeFormRule
          control={control}
          clearErrors={clearErrors}
          name={name}
          section={section}
          {...props}
        />

        {errors?.rulesCategories?.type === 'min' && <Alert severity='error'>{t(errors?.[name]?.message)}</Alert>}
      </Stack>
    </Stack>
  );
};

export default memo(OfferClientAmountSpentByTimeForm);
