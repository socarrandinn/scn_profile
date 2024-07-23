import { memo, useCallback, useEffect } from 'react';
import { FormFieldControl, useDFLForm } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Observer } from 'modules/common/service';

type MakePrincipalProps = {
  name: string;
  className?: string;
  value?: string;
  observer?: Observer;
  onChange?: (event?: any) => void;
};

const MakePrincipal = ({ onChange, name, value, observer }: MakePrincipalProps) => {
  const { t } = useTranslation('phoneTypes');
  const { isLoading, disabled, readOnly } = useDFLForm();
  const handleChange = useCallback(() => {
    onChange?.({
      target: { value: true },
    });
    observer?.notify(name);
  }, [onChange, observer, name]);

  useEffect(() => {
    const update = (activeName: string) => {
      if (activeName !== name && value) {
        onChange?.({
          target: { value: false },
        });
      }
    };
    const unsubscribe = observer?.subscribe(update);
    return () => {
      unsubscribe?.();
    };
  }, [name, value, onChange, observer]);

  const handleChangeWithStatus = useCallback(() => {
    if (disabled || readOnly) return;
    handleChange();
  }, [handleChange, disabled, readOnly]);

  return (
    <Tooltip title={t('makePrincipal')}>
      <IconButton onClick={handleChangeWithStatus} color={value ? 'primary' : 'default'} disabled={isLoading}>
        {value ? <CheckCircleIcon /> : <CheckCircleOutlineOutlinedIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default memo(MakePrincipal);

export const FormMakePrincipalField = (props: MakePrincipalProps) => {
  return <FormFieldControl {...props} Component={MakePrincipal} />;
};
