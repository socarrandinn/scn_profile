import { FormPhoneInput as BaseFormPhoneInput } from 'components/libs/PhoneInput';
import { FormContactLabelSelectionField } from 'modules/common/components/FormContactInput/ContactLabelSelection';
import { DEFAULT_PHONE_LABELS } from 'modules/common/components/FormContactInput/phone/phones-types.constant';
import { FormPhoneInputStyle } from 'modules/common/components/FormContactInput/phone/FormPhoneInputStyle';
import { IconButton, Tooltip } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { FormMakePrincipalField } from 'modules/common/components/FormContactInput/MakePrincipal';
import { Observer } from 'modules/common/service';
import { useDFLForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type FormContactInputProps = {
  name: string;
  allowPrincipal?: boolean;
  onRemove?: () => void;
  observer?: Observer;
  // dark: boolean
};

function FormPhoneInput ({ name, onRemove, allowPrincipal, observer }: FormContactInputProps) {
  const { t } = useTranslation('phoneTypes');
  const { isLoading, disabled, readOnly } = useDFLForm();
  const hasRemove = !!onRemove;
  return (
    <FormPhoneInputStyle>
      <BaseFormPhoneInput name={`${name}.value`} />
      <FormContactLabelSelectionField
        name={`${name}.label`}
        options={DEFAULT_PHONE_LABELS}
        className={'phone-label-select'}
      />
      <div className={'phone-options'}>
        {allowPrincipal && <FormMakePrincipalField name={`${name}.principal`} observer={observer} />}
        {hasRemove && !readOnly && (
          <Tooltip title={t('remove')}>
            <IconButton onClick={onRemove} disabled={isLoading || disabled}>
              <DeleteOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </FormPhoneInputStyle>
  );
}

export default FormPhoneInput;
