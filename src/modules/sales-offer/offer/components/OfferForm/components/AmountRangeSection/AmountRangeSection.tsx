import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PanelEnableSection } from '../../../PanelEnableSection';

type Props = {
  switchName: string;
  switchLabel: string;
};

const AmountRangeSection = ({ switchName, switchLabel }: Props) => {
  const { t } = useTranslation('offerOrder');

  return (
    <PanelEnableSection
      title={t('sections.amount')}
      subtitle=''
      titleMb={3}
      switchName={switchName}
      switchLabel={switchLabel}
    ></PanelEnableSection>
  );
};
export default memo(AmountRangeSection);
