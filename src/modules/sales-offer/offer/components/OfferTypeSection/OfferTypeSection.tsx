import { memo } from 'react';
import { DISCOUNT_VALUE_TYPE, OFFER_TYPE } from '../../interfaces/offer.type.enum';
import OfferProductToIncludeFormRule from '../OfferProductToInclude/OfferProductToIncludeFormRule';

import { DiscountType } from '../DiscountType';
import { UseFormResetField, UseFormSetError, UseFormWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { PanelSection } from '../PanelSection';
import OfferTwoForOneFrom from '../OfferTwoForOne/OfferTwoForOneFrom';
type Props = {
  type: OFFER_TYPE;
  discountValueType: DISCOUNT_VALUE_TYPE;
  handleDiscountValueType: (env: any) => void;

  control: any;
  watch: UseFormWatch<any>;
  setError: UseFormSetError<any>;
  resetField: UseFormResetField<any>;
  errors: any;
  clearErrors: any;
};

const OfferTypeSection = ({
  type,
  discountValueType,
  control,
  setError,
  resetField,
  clearErrors,
  watch,
  errors,
  handleDiscountValueType,
}: Props) => {
  const { t } = useTranslation('offerOrder');

  if (type === OFFER_TYPE.INCLUDE_PRODUCT) {
    return (
      <PanelSection title={t('productToInclude')} titleMb={3}>
        <OfferProductToIncludeFormRule {...{ setError, resetField, clearErrors, watch, control, errors }} />
      </PanelSection>
    );
  }

  if (type === OFFER_TYPE.TWO_FOR_ONE) {
    return (
      <PanelSection title={t('twoForOneOffer')} titleMb={3}>
        <OfferTwoForOneFrom name='twoForOneOffers' {...{ control, errors }} />
      </PanelSection>
    );
  }

  return (
    <PanelSection title={t('discountType')} titleMb={3}>
      <DiscountType discountValueType={discountValueType} handleDiscountValueType={handleDiscountValueType} />
    </PanelSection>
  );
};

export default memo(OfferTypeSection);
