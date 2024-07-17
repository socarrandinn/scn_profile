import { memo } from 'react';
import { UseFormWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Divider, Stack, Alert } from '@mui/material';
import OfferCategoryAmountFromRule from './OfferCategoryAmountFromRule';

type OfferCategoryFromProps = {
  categorySection: boolean;
  control: any;
  watch: UseFormWatch<any>;
  setError: any;
  resetField: any;
  errors: any;
  clearErrors: any;
};

const OfferCategoryAmountFrom = ({
  control,
  categorySection,
  errors,
  clearErrors,
  ...props
}: OfferCategoryFromProps) => {
  const { t } = useTranslation('offerOrder');
  const name = 'rulesAmountsCategory';

  return (
    <Stack gap={3}>
      <Stack divider={<Divider orientation='horizontal' flexItem />} gap={3}>
        <OfferCategoryAmountFromRule
          control={control}
          clearErrors={clearErrors}
          name={name}
          categorySection={categorySection}
          {...props}
        />

        {errors?.rulesCategories?.type === 'min' && (
          <Alert severity='error'>{t(errors?.rulesCategories?.message)}</Alert>
        )}
      </Stack>
    </Stack>
  );
};

export default memo(OfferCategoryAmountFrom);
