import { PanelEnableSection } from '../../offer/components/PanelEnableSection';
import { useTranslation } from 'react-i18next';
import { IRuleSection } from '../../offer/interfaces/IExtendOffer';
import { UseFormResetField, UseFormSetError, UseFormWatch } from 'react-hook-form';
import OfferClientOrderCountByTimeForm from '../../offer/components/ClientRules/OfferClientOrderCountByTimeForm/OfferClientOrderCountByTimeForm';
import OfferClientAmountSpentByTimeForm from '../../offer/components/ClientRules/OfferClientAmountSpentByTimeForm/OfferClientAmountSpentByTimeForm';
import OfferClientLongevityForm from '../../offer/components/ClientRules/OfferClientLongevityForm/OfferClientLongevityForm';
import OfferClientSpecificClientListForm from 'modules/sales-offer/offer/components/ClientRules/OfferClientSpecificClientListForm/OfferClientSpecificClientListForm';

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
  return (
    <>
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
    </>
  );
};

export default OfferClientRulesContainer;
