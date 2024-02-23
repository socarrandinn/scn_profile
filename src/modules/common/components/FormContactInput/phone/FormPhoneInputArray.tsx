import { useRef } from 'react';
import { useFieldArray, useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormLabel, useDFLForm } from '@dfl/mui-react-common';
import { Button, FormControl, Stack, FormHelperText } from '@mui/material';

import FormPhoneInput from 'modules/common/components/FormContactInput/phone/FormPhoneInput';
import { Observer } from 'modules/common/service';
import { DEFAULT_PHONE_LABELS } from 'modules/common/components/FormContactInput/phone/phones-types.constant';

type FormContactInputArrayProps = {
  name: string;
  label?: string;
  required?: boolean;
};

function FormPhoneInputArray ({ name, required, label }: FormContactInputArrayProps) {
  const { control, isLoading, disabled, readOnly } = useDFLForm();
  const { errors } = useFormState({ control });
  const { t } = useTranslation('phoneTypes');
  const observer = useRef(new Observer());
  const { fields, append, remove } = useFieldArray({
    control,
    name, // unique name for your Field Array
  });

  const appendHandle = () => {
    append({
      value: '',
      label: DEFAULT_PHONE_LABELS[Math.min(DEFAULT_PHONE_LABELS.length - 1, fields.length)],
      principal: !fields.length,
    });
  };

  const hasError = required && !fields.length;
  // @ts-ignore
  const selectedMainPhone = errors.contacts?.phones?.type === 'mainPhoneNumber';

  return (
    <FormLabel label={label} required={required}>
      <FormControl fullWidth error={hasError || selectedMainPhone }>
        <Stack spacing={1}>
          {fields.map((field, index) => {
            return (
              <FormPhoneInput
                key={field.id}
                name={`${name}.${index}`}
                onRemove={() => {
                  remove(index);
                }}
                allowPrincipal
                observer={observer.current}
              />
            );
          })}
          {hasError && <FormHelperText color={'red'}>{t('errors:atLeast1')}</FormHelperText>}
          {selectedMainPhone && <FormHelperText sx={{ color: 'red' }}>{t('errors:mainPhoneNumber')}</FormHelperText>}
          {!(disabled || readOnly) ? (
            <div>
              <Button
                variant={'text'}
                onClick={appendHandle}
                sx={{ pl: 0, justifyContent: 'left' }}
                disabled={isLoading}
              >
                {t('add')}
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Stack>
      </FormControl>
    </FormLabel>
  );
}

export default FormPhoneInputArray;
