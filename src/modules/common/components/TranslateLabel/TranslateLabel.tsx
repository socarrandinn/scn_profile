import { LongText } from '@dfl/mui-react-common';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type TranslateLabelProps = {
  label: string;
  locale?: string;
};

const TranslateLabel = ({ label, locale = 'common' }: TranslateLabelProps) => {
  const { t } = useTranslation(locale);
  return (
    <LongText
      lineClamp={1}
      text={t(label || '')}
      sx={(theme) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[700],
      })}
    />
  );
};

export default memo(TranslateLabel);
