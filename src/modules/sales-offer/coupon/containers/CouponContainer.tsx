import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Stack, styled } from '@mui/material';
import { HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import CenterPageLayout1000 from 'modules/sales-offer/offer/layouts/CenterPageLayout1000';
import OfferTitle from 'modules/sales-offer/offer/components/OfferTitle';
import OfferEditForm from 'modules/sales-offer/offer/components/OfferForm/OfferEditForm';
import { PanelSection } from 'modules/sales-offer/offer/components/PanelSection';
import { OfferFormGeneralData } from 'modules/sales-offer/offer/components/OfferFormGeneralData';
import { OfferDescriptionForm } from 'modules/sales-offer/offer/components/OfferDescriptionForm';
import Rule from 'modules/sales-offer/offer/components/Rule';

import { ButtonLink } from '@dfl/react-security';
import useCouponCreateForm from '../hooks/useCouponCreateForm';
import OfferCommonRulesContainer from 'modules/sales-offer/common/containers/OfferCommonRulesContainer';
import OfferClientRulesContainer from 'modules/sales-offer/common/containers/OfferClientRulesContainer';
import OfferTypeSection from 'modules/sales-offer/offer/components/OfferTypeSection/OfferTypeSection';

export const SectionName = styled(Paper)(({ theme }) => ({
  padding: 16,
  [theme.breakpoints.down('md')]: {
    padding: 8,
  },
  marginBottom: 16,
}));
type CouponContainerProps = {
  offer?: IExtendOffer;
  link?: string;
  onClose?: VoidFunction;
};
const CouponContainer = ({ offer, link, onClose }: CouponContainerProps) => {
  const { t } = useTranslation(['offerOrder', 'couponOrder']);

  const {
    control,
    isLoading,
    error,
    onSubmit,
    sections,
    watch,
    setError,
    setValue,
    resetField,
    errors,
    state,
    municipality,
    clearErrors,
    discountValueType,
    handleDiscountValueType,
  } = useCouponCreateForm(offer, onClose);

  const someRule = Object?.values(sections)?.some(Boolean);
  const type = watch('type');

  return (
    <CenterPageLayout1000>
      <OfferTitle onClose={onClose} title={t(`offerOrder:types:${(type as string) || 'offer'}`)} />
      <OfferEditForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} setValue={setValue}>
        {/* section name */}
        <PanelSection
          title={t('generalData')}
          titleMb={3}
          // actions={<FormCheckBoxField name='always' label={t('multipleOffer')} />}
        >
          <Stack gap={3}>
            <OfferFormGeneralData />
          </Stack>
        </PanelSection>

        {/* section type */}
        <OfferTypeSection
          {...{ setError, resetField, clearErrors, watch, control, errors, type }}
          {...{ discountValueType, handleDiscountValueType }}
        />

        {/* section description */}
        <PanelSection title={t('couponOrder:sections:description:title')} titleMb={3}>
          <OfferDescriptionForm isCoupon />
        </PanelSection>

        <Rule description={t('couponOrder:regulation')} sx={{ marginBottom: 3 }} />

        {/* client rules */}
        <OfferClientRulesContainer
          sections={sections}
          {...{ setError, resetField, clearErrors, watch, control, errors }}
        />

        {/* common rules */}
        <OfferCommonRulesContainer
          sections={sections}
          {...{ setError, resetField, clearErrors, watch, control, errors, setValue, state, municipality }}
        />

        <HandlerError error={error} />

        <Stack flexDirection={'row'} justifyContent={'end'} gap={1} mb={10} mt={2}>
          <ButtonLink variant='grey' to={link || '/sales/offers/settings/coupons'}>
            {t('common:cancel')}
          </ButtonLink>
          <LoadingButton
            variant='contained'
            type={'submit'}
            loading={isLoading}
            disabled={!!error || !someRule}
            form='offer-form'
          >
            {t('common:save')}
          </LoadingButton>
        </Stack>
      </OfferEditForm>
    </CenterPageLayout1000>
  );
};

export default memo(CouponContainer);
