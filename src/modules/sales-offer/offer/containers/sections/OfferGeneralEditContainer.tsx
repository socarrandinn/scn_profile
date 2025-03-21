import { useMemo } from 'react';
import OfferFormActions from '../../components/OfferFormAction/OfferFormActions';
import { PanelSection } from '../../components/PanelSection';
import { useTranslation } from 'react-i18next';
import { OfferFormGeneralData } from '../../components/OfferFormGeneralData';
import { FormCheckBoxField } from '@dfl/mui-react-common';
import OfferTypeSection from '../../components/OfferTypeSection/OfferTypeSection';
import useOfferGeneralEditForm from '../../hooks/useOfferGeneralEditForm';
import { useOfferContext } from '../../contexts/OfferContext';
import { pick } from 'lodash';
import OfferEditForm from '../../components/OfferForm/OfferEditForm';
import { OFFER_TYPE } from '../../interfaces/offer.type.enum';
import { Box } from '@mui/material';
import { CouponOrderService } from 'modules/sales-offer/coupon/services';

type Props = {
  onClose: () => void;
};
const OfferGeneralEditContainer = ({ onClose }: Props) => {
  const { t } = useTranslation('offerOrder');
  const { offer, isCoupon } = useOfferContext();
  const _initVale = useMemo(
    () =>
      pick(offer, [
        'name',
        'always',
        'type',
        'fromDate',
        'toDate',
        'discountValue',
        'includeProducts',
        'twoForOneOffers',
      ]),
    [offer],
  );
  const {
    error,
    isLoading,
    control,
    onSubmit,
    errors,
    type,
    discountValueType,
    handleDiscountValueType,
  } = useOfferGeneralEditForm({ defaultValues: _initVale, onClose, service: isCoupon && CouponOrderService });
  return (
    <Box sx={{ mt: 2 }}>
      <OfferEditForm
        error={error}
        isLoading={isLoading}
        control={control}
        onSubmit={onSubmit}
        formId='offer-general-form'
      >
        {/* section name */}
        <PanelSection
          title={t('generalData')}
          titleMb={3}
          actions={<FormCheckBoxField name='always' label={t('multipleOffer')} />}
        >
          <OfferFormGeneralData />
        </PanelSection>

        {/* section type */}
        <OfferTypeSection
          {...{ control, errors }}
          {...{ discountValueType, handleDiscountValueType }}
          type={type as OFFER_TYPE}
        />

        {/* actions */}
        <OfferFormActions handleClose={onClose} isLoading={isLoading} form='offer-general-form' />
      </OfferEditForm>
    </Box>
  );
};

export default OfferGeneralEditContainer;
