import { Form, FormTextField } from '@dfl/mui-react-common';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const CommissionChangeActions = () => {
  const { t } = useTranslation('provider');
  const { control, handleSubmit } = useForm({ defaultValues: { commission: 0.2 } });

  return (
    <Form
      control={control}
      onSubmit={handleSubmit((value) => {
        console.log(value);
      })}
    >
      <FormTextField
        type='number'
        name={'commission'}
        label={t('fields.commission')}
        size='small'
        inputProps={{
          inputMode: 'numeric',
          step: 0.1,
        }}
      />
    </Form>
  );
};

export default CommissionChangeActions;
