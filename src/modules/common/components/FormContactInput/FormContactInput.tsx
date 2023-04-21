import { FormPhoneInput } from 'components/libs/PhoneInput';
import {
  FormContactLabelSelectionField
} from 'modules/common/components/FormContactInput/ContactLabelSelection';
import { DEFAULT_PHONE_LABELS } from 'modules/common/components/FormContactInput/phones-types.constant';
import { FormContactInputStyle } from 'modules/common/components/FormContactInput/FormContactInputStyle';
import { IconButton, Tooltip } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { FormMakePrincipalField } from 'modules/common/components/FormContactInput/MakePrincipal';
import { Observer } from 'modules/common/service';
import { useDFLForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type FormContactInputProps = {
  name: string
  allowPrincipal?: boolean
  onRemove?: () => void
  observer?: Observer
  // dark: boolean
}

function FormContactInput ({ name, onRemove, allowPrincipal, observer }: FormContactInputProps) {
  const { t } = useTranslation('phoneTypes');
  const { isLoading, disabled, readOnly } = useDFLForm();
  const hasRemove = !!onRemove;
  return (
        <FormContactInputStyle>
            <FormPhoneInput name={`${name}.value`}/>
            <FormContactLabelSelectionField
                name={`${name}.label`}
                options={DEFAULT_PHONE_LABELS}
                className={'phone-label-select'}
            />
            <div className={'phone-options'}>
                {allowPrincipal &&
                    <FormMakePrincipalField name={`${name}.principal`} observer={observer}/>
                }
                {hasRemove && !readOnly &&
                    <Tooltip title={t('remove')}>
                        <IconButton onClick={onRemove} disabled={isLoading || disabled}>
                            <DeleteOutlinedIcon/>
                        </IconButton>
                    </Tooltip>
                }
            </div>
        </FormContactInputStyle>
  );
}

export default FormContactInput
