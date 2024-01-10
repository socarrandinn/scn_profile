import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type TranslateLabelProps = {
  label: string;
  locale?: string;
};

const TranslateLabel = ({ label, locale = 'common' }: TranslateLabelProps) => {
  const { t } = useTranslation(locale);
  return <>{t(label)}</>;
};

export default memo(TranslateLabel);
