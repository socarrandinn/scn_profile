import { memo } from 'react';
import { ChildrenProps, FlexBox, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { Switch } from '@mui/material';

type Props = ChildrenProps & {
  open: boolean;
  isDisabled: boolean;
  onToggle: () => void;
  setIsDisabled: (v: boolean) => void;
};

const FormPaperPerUnitsAction = ({ onToggle, isDisabled, open, setIsDisabled }: Props) => {
  const { t } = useTranslation('common');

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <FlexBox>
      <LoadingButton onClick={onToggle}>{open ? t('common:close') : t('updateInfo')}</LoadingButton>
      {open && <Switch onChange={toggleDisabled} />}
    </FlexBox>
  );
};

export default memo(FormPaperPerUnitsAction);
