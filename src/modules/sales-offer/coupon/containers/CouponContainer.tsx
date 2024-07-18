import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Stack, styled } from '@mui/material';
import { HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import CenterPageLayout1000 from 'modules/sales-offer/offer/layouts/CenterPageLayout1000';
import OfferTitle from 'modules/sales-offer/offer/components/OfferTitle';
import OfferEditForm from 'modules/sales-offer/offer/components/OfferForm/OfferEditForm';
import { PanelSection } from 'modules/sales-offer/offer/components/PanelSection';
import { OfferFormGeneralData } from 'modules/sales-offer/offer/components/OfferFormGeneralData';
import { OFFER_TYPE } from 'modules/sales-offer/offer/interfaces/offer.type.enum';
import OfferProductToIncludeFormRule from 'modules/sales-offer/offer/components/OfferProductToInclude/OfferProductToIncludeFormRule';
import { DiscountType } from 'modules/sales-offer/offer/components/DiscountType';
import { OfferDescriptionForm } from 'modules/sales-offer/offer/components/OfferDescriptionForm';
import Rule from 'modules/sales-offer/offer/components/Rule';
import { PanelEnableSection } from 'modules/sales-offer/offer/components/PanelEnableSection';
import { OfferAmountFrom } from 'modules/sales-offer/offer/components/OfferAmountFrom';
import { OfferUsageForm } from 'modules/sales-offer/offer/components/OfferUsageForm';
import { OfferQuantityOrderForm } from 'modules/sales-offer/offer/components/OfferQuantityOrderForm';
import { OfferProductFrom } from 'modules/sales-offer/offer/components/OfferProductFrom';
import { OfferCategoryFrom } from 'modules/sales-offer/offer/components/OfferCategoryFrom';
import { OfferAddressFormRule } from 'modules/sales-offer/offer/components/OfferAddressFrom';
import { ButtonLink } from '@dfl/react-security';
import useCouponCreateForm from '../hooks/useCouponCreateForm';

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
};
const CouponContainer = ({ offer, link }: CouponContainerProps) => {
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
  } = useCouponCreateForm(offer);

  const someRule = useMemo(() => Object.values(sections)?.some((section) => section), [sections]);
  const type = watch('type');

  return (
    <CenterPageLayout1000>
      <OfferTitle title={t(`offerOrder:types:${(type as string) || 'offer'}`)} />
      <OfferEditForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit}>
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

        {/* section name */}
        <PanelSection title={t(type === OFFER_TYPE.INCLUDE_PRODUCT ? 'productToInclude' : 'discountType')} titleMb={3}>
          <Stack gap={3}>
            {type === OFFER_TYPE.INCLUDE_PRODUCT ? (
              <OfferProductToIncludeFormRule
                {...{ setError, resetField, clearErrors, watch, control, errors, setValue }}
              />
            ) : (
              <DiscountType discountValueType={discountValueType} handleDiscountValueType={handleDiscountValueType} />
            )}
          </Stack>
        </PanelSection>

        {/* section description */}
        <PanelSection title={t('couponOrder:sections:description:title')} titleMb={3}>
          <OfferDescriptionForm isCoupon />
        </PanelSection>

        <Rule description={t('couponOrder:regulation')} sx={{ marginBottom: 3 }} />

        <PanelEnableSection
          title={t('sections.amount.title')}
          subtitle={t('couponOrder:sections.amount.subtitle')}
          checked={sections?.amountSection}
          titleMb={3}
          switchName={'amountSection'}
        >
          <OfferAmountFrom control={control} amountSection={sections?.amountSection} />
        </PanelEnableSection>

        {/* section usage  */}
        <PanelEnableSection
          title={t('sections.usage.title')}
          subtitle={t('couponOrder:sections.usage.subtitle')}
          checked={sections?.usageSection}
          titleMb={3}
          switchName={'usageSection'}
        >
          <OfferUsageForm control={control} usageSection={sections?.usageSection} />
        </PanelEnableSection>

        {/* section quantity orders  */}
        <PanelEnableSection
          title={t('sections.quantity_orders.title')}
          subtitle={t('couponOrder:sections.quantity_orders.subtitle')}
          checked={sections?.quantityOrderSection}
          titleMb={3}
          switchName={'quantityOrderSection'}
        >
          <OfferQuantityOrderForm control={control} quantityOrderSection={sections?.quantityOrderSection} />
        </PanelEnableSection>

        {/* section product */}
        <PanelEnableSection
          title={t('sections.product.title')}
          subtitle={t('couponOrder:sections.product.subtitle')}
          checked={sections?.productSection}
          titleMb={3}
          switchName={'productSection'}
        >
          <OfferProductFrom
            control={control}
            setValue={setValue}
            watch={watch}
            errors={errors}
            productSection={sections?.productSection}
            {...{ setError, resetField, clearErrors }}
          />
        </PanelEnableSection>

        {/* section category */}
        <PanelEnableSection
          title={t('sections.category.title')}
          subtitle={t('couponOrder:sections.category.subtitle')}
          checked={sections?.categorySection}
          titleMb={3}
          switchName={'categorySection'}
        >
          <OfferCategoryFrom
            categorySection={sections?.categorySection}
            {...{ setError, resetField, clearErrors, watch, control, errors }}
          />
        </PanelEnableSection>

        {/* section address */}
        <PanelEnableSection
          title={t('sections.address.title')}
          subtitle={t('couponOrder:sections.address.subtitle')}
          checked={sections?.addressSection}
          titleMb={3}
          switchName={'addressSection'}
        >
          <OfferAddressFormRule
            addressSection={sections?.addressSection}
            {...{ setError, resetField, clearErrors, watch, control, errors, state, municipality }}
          />
        </PanelEnableSection>

        <HandlerError error={error} />

        <Stack flexDirection={'row'} justifyContent={'end'} gap={1} mb={10} mt={2}>
          <ButtonLink to={link || '/sales/offers/settings/coupons'} variant='outlined'>
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
