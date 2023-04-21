import { useFieldArray } from 'react-hook-form';
import { useDFLForm } from '@dfl/mui-react-common';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Observer } from 'modules/common/service';
import FormEmailInput from 'modules/common/components/FormContactInput/email/FormEmailInput';

type FormEmailInputArrayProps = {
  name: string;
};

function FormEmailInputArray({ name }: FormEmailInputArrayProps) {
  const { control, isLoading, disabled, readOnly } = useDFLForm();
  const { t } = useTranslation('emailTypes');
  const observer = useRef(new Observer());
  const { fields, append, remove } = useFieldArray({
    control,
    name, // unique name for your Field Array
  });

  const appendHandle = () => {
    append({});
  };
  return (
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
      {!(disabled || readOnly) ? (
        <div>
          <Button variant={'text'} onClick={appendHandle} sx={{ pl: 0, justifyContent: 'left' }} disabled={isLoading}>
            {t('add')}
          </Button>
        </div>
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default FormEmailInputArray;
