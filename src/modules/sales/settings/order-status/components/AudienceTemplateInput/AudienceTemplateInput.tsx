import { FormTextField } from '@dfl/mui-react-common';
import { Control } from 'react-hook-form';
import { IOrderStatus } from '../../interfaces';
import { useTranslation } from 'react-i18next';

interface IAudienceTemplateInput {
  control: Control<IOrderStatus, any>;
  name: string;
}

const AudienceTemplateInput = ({ control, name }: IAudienceTemplateInput) => {
  const { t } = useTranslation('orderStatus')
  return (
    <FormTextField
      fullWidth
      autoFocus
      name={name}
      placeholder={t('fields.notification.template')}
      control={control}
      size='small'
    />
  );
}

export default AudienceTemplateInput
