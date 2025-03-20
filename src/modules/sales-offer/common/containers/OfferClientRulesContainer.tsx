import { PanelEnableSection } from '../../offer/components/PanelEnableSection';
import { useTranslation } from 'react-i18next';
import { IRuleSection } from '../../offer/interfaces/IExtendOffer';
import { UseFormResetField, UseFormSetError, UseFormWatch } from 'react-hook-form';
import OfferClientOrderCountByTimeForm from '../ClientRules/OfferClientOrderCountByTimeForm/OfferClientOrderCountByTimeForm';
import OfferClientAmountSpentByTimeForm from '../ClientRules/OfferClientAmountSpentByTimeForm/OfferClientAmountSpentByTimeForm';
import OfferClientLongevityForm from '../ClientRules/OfferClientLongevityForm/OfferClientLongevityForm';
import OfferClientSpecificClientListForm from '../ClientRules/OfferClientSpecificClientListForm/OfferClientSpecificClientListForm';
import { OfferClientUsageFrom } from 'modules/sales-offer/offer/components/OfferClientUsage';
import OfferGroupSection from '../OfferGroupSection/OfferGroupSection';
import { useMemo } from 'react';

type Props = {
  sections: IRuleSection;
  control: any;
  watch: UseFormWatch<any>;
  setError: UseFormSetError<any>;
  resetField: UseFormResetField<any>;
  errors: any;
  clearErrors: any;
};
const OfferClientRulesContainer = ({ sections, ...props }: Props) => {
  const { t } = useTranslation('offerOrder');

  const someChild = useMemo(
    () =>
      [
        sections.orderCountByTime,
        sections.amountSpentByTime,
        sections.longevity,
        sections.specificClientList,
        sections.clientUsage,
      ].some(Boolean),
    [sections],
  );

  return (
    <OfferGroupSection title={t('sectionGroup.client')} someChild={someChild}>
      {/* section amount client usage  */}
      <PanelEnableSection
        title={t('sections.clientUsage.title')}
        subtitle={t('sections.clientUsage.subtitle')}
        checked={sections?.clientUsage}
        titleMb={3}
        switchName={'section.clientUsage'}
      >
        <OfferClientUsageFrom section={sections?.clientUsage} />
      </PanelEnableSection>

      {/* section orderCountByTime  */}
      <PanelEnableSection
        title={t('sections.orderCountByTime.title')}
        subtitle={t('sections.orderCountByTime.subtitle')}
        checked={sections?.orderCountByTime}
        titleMb={3}
        switchName={'section.orderCountByTime'}
      >
        <OfferClientOrderCountByTimeForm section={sections?.orderCountByTime} {...props} />
      </PanelEnableSection>

      {/* section amountSpentByTime  */}
      <PanelEnableSection
        title={t('sections.amountSpentByTime.title')}
        subtitle={t('sections.amountSpentByTime.subtitle')}
        checked={sections?.amountSpentByTime}
        titleMb={3}
        switchName={'section.amountSpentByTime'}
      >
        <OfferClientAmountSpentByTimeForm section={sections?.amountSpentByTime} {...props} />
      </PanelEnableSection>

      {/* section longevity  */}
      <PanelEnableSection
        title={t('sections.longevity.title')}
        subtitle={t('sections.longevity.subtitle')}
        checked={sections?.longevity}
        titleMb={3}
        switchName={'section.longevity'}
      >
        <OfferClientLongevityForm section={sections?.longevity} {...props} />
      </PanelEnableSection>

      {/* section specificClientList  */}
      <PanelEnableSection
        title={t('sections.specificClientList.title')}
        subtitle={t('sections.specificClientList.subtitle')}
        checked={sections?.specificClientList}
        titleMb={3}
        switchName={'section.specificClientList'}
      >
        <OfferClientSpecificClientListForm section={sections?.specificClientList} {...props} />
      </PanelEnableSection>
    </OfferGroupSection>
  );
};

export default OfferClientRulesContainer;
