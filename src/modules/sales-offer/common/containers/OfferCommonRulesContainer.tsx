import { PanelEnableSection } from '../../offer/components/PanelEnableSection';
import { useTranslation } from 'react-i18next';
import { IRuleSection } from '../../offer/interfaces/IExtendOffer';
import { UseFormResetField, UseFormSetError, UseFormWatch } from 'react-hook-form';
import { OfferAddressFormRule } from '../../offer/components/OfferAddressFrom';
import { OfferProductFrom } from '../../offer/components/OfferProductFrom';
import { OfferQuantityOrderForm } from '../../offer/components/OfferQuantityOrderForm';
import { OfferUsageForm } from '../../offer/components/OfferUsageForm';
import { OfferAmountFrom } from '../../offer/components/OfferAmountFrom';
import { OfferCategoryFrom } from 'modules/sales-offer/offer/components/OfferCategoryFrom';

type Props = {
  sections: IRuleSection;
  control: any;
  watch: UseFormWatch<any>;
  setError: UseFormSetError<any>;
  resetField: UseFormResetField<any>;
  errors: any;
  clearErrors: any;
  setValue: any;
};
const OfferCommonRulesContainer = ({ sections, ...props }: Props) => {
  const { t } = useTranslation('offerOrder');
  return (
    <>
      {/* section amount and Category  */}
      <PanelEnableSection
        title={t('sections.amountCategory.title')}
        subtitle={t('sections.amountCategory.subtitle')}
        checked={sections?.amountCategory}
        titleMb={3}
        switchName={'section.amountCategory'}
      >
        <OfferCategoryFrom section={sections?.amountCategory} {...props} />
        {/* <OfferCategoryAmountFrom section={sections?.amountCategory} {...props} /> */}
      </PanelEnableSection>

      {/* section amount  */}
      <PanelEnableSection
        title={t('sections.amount.title')}
        subtitle={t('sections.amount.subtitle')}
        checked={sections?.amount}
        titleMb={3}
        switchName={'section.amount'}
      >
        <OfferAmountFrom control={props?.control} amountSection={sections?.amount} />
      </PanelEnableSection>

      {/* section usage  */}
      <PanelEnableSection
        title={t('sections.usage.title')}
        subtitle={t('sections.usage.subtitle')}
        checked={sections?.usage}
        titleMb={3}
        switchName={'section.usage'}
      >
        <OfferUsageForm control={props?.control} section={sections?.usage} />
      </PanelEnableSection>

      {/* section quantity orders  */}
      <PanelEnableSection
        title={t('sections.quantity_orders.title')}
        subtitle={t('sections.quantity_orders.subtitle')}
        checked={sections?.quantityOrder}
        titleMb={3}
        switchName={'section.quantityOrder'}
      >
        <OfferQuantityOrderForm control={props?.control} section={sections?.quantityOrder} />
      </PanelEnableSection>

      {/* section product */}
      <PanelEnableSection
        title={t('sections.product.title')}
        subtitle={t('sections.product.subtitle')}
        checked={sections?.product}
        titleMb={3}
        switchName={'section.product'}
      >
        <OfferProductFrom productSection={sections?.product} {...props} />
      </PanelEnableSection>

      {/* section address */}
      <PanelEnableSection
        title={t('sections.address.title')}
        subtitle={t('sections.address.subtitle')}
        checked={sections?.address}
        titleMb={3}
        switchName={'section.address'}
      >
        <OfferAddressFormRule section={sections?.address} {...props} />
      </PanelEnableSection>
    </>
  );
};

export default OfferCommonRulesContainer;
