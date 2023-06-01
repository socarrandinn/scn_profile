import { memo } from 'react'
import { useTranslation } from 'react-i18next';

type ConsumptionValueProps = {
  value: number
}

const ConsumptionValue = ({ value = 0 }: ConsumptionValueProps) => {
  const { t } = useTranslation('timeOff');
  return <>{t('day', { count: value / 24 })}</>;
}

export default memo(ConsumptionValue);
