import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Paper, Stack, styled } from '@mui/material';
import { FormCheckBoxField, HandlerError, LoadingButton } from '@dfl/mui-react-common';
import { IExtendOffer } from 'modules/sales-offer/offer/interfaces/IExtendOffer';
import useOfferCreateForm from 'modules/sales-offer/offer/hooks/useOfferCreateForm';
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

import OfferClientRulesContainer from '../../common/containers/OfferClientRulesContainer';
import OfferCommonRulesContainer from '../../common/containers/OfferCommonRulesContainer';
import { useNavigate } from 'react-router';

export const SectionName = styled(Paper)(({ theme }) => ({
  padding: 16,
  [theme.breakpoints.down('md')]: {
    padding: 8,
  },
  marginBottom: 16,
}));
type OfferContainerProps = {
  offer?: IExtendOffer;
  onClose?: VoidFunction;
};
const OfferContainer = ({ offer, onClose }: OfferContainerProps) => {
  const { t } = useTranslation('offerOrder');

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
  } = useOfferCreateForm(offer, onClose);

  const someRule = Object.values(sections)?.some(Boolean);
  const type = watch('type');
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    if (!onClose) {
      navigate('/sales/offers/settings/offer_orders');
      return;
    }
    onClose?.();
  }, [navigate, onClose]);

  return (
    <CenterPageLayout1000>
      <OfferTitle onClose={onClose} title={t(`offerOrder:types:${(type as string) || 'offer'}`)} />
      <OfferEditForm error={error} isLoading={isLoading} control={control} onSubmit={onSubmit} setValue={setValue}>
        {/* section name */}
        <PanelSection
          title={t('generalData')}
          titleMb={3}
          actions={<FormCheckBoxField name='always' label={t('multipleOffer')} />}
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
        <PanelSection title={t('offerOrder:sections:description:title')} titleMb={3}>
          <OfferDescriptionForm />
        </PanelSection>

        <Rule description={t('regulation')} sx={{ marginBottom: 3 }} />

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
          <Button variant='grey' onClick={handleClose}>
            {t('common:cancel')}
          </Button>
          <LoadingButton variant='contained' type={'submit'} loading={isLoading} disabled={!someRule} form='offer-form'>
            {t('common:save')}
          </LoadingButton>
        </Stack>
      </OfferEditForm>
    </CenterPageLayout1000>
  );
};

export default memo(OfferContainer);
