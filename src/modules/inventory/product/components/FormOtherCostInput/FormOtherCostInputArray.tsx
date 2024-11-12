import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormLabel, useDFLForm } from '@dfl/mui-react-common';
import { FormControl, Stack, FormHelperText } from '@mui/material';
import FormOtherCostInput from './FormOtherCostInput';
import { OTHER_COST_OWNERSHIP_TYPE } from 'modules/inventory/product/constants/product-other-cost.enum';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { AddButton } from '@dfl/mui-admin-layout';

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  setValue: any;
};

function FormOtherCostInputArray ({ name, label, required, setValue }: Props) {
  const { control, isLoading, disabled, readOnly } = useDFLForm();
  const { t } = useTranslation('common');

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const appendHandle = () => {
    append({
      ownershipType: OTHER_COST_OWNERSHIP_TYPE.LOGISTIC,
      ownership: '',
      ownershipName: '',
      type: PriceType.PERCENT,
      value: 0,
    });
  };

  const hasError = required && !fields.length;

  return (
    <FormLabel label={label} required={required}>
      <FormControl fullWidth error={hasError}>
        <Stack spacing={1}>
          {fields.map((field, index) => (
            <FormOtherCostInput
              setValue={setValue}
              readOnlyParent={index !== fields?.length - 1}
              key={field.id}
              name={`${name}.${index}`}
              index={index}
              onRemove={() => {
                remove(index);
              }}
            />
          ))}
          {hasError && <FormHelperText sx={{ color: 'red' }} >{t('errors:atLeast1')}</FormHelperText>}
          {!(disabled || readOnly) ? (
            <div>
              <AddButton
                action={appendHandle}
                sx={{ justifyContent: 'center' }}
                disabled={isLoading}
              />
            </div>
          ) : (
            <></>
          )}
        </Stack>
      </FormControl>
    </FormLabel>
  );
}

export default FormOtherCostInputArray;
