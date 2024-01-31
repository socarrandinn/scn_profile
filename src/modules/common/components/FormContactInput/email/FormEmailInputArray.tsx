import { useRef } from 'react';
import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormLabel, useDFLForm } from '@dfl/mui-react-common';
import { Button, FormControl, Stack, FormHelperText } from '@mui/material';

import { Observer } from 'modules/common/service';
import FormEmailInput from 'modules/common/components/FormContactInput/email/FormEmailInput';
import { DEFAULT_EMAIL_LABELS } from 'modules/common/components/FormContactInput/email/email-types.constant';

type FormEmailInputArrayProps = {
  name: string;
  label?: string;
  required?: boolean;
  error?: any;
};

function FormEmailInputArray({ name, label, required, error }: FormEmailInputArrayProps) {
  const { control, isLoading, disabled, readOnly } = useDFLForm();
  const { t } = useTranslation('emailTypes');
  const observer = useRef(new Observer());
  const { fields, append, remove } = useFieldArray({
    control,
    name, // unique name for your Field Array
  });

  const appendHandle = () => {
    append({
      value: '',
      label: DEFAULT_EMAIL_LABELS[Math.min(DEFAULT_EMAIL_LABELS.length - 1, fields.length)],
      principal: !fields.length,
    });
  };

  const hasError = required && !fields.length;
  const mainInputError = error.error?.message.includes('contacts.emails : You must have at least a main email');
  return (
    <FormLabel label={label} required={required}>
      <FormControl fullWidth error={hasError || mainInputError}>
        <Stack spacing={1}>
          {fields.map((field, index) => (
            <FormEmailInput
              key={field.id}
              name={`${name}.${index}`}
              onRemove={() => {
                remove(index);
              }}
              allowPrincipal
              observer={observer.current}
            />
          ))}
          {hasError && <FormHelperText sx={{ color: 'red' }} >{t('errors:atLeast1')}</FormHelperText>}
          {mainInputError && <FormHelperText sx={{ color: 'red' }} >{t('helperText')}</FormHelperText>}
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

export default FormEmailInputArray;
