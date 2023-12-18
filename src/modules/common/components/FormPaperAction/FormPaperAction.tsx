import { memo } from 'react';
import { ChildrenProps, LoadingButton } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';

type Props = ChildrenProps & {
  open: boolean;
  onToggle: () => void;
};

const FormPaperAction = ({ onToggle, open }: Props) => {
  const { t } = useTranslation('common');

  return <LoadingButton onClick={onToggle}>{open ? t('common:cancel') : t('updateInfo')}</LoadingButton>;
};

export default memo(FormPaperAction);
