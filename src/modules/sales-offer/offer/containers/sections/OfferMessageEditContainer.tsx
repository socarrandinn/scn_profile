import { useMemo } from 'react';
import { useOfferContext } from '../../contexts/OfferContext';
import useOfferMessageEditForm from '../../hooks/useOfferMessageEditForm';
import { pick } from 'lodash';
import OfferEditForm from '../../components/OfferForm/OfferEditForm';
import { OfferDescriptionForm } from '../../components/OfferDescriptionForm';
import OfferFormActions from '../../components/OfferFormAction/OfferFormActions';
import { CouponOrderService } from 'modules/sales-offer/coupon/services';

type Props = {
  onClose: () => void;
};

const OfferMessageEditContainer = ({ onClose }: Props) => {
  const { offer, isCoupon } = useOfferContext();
  const _initData = useMemo(() => pick(offer, ['description', 'promotionText', 'note', 'code']), [offer]);
  const { control, error, isLoading, onSubmit } = useOfferMessageEditForm({
    defaultValues: _initData,
    onClose,
    service: isCoupon && CouponOrderService,
  });
  return (
    <OfferEditForm
      error={error}
      isLoading={isLoading}
      control={control}
      onSubmit={onSubmit}
      formId='offer-message-form'
    >
      {/* section description */}
      <OfferDescriptionForm isCoupon={isCoupon} />

      {/* actions */}
      <OfferFormActions handleClose={onClose} isLoading={isLoading} form='offer-message-form' />
    </OfferEditForm>
  );
};

export default OfferMessageEditContainer;
