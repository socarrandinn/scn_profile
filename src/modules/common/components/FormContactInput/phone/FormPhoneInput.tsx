import { FormPhoneInput as BaseFormPhoneInput } from 'components/libs/PhoneInput';
import { FormLabelSelectionField } from 'modules/common/components/FormContactInput/FormLabelSelection';
import { DEFAULT_PHONE_LABELS } from 'modules/common/components/FormContactInput/phone/phones-types.constant';
import { FormPhoneInputStyle } from 'modules/common/components/FormContactInput/phone/FormPhoneInputStyle';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { FormMakePrincipalField } from 'modules/common/components/FormContactInput/MakePrincipal';
import { Observer } from 'modules/common/service';
import { IconButton, useDFLForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type FormContactInputProps = {
  name: string;
  allowPrincipal?: boolean;
  onRemove?: () => void;
  observer?: Observer;
  // dark: boolean
};

function FormPhoneInput({ name, onRemove, allowPrincipal, observer }: FormContactInputProps) {
  const { t } = useTranslation('phoneTypes');
  const { isLoading, disabled, readOnly } = useDFLForm();
  const hasRemove = !!onRemove;
  return (
    <FormPhoneInputStyle>
      <BaseFormPhoneInput name={`${name}.value`} />
      <FormLabelSelectionField
        name={`${name}.label`}
        options={DEFAULT_PHONE_LABELS}
        className={'phone-label-select'}
      />
      <div className={'phone-options'}>
        {allowPrincipal && <FormMakePrincipalField name={`${name}.principal`} observer={observer} />}
        {hasRemove && !readOnly && (
          <IconButton tooltip={t('remove')} onClick={onRemove} disabled={isLoading || disabled}>
            <DeleteOutlinedIcon />
          </IconButton>
        )}
      </div>
    </FormPhoneInputStyle>
  );
}

export default FormPhoneInput;
