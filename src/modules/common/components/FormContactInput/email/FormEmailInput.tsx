import { FormContactLabelSelectionField } from 'modules/common/components/FormContactInput/ContactLabelSelection';
import { IconButton, Tooltip } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { FormMakePrincipalField } from 'modules/common/components/FormContactInput/MakePrincipal';
import { Observer } from 'modules/common/service';
import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { DEFAULT_EMAIL_LABELS } from 'modules/common/components/FormContactInput/email/email-types.constant';
import { FormEmailInputStyle } from 'modules/common/components/FormContactInput/email/FormEmailInputStyle';

type FormContactInputProps = {
  name: string;
  allowPrincipal?: boolean;
  onRemove?: () => void;
  observer?: Observer;
  // dark: boolean
};

function FormEmailInput ({ name, onRemove, allowPrincipal, observer }: FormContactInputProps) {
  const { t } = useTranslation('emailTypes');
  const { isLoading, disabled, readOnly, size } = useDFLForm();
  const hasRemove = !!onRemove;
  return (
    <FormEmailInputStyle size={size}>
      <FormTextField name={`${name}.value`} />
      <FormContactLabelSelectionField
        name={`${name}.label`}
        ns={'emailTypes'}
        options={DEFAULT_EMAIL_LABELS}
        className={'phone-label-select'}
      />
      <div className={'email-options'}>
        {allowPrincipal && <FormMakePrincipalField name={`${name}.principal`} observer={observer} />}
        {hasRemove && !readOnly && (
          <Tooltip title={t('remove')}>
            <IconButton onClick={onRemove} disabled={isLoading || disabled}>
              <DeleteOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </FormEmailInputStyle>
  );
}

export default FormEmailInput;
