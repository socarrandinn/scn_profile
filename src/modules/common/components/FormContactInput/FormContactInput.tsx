import { FormPhoneInput } from 'components/libs/PhoneInput';
import {
  FormContactLabelSelectionField
} from 'modules/common/components/FormContactInput/ContactLabelSelection';
import { DEFAULT_PHONE_LABELS } from 'modules/common/components/FormContactInput/phones-types.constant';
import { FormContactInputStyle } from 'modules/common/components/FormContactInput/FormContactInputStyle';
import { Button, IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { FormMakePrincipalField } from 'modules/common/components/FormContactInput/MakePrincipal';
import { Observer } from 'modules/common/service';

type FormContactInputProps = {
  name: string
  allowPrincipal?: boolean
  onRemove?: () => void
  observer?: Observer
  // dark: boolean
}

function FormContactInput ({ name, onRemove, allowPrincipal, observer }: FormContactInputProps) {
  // const { t } = useTranslation('common');
  const hasRemove = !!onRemove;
  return (
        <FormContactInputStyle>
            <FormPhoneInput name={`${name}.value`}/>
            <FormContactLabelSelectionField
                // sx={{ width: 95 }}
                name={`${name}.label`}
                options={DEFAULT_PHONE_LABELS}
                className={'phone-label-select'}
                // placeholder={t('label')}
            />
            <div className={'phone-options'}>
                {allowPrincipal &&
                    <FormMakePrincipalField name={`${name}.principal`} observer={observer}/>
                }
                {hasRemove &&
                    <IconButton onClick={onRemove}>
                        <DeleteOutlinedIcon/>
                    </IconButton>
                }
            </div>
        </FormContactInputStyle>
  );
}

export default FormContactInput
